/**
 * Created by andrynegystorov on 7/27/17.
 */
import React, { Component } from 'react';
import { TabNavigator, NavigationActions } from 'react-navigation';
import First from './routes/first';
import Second from './routes/second';

export default class Navigator extends Component {

  _getTabs (){
  return TabNavigator({
    First: {
      screen: First,
    },
    Second: {
      screen: Second,
    },
  }, {
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  });
  }

  render() {

    const AuthTabs = this._getTabs();
    return (
      <AuthTabs/>
    )
  }
}