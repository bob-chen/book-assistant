/**
 * Created by Bob.Chen on 2016/10/22.
 */

import Icon from './left_icon';
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this._pop = this._pop.bind(this);
    }
    
    render() {
        var obj = this.props.initObj;
        return (
            <View style={ [styles.header, styles.row, styles.center] }>
                <TouchableOpacity style={ [styles.row, styles.center] } onPress={this._pop}>
                    <Icon />
                    <Text style={ styles.fontFFF }>{obj.backName}</Text>
                </TouchableOpacity>
                <View style={[styles.title, styles.center]}>
                    <Text style={[styles.fontFFF,styles.titlePos]}
                          numberOfLines={1}>{obj.title}</Text>
                </View>
            </View>
        )
    }

    _pop () {
        this.props.navigator.pop();
    }
};

var styles = StyleSheet.create({
    row:{
        flexDirection:'row'
    },
    header:{
        height:50 ,
        backgroundColor:'#3497FF',
    },
    fontFFF:{
        color:'#fff',
        fontSize:17,
        fontWeight:'bold'
    },
    title:{
        flex:1
    },
    titlePos:{
        marginLeft:-20,
        width:200,
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    }
});
