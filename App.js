import React, { Component} from 'react';
import Tabi from './src/pages/tab';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import store from './Store';
import { Provider, connect } from 'react-redux';
import {ActivityIndicator,View,ImageBackground,Dimensions} from 'react-native';

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

const Start = ({AppStart, rehydrate}) =>{
  if(rehydrate){
      return (
          <AppContainer/>
      )
  }
  else{
    return(
     <ImageBackground 
        source={require('./assets/splash.png')}
       style={{
         height:Dimensions.get('screen').height,
         width:Dimensions.get('screen').width,
         alignItems:'center',
         justifyContent:'center'
        }}
     >
        <ActivityIndicator size="large" color="rgba(255, 165, 2,10)" />
     </ImageBackground>
    )
  }


}


const mapStateToProps = (state) => ({
  AppStart: state.app,
  rehydrate: state.rehydrate
});
StartApp = connect(mapStateToProps)(Start);

const Root = () => (
  <Provider store={store}>
   
        <StartApp />
  </Provider>
);

export default Root;
