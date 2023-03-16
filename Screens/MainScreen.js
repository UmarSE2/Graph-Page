import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Foundation from 'react-native-vector-icons/Foundation';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import WatchList from './WatchList';
import Home from './Home';
import Explore from './Explore';
import Wallet from './Wallet';
import { LeftIcon, RightIcon } from '../Components/HeaderIcon';

const MainScreen = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName='Home' tabBarOptions={{ showLabel: false }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={() => ({
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Foundation name="home" size={23} color={focused ? "#6d4ebb" : "black"} />
                    ),
                })}
            />

            <Tab.Screen
                name="Explore"
                component={Explore}
                options={() => ({
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Feather name="trending-up" size={23} color={focused ? "#6d4ebb" : "black"} />
                    ),
                })}
            />

            <Tab.Screen
                name="Wallet"
                component={Wallet}
                options={() => ({
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name="wallet" size={23} color={focused ? "#6d4ebb" : "black"} />
                    ),
                })}
            />

            <Tab.Screen
                name="Watch List"
                component={WatchList}
                options={() => ({
                    title: 'Watchlist',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 17,
                    },
                    headerLeft: () => <LeftIcon />,
                    headerRight: () => <RightIcon />,
                    tabBarIcon: ({ focused }) => (
                        <Icon name="eye" size={28} color={focused ? "#6d4ebb" : "black"} />
                    ),
                })}
            />
        </Tab.Navigator>
    )
}

export default MainScreen;