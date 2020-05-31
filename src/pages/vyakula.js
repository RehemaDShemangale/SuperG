import React, { Component} from 'react';
import Item from './item';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


const AppNavigator = createStackNavigator ({
  
  Item: Item,
      
},
{
  initialRouteName: 'Item',
}

);

const AppContainer = createAppContainer(AppNavigator);
export default class Vyakula extends Component{
  static navigationOptions={
    headerShown: false
}

    render(){
      return (

            <AppContainer />

  );
}
  }


  /*
    TabT : { screen: TabT,
        navigationOptions: {
          headerShown: false
        }
     },
  */