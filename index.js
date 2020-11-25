/**
* @format
*/
 
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//add this line to import the TrackPlayer
import TrackPlayer from 'react-native-track-player';
 
AppRegistry.registerComponent(appName, () => App);

//add this line to register the TrackPlayer
TrackPlayer.registerPlaybackService(() => require('./service.js'));