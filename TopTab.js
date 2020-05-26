//This is an example code for Bottom Navigation//
import React,{Component} from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet, TabBarIOS } from 'react-native';

//import React Navigation
import {createAppContainer} from 'react-navigation';
import { Feather,Entypo,} from '@expo/vector-icons';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Items from './item';
import Vinywaji from './vinywaj';
import Gesi from './gesi';



const ItemsStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Items:  {screen: Items}
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


const VinywajiStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Vinywaji: { screen: Vinywaji},
    
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

const GesiStack = createStackNavigator(
    {
      //Defination of Navigaton from setting screen
      Gesi: { screen: Gesi},
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


const App = createMaterialTopTabNavigator(
  {
    Items: { screen: ItemsStack,
             navigationOptions: {
                title: 'Vyakula',
             } 
          },
    Vinywaji: { screen: VinywajiStack,
                 navigationOptions: {
                    title: 'Vinywaji',
                 } 
                },
    Gesi: { screen: GesiStack,
        navigationOptions: {
            title: 'Gesi',
        } 
        },

  },
  {

    
    tabBarOptions: {
      activeTintColor: '#2f3542',
      inactiveTintColor: 'black',
      activeBackgroundColor:'rgba(123, 237, 159,0.3)',
      inactiveBackgroundColor:'rgba(241, 242, 246,0.1)'
    }
  },

  {
    tabBarComponent:TabBar,
}
);
export default createAppContainer(App);

/*const AppContainer = createAppContainer(App);
export default class Tab extends Component{
    static navigationOptions={
        headerShown:false,
      }
  
  render(){
  return (
    <AppContainer />
  );
}
}*/