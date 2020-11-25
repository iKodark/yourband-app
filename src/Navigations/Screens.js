import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react';

const Stack = createStackNavigator();

import Main from '../Pages/Main';
import Signin from '../Pages/Signin';
import Signup from '../Pages/Signup';

import Tabs from './Tabs';

import Bands from '../Pages/Bands';
import Albums from '../Pages/Albums';
import Musics from '../Pages/Musics';
import Upload from '../Pages/Upload';

const Screens = ()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName="Main">
                <Stack.Screen name='Main' component={Main} />
                <Stack.Screen name='Signin' component={Signin} />
                <Stack.Screen name='Signup' component={Signup} />

                <Stack.Screen name='Dashboard' component={Tabs} />

                <Stack.Screen name='Bands' component={Bands} />
                <Stack.Screen name='Albums' component={Albums} />
                <Stack.Screen name='Musics' component={Musics} />

                <Stack.Screen name='Upload' component={Upload} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Screens;