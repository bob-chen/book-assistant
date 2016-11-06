/**
 * Created by Bob.Chen on 2016/10/30.
 */

import BarcodeScanner from 'react-native-barcode-scanner-universal'

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Platform,
    DeviceEventEmitter
} from 'react-native';

export default class ScanView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: "None"
        };
        this._show = this._show.bind(this);
    }

    render() {
        let scanArea = null;
        if (Platform.OS === 'ios') {
            scanArea = (
                <View style={styles.rectangleContainer}>
                    <View style={styles.rectangle} />
                </View>
            )
        }
        return (
            <View>
                <Text style={ [{color:"red"},{fontSize:16}] }>{this.state.code}</Text>
                <BarcodeScanner
                    onBarCodeRead={ (code) => this._show(code)}
                    style={styles.camera}>
                    {scanArea}
                </BarcodeScanner>
            </View>
        )
    }

    _show(val) {
        this.setState({
            code:val.data
        })

        // Use navigator pop
        // if( this.props.callback ){
        //     this.props.callback(val.data)
        // }

        // Use DeviceEventEmitter
        DeviceEventEmitter.emit('finishScan',val.data);

        if( this.props.navigator ){
            this.props.navigator.pop();
        }
        
    }
}

var styles = StyleSheet.create({
    camera: {
        flex: 1
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    rectangle: {
        height: 250,
        width: 250,
        borderWidth: 2,
        borderColor: '#00FF00',
        backgroundColor: 'transparent'
    }
})