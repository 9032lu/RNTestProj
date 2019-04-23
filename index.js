/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import AppTest1 from './AppTest1';
import AppTest2 from './AppTest2'

AppRegistry.registerComponent(appName, () => AppTest2);
