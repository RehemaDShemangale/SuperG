import React, { Component} from 'react';
import { Text, View,  Image, TextInput, ImageBackground,FlatList} from 'react-native';
import { EvilIcons,SimpleLineIcons, AntDesign} from '@expo/vector-icons';
import {ScrollableTabView,DefaultTabBar} from '@valdio/react-native-scrollable-tabview';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

let bgu=require('./assets/kabichi.png');


let live=[
  {id:1,name:"Kabichi (Cabeg) ya Arusha",name0:"Kabichi safi iliyo andaliwa freshi kwa \n matumizi ya binadam kutoka Arusha",name1:"Jumla 500tshs kuanzia makabichi 10 na kuendelea ",name2:"Rejareja 600tshs kwanzia 1 na kuendelea",bg:bgu},
  {id:2,name:"Kabichi (Cabeg) ya Mbeya",name0:"Kabichi safi iliyo andaliwa freshi kwa \n matumizi ya binadam kutoka mbeya",name1:"Jumla 600tshs kuanzia makabichi 10 na kuendelea",name2:"Rejareja 700tshs kwanzia 1 na kuendelea",bg:bgu},
  {id:3,name:"Kabichi (Cabeg) Nyekundu",name0:"Kabichi safi nyekundu iliyo andaliwa freshi kwa \n matumizi ya binadam ",name1:"Jumla 700tshs kuanzia makabichi 10 na kuendelea",name2:"Rejareja 800tshs kwanzia 1 na kuendelea",bg:bgu},
  {id:4,name:"Kabichi (Cabeg) ya Iringa",name0:"Kabichi safi iliyo andaliwa freshi kwa \n matumizi ya binadam kutoka Iringa",name1:"Jumla 800tshs kuanzia makabichi 10 na kuendelea",name2:"Rejareja 900tshs kwanzia 1 na kuendelea",bg:bgu},
  {id:5,name:"Kabichi (Cabeg) ya DSM",name0:"Kabichi safi iliyo andaliwa freshi kwa \n matumizi ya binadam kutoka DSM",name1:"Jumla 900tshs kuanzia makabichi 10 na kuendelea",name2:"Rejareja 1000tshs kwanzia 1 na kuendelea",bg:bgu},
  {id:6,name:"Kabichi (Cabeg) ya Moro",name0:"Kabichi safi iliyo andaliwa freshi kwa \n matumizi ya binadam kutoka Moro",name1:"Jumla 980tshs kuanzia makabichi 10 na kuendelea",name2:"Rejareja 1000tshs kwanzia 1 na kuendelea",bg:bgu},
]

export default class Maskani extends Component {
  static navigationOptions={
    headerShown: false
}
  keyExtractor=(item)=>item.id.toString()
  renderItem=({item})=>{
    return (

      <View style={{backgroundColor:'white',borderBottomWidth:0.2}}>

      <View style={{flexDirection:'row',paddingTop:5}}>
      <Image source={item.bg}
      style={{width: 130, height: 150,marginHorizontal:8,marginTop:10,overflow:'hidden',borderRadius:6,alignSelf:'center'}}
       />
       <AntDesign
        name="sharealt" color="rgba(255, 165, 2,10)"  size={15} 
       />
       <View style={{marginTop:10,paddingHorizontal:10}}>
      <Text style={{fontWeight:'bold',fontSize:12}}>{item.name} </Text>
      <Text style={{fontSize:11,marginTop:10}}>{item.name0} </Text>
      <Text style={{fontSize:10,color:'rgba(255, 165, 2,10)',marginTop:20}}>{item.name1} </Text>
      <Text style={{fontSize:10,color:'rgba(255, 165, 2,10)',marginTop:5}}>{item.name2} </Text>

      <View style={{flexDirection:'row',marginTop:10,alignSelf:'flex-end'}}>
       <Text style={{backgroundColor:'rgba(255, 165, 2,10)',fontSize:12,fontWeight:'bold',borderRadius:10,color:'white',paddingHorizontal:4}}>NUNUA</Text>
       <Text style={{backgroundColor:'rgba(255, 165, 2,10)',fontSize:12,fontWeight:'bold',borderRadius:10,color:'white',marginHorizontal:5,paddingHorizontal:4}}>WEKA ODA</Text>
       </View>


       </View>

       </View>

      </View>
     
 
    );
  }


  render(){
    
  return (

    <View  style={{flex:1,backgroundColor:'rgb(0, 204, 68)'}}>

                <View style={{flexDirection:'row',alignItems:'center',marginTop:30}}>
                <View style={{flexDirection:'row',backgroundColor:'#f1f2f6',justifyContent:'space-between',alignItems:'center'
                ,width:200,borderRadius:5,marginHorizontal:20,paddingHorizontal:10}}>
                <TextInput style={{}}
                  placeholder="Tafuta Bidhaa"
                  
                />  
                <EvilIcons
                  name="search"
                  color="#a4b0be" size={20}
                />
                </View>  
                <SimpleLineIcons
                  name="settings"
                  color="#57606f" size={25} 
                />
                </View>     
                <ScrollableTabView
      renderTabBar={() => <DefaultTabBar />}
      ref={(tabView) => { this.tabView = tabView; }}
    >
      <Text tabLabel='Vyakula'>My</Text>
      <Text tabLabel='Vinywaji'>favorite</Text>
      <Text tabLabel='Gesi'>project</Text>
      <Text tabLabel='Vitu vingine'>project</Text>
    </ScrollableTabView>

   
        <View
        style={{height:78}}
        />


                  <FlatList
                      data={live}
                      keyExtractor={this.keyExtractor}
                      renderItem={this.renderItem}
                      horizontal={false}
                      showsVerticalScrollIndicator={false}
                      style={{
                        paddingHorizontal:2
                      }}
                  />
   
                </View>                                                                             


 

  );
}
  }
