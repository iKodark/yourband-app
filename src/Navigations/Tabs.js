import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Home from '../Pages/Home';
import Search from '../Pages/Search';
import Settings from '../Pages/Settings';
import Options from '../Pages/Options';
import Player from '../Pages/Player';

import Footer from '../Templates/Dashboard/Footer';

const Tabs = ()=>{
  return (
    <Tab.Navigator
      tabBar={props => <Footer {...props} />}
    >
        <Tab.Screen name="Home" component={ Home } />
        <Tab.Screen name="Search" component={ Search } />
        <Tab.Screen name="Options" component={ Options } />
        <Tab.Screen name="Settings" component={ Settings } />
        {/* <Tab.Screen name="Player" component={ Player } /> */}
    </Tab.Navigator>
  );
}

export default Tabs;