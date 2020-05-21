import React, { Component} from 'react';
import Maskani from './maskani';
import Taarifa from './taarifa';
import Oda from './oda';
import Tabi from './tab';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Tab } from 'react-tabs';


const AppNavigator = createStackNavigator ({
  
      Maskani: Maskani,
      Taarifa: Taarifa,
      Oda: Oda,
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
