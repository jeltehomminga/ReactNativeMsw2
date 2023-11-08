/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {server} from './msw/server';

if (__DEV__) {
  require('text-encoding');
  require('react-native-url-polyfill/auto');
  server.listen();
}

AppRegistry.registerComponent(appName, () => App);
