/**
 * Created by Bob.Chen on 2016/10/23.
 */

import Util from './util' ;
import React, {Component} from 'react';
import {
    StyleSheet,
    TextInput,
    View
} from 'react-native';

export default class Search extends Component {
    render() {
        return (
            <View style={styles.flex_1}>
                <TextInput style={[styles.flex_1, styles.input]} autoCapitalize='none' clearButtonMode='while-editing' {...this.props}/>
            </View>
        );
    }
}


var styles = StyleSheet.create({
    flex_1:{
        flex:1
    },
    input:{
        borderWidth:Util.pixel,
        height:40,
        borderColor:'#AAA',
        paddingLeft:5
    }
});