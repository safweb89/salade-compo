/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

export default class App extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <WebView source={{uri: 'http://lv-salade-admin.place-station.fr/index.php/salade'}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
  },
});
