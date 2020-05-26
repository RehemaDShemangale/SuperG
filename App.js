import React, { Component} from 'react';
<<<<<<< HEAD
import Tabi from './tab';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
=======
import Maskani from './maskani';
import Taarifa from './taarifa';
import Oda from './oda';
import Tabi from './tab';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Tab } from 'react-tabs';
>>>>>>> d97e0e81ce9b71e63deae9fb4e68c92663b4f981


const AppNavigator = createStackNavigator ({
  
<<<<<<< HEAD

      
=======
      Maskani: Maskani,
      Taarifa: Taarifa,
      Oda: Oda,
>>>>>>> d97e0e81ce9b71e63deae9fb4e68c92663b4f981
      Tabi : { screen: Tabi,
        navigationOptions: {
          headerShown: false
        }
     },

<<<<<<< HEAD


=======
>>>>>>> d97e0e81ce9b71e63deae9fb4e68c92663b4f981
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
