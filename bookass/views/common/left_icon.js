/**
 * Created by yucongchen on 2016/10/22.
 */
import Util from './util' ;
import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

export default class LeftIcon extends Component {

    render() {
        return (
            <View>
                <View style={styles.go}>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    go:{
        borderLeftWidth: 4 * Util.pixel,
        borderBottomWidth: 4 * Util.pixel,
        width:15,
        height:15,
        transform: [{rotate: '45deg'}],
        borderColor:'#FFF',
        marginLeft:10
    }
});