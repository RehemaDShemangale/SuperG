import React, { Component} from 'react';
import TabT from './TopTab';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


const AppNavigator = createStackNavigator ({
  

      
    TabT : { screen: TabT,
        navigationOptions: {
          headerShown: false
        }
     },



},
{
  initialRouteName: 'TabT',
}

);

const AppContainer = createAppContainer(AppNavigator);
export default class Items extends Component{

    render(){
      return (

            <AppContainer />

  );
}
  }


  /*

    const TabBar = (props) => {
         const { navigationState, navigation, position} = props
         return (
          <View style={{
            height: 80,
            backgroundColor: 'seashell',
            flexDirection: "row",
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
            {navigationState.routes.map((route, index) =>{
              const focusAnim = position.interpolate ({
                inputRange:[index -1,index, index +1],
                outputRange:[0,1,0]
              })
            return(
              <Tab
                  focusAnim={focusAnim}
                  title={route.Vyakula}
                  onPress={()=> navigation.navigate(route.Vyakula)}
              />
            )  
            })}
          </View>
         )
    }

    export default TabBar
  */