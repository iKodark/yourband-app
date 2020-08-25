import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react';

const AppStack = createStackNavigator();

import Main from './Pages/Main';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';

const Routes = ()=>{
    return (
        <NavigationContainer >
            <AppStack.Navigator  headerMode="none">
                <AppStack.Screen name='Main' component={Main} />
                <AppStack.Screen name='Signin' component={Signin} />
                <AppStack.Screen name='Signup' component={Signup} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;