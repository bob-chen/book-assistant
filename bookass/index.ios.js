/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBarIOS
} from 'react-native';

import BookList from "./views/book/book_list";
import Navigation from "./views/common/navigation";

// import ScanView from "./views/book/scan_view";

export default class bookass extends Component {
  render() {
    return (

          <Navigation component={BookList} />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('bookass', () => bookass);
