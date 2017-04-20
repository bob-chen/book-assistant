/**
 * Created by Bob.Chen on 2016/10/23.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView,
    ScrollView,
    Image,
    ActivityIndicatorIOS,
    TouchableOpacity,
    DeviceEventEmitter
} from 'react-native';

import Search from '../common/search';
import Util from '../common/util';
import ServiceURL from '../common/service';
import BookItem from './book_item';
import BookDetail from './book_detail';
import ScanView from "./scan_view";

export default class BookList extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([]),
            keywords: '9787121286469',  // ISBN React精髓
            show: false
        };
        this._renderRow = this._renderRow.bind(this);
        this._changeText = this._changeText.bind(this);
        this._search = this._search.bind(this);
        this._scan = this._scan.bind(this);
    }

    render(){
        return (
            <View style={[styles.flex_1,{marginBottom:44}]}>

                <View style={[styles.search, styles.row]}>
                    <View style={styles.flex_1}>
                        <Search placeholder="请输入图书的名称" onChangeText={this._changeText} defaultValue={this.state.keywords}/>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={this._search}>
                        <Text style={styles.fontFFF}>搜索</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.scan_btn} onPress={this._scan}>
                        <Text style={styles.fontFFF}>扫一扫</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.show ?
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this._renderRow}
                        />
                        : <View><Text>Loading</Text></View>
                }
            </View>
        );
    }

    componentDidMount() {
        this.getData();

        this.subscription = DeviceEventEmitter.addListener('finishScan',this._changeText);
    }

    componentWillUnmount() {
        this.subscription.remove();
    }

    _renderRow(row) {
        return (
            <BookItem row={row} onPress={ () => this._loadPage(row.id) } />
        )
    }

    _changeText(val) {
        this.setState({
            keywords:val
        })
    }

    _search(){
        this.getData();
    }

    _scan(){
        this.props.navigator.push({
            component: ScanView,
            passProps: {
                navigator: this.props.navigator,
                // callback: this._changeText
            }
        })
    }

    _loadPage(id) {
        this.props.navigator.push({
            component: BookDetail,
            passProps: {
                navigator: this.props.navigator,
                id:id
            }
        })
    }

    getData() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var that = this;
        // var baseURL = ServiceURL.book_search + '?count=10&q=' + this.state.keywords;
        var baseURL = ServiceURL.book_search_isbn + this.state.keywords;
        //开启loading
        this.setState({
            show: false
        });
        Util.get(baseURL, function(data){
            // if(!data.books || !data.books.length){
            //     return alert('图书服务出错');
            // }
            // var books = data.books;
            var books = [data];
            that.setState({
                dataSource: ds.cloneWithRows(books),
                show: true
            });
        }, function(err){
            alert(1+err);
        });
    }

}




var styles = StyleSheet.create({
    flex_1:{
        flex:1,
    },
    search:{
        paddingLeft:5,
        paddingRight:5,
        marginBottom:5,
        height:40,
    },
    btn:{
        width:40,
        backgroundColor:'#0091FF',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:Util.pixel,
    },
    scan_btn: {
        marginLeft: 5,
        width:60,
        backgroundColor:'#0091FF',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:Util.pixel,
    },
    fontFFF:{
        color:'#fff'
    },
    row:{
        flexDirection:'row'
    }
});