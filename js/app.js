/**
 * Created by andrynegystorov on 7/27/17.
 */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react/native';
import Navigator from './navigator';

@inject((allStores) => ({
  auth: allStores.auth,
}))
@observer
export default class App extends Component {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <View style={styles.root}>
        <Navigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});