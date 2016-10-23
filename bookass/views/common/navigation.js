'use strict';

import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Navigator
} from 'react-native';

export default class Navigation extends Component {

    render() {
        return (
            <Navigator
                initialRoute = {{ name:'', component:this.props.component, index:0 }}
                configureScene = { ()=>{ return Navigator.SceneConfigs.FloatFromBottom; } }
                renderScene = {(route, navigator) => {
                    const RouteComponent = route.component;
                    return (
                        <View style={{ flex:1, paddingTop: 64 }}>
                            <RouteComponent navigator={navigator} route={route} {...route.passProps} />
                        </View>
                    )
                }} />
        )
    }
}

