/**
 * Created by andrynegystorov on 7/27/17.
 */
import React, { Component } from 'react';
import { Provider } from 'mobx-react/native';
import App from './app';
import stores from './stores';

class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider
        {...stores}
      >
        <App/>
      </Provider>
    );
  }
}

export default Root;