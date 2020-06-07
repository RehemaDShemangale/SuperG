//This is an example code for Bottom Navigation//
import React,{Component} from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

//import React Navigation
import {createAppContainer} from 'react-navigation';
import { Feather,Entypo,} from '@expo/vector-icons';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Maskani from './maskani';
import Taarifa from './taarifa';
import Oda from './oda';
import Jisajiri from './jisajir';
import Vyakula from './vyakula';
import Malipo from './malipo';
import Tumaoda from './tumaoda';


const MaskaniStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Maskani: { screen: Maskani },
    Vyakula:  {screen: Vyakula}
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Maskani',
      //Header title
    },
  }
);


const TaarifaStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Taarifa: { screen: Taarifa},
    Jisajiri: {screen:Jisajiri}
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Taarifa',
      //Header title
    },
  }
);

const OdaStack = createStackNavigator(
    {
      //Defination of Navigaton from setting screen
      Oda: { screen: Oda},
      Malipo: { screen: Malipo},
      Tumaoda: { screen: Tumaoda}
    },
    {
      defaultNavigationOptions: {
        //Header customization of the perticular Screen
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTintColor: 'black',
       title: 'Oda zako',
      },
    }
  );


const App = createBottomTabNavigator(
  {
    Maskani: { screen: MaskaniStack,
             navigationOptions: {
                title: 'Maskani',
             } 
          },
    Taarifa: { screen: TaarifaStack,
                 navigationOptions: {
                    title: 'Taarifa',
                 } 
                },
    Oda: { screen: OdaStack,
        navigationOptions: {
            title: 'Oda zako',
        } 
        },
        


  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        if (routeName === 'Maskani') {
            return <Entypo  name="home" size={25} color="black" />;
        } else if (routeName === 'Taarifa') {
            return <Feather  name="mail" size={25} color="black" />;
        } else if (routeName === 'Oda') { 
            return <Feather  name= "shopping-cart"  color ="black" size={30} />;
          }
       
      },
      
    }),
    
    tabBarOptions: {
      activeTintColor: '#2f3542',
      inactiveTintColor: 'black',
      activeBackgroundColor:'rgba(123, 237, 159,0.3)',
      inactiveBackgroundColor:'rgba(241, 242, 246,0.1)'
    }
  }
);
export default createAppContainer(App);