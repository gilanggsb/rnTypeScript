import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/home/HomeScreen';
import CounterScreen from '../screens/counter';

export type RootStackParamList = {
    HomeScreen: undefined;
    CounterScreen: undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName='HomeScreen'>
                <RootStack.Screen name='HomeScreen' component={HomeScreen} />
                <RootStack.Screen name='CounterScreen' component={CounterScreen} />
            </RootStack.Navigator>
        </NavigationContainer>)
}
export default RootNavigation;