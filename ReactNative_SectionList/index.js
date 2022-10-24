/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SectionList_Color from './screens/SectionList_Color';
import SectionList_Menu from './screens/SectionList_Menu';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => SectionList_Menu);
