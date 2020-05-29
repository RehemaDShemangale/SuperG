import React, { Component} from 'react';
import Tabi from './src/pages/tab';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


const AppNavigator = createStackNavigator ({
      
      Tabi : { screen: Tabi,
        navigationOptions: {
          headerShown: false
        }
     },
},
{
  initialRouteName: 'Tabi',
}

);

const AppContainer = createAppContainer(AppNavigator);
export default class Darasa extends Component{

    render(){
      return (

            <AppContainer />

  );
}
  }
