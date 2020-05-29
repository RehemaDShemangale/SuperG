import React, { Component} from 'react';
import { FlatList, Text, View, ImageBackground, TextInput,Image, TabBarIOS } from 'react-native';
import {  EvilIcons, SimpleLineIcons,AntDesign} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

let bgu=require('../../assets/palmOil.jpg');


let live=[
  {id:1,name:"Palmix Hand Sanitizer",name0:"Hand Sanitizer ya 500ml inaua kwa 99.9% na nzuri kwa matumiz ya kuweka safi mikono yako."
  ,name1:"Jumla 4500tshs kuanzia dozen moja na kuendelea ",name2:"Rejareja 6000tshs kuanzia chupa moja na kuendelea",bg:bgu},
  {id:2,name:"Palmix Hand Sanitizer1",name0:"Hand Sanitizer ya 500ml inaua kwa 99.9% na nzuri kwa matumiz ya kuweka safi mikono yako."
  ,name1:"Jumla 4500tshs kuanzia dozen moja na kuendelea ",name2:"Rejareja 6000tshs kuanzia chupa moja na kuendelea",bg:bgu},
  {id:3,name:"Palmix Hand Sanitizer2",name0:"Hand Sanitizer ya 500ml inaua kwa 99.9% na nzuri kwa matumiz ya kuweka safi mikono yako."
  ,name1:"Jumla 4500tshs kuanzia dozen moja na kuendelea ",name2:"Rejareja 6000tshs kuanzia chupa moja na kuendelea",bg:bgu},
  {id:4,name:"Palmix Hand Sanitizer3",name0:"Hand Sanitizer ya 500ml inaua kwa 99.9% na nzuri kwa matumiz ya kuweka safi mikono yako."
  ,name1:"Jumla 4500tshs kuanzia dozen moja na kuendelea ",name2:"Rejareja 6000tshs kuanzia chupa moja na kuendelea",bg:bgu},

]


export default class Vitu extends Component {
  static navigationOptions={
    headerShown: false
  }

  keyExtractor=(item)=>item.id.toString()
  renderItem=({item})=>{
    return (


      <View  
          style={{
            marginTop:90,
            alignSelf:'center',
            borderRadius:10,
            marginHorizontal:10,
            width:320,
            backgroundColor:'white',
            borderColor:'#30C1DD',
            borderWidth:0.5,
            shadowColor:"#30C1DD",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.4,
            shadowRadius: 6.27,
            elevation: 15,
          }}
      >
          <View 
              style={{
                flexDirection:'row',
                backgroundColor:'rgb(255, 255, 255)',
                borderRadius:10,
                width:200,
                height:210,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 3,
                position:'absolute', 
                bottom:300,
                left:60,
                paddingTop:10,
                justifyContent:'center'
              }}
           >
              <Image source={item.bg}
                 style={{
                   width: 130, 
                   height: 190,
                   overflow:'hidden',
                   borderRadius:6
                  }}
              />
              <AntDesign
                  name="sharealt" 
                  color="rgba(255, 165, 2,10)" 
                  size={15} 
              />
           </View>
                <View style={{height:200}} />

                <View 
                    style={{
                      paddingHorizontal:5,
                      backgroundColor:'rgb(0, 204, 0)',
                      borderBottomLeftRadius:10,
                      borderBottomRightRadius:10
                    }}
                >
                    
                <Text style={{fontWeight:'bold',fontSize:20,marginTop:10,marginBottom:10}}>{item.name}</Text> 
                   <Text style={{fontWeight:'bold',fontSize:13,marginTop:15,marginBottom:15}}>{item.name0}</Text>
                   <Text style={{fontWeight:'500',marginTop:15,color:'white'}}>{item.name1}</Text>
                   <Text style={{fontWeight:'500',marginTop:5,color:'white'}}>{item.name2}</Text>
                <View style={{flexDirection:'row',marginTop:25,paddingBottom:10,alignSelf:'flex-end'}}>
                <Text style={{backgroundColor:'rgba(255, 165, 2,10)',fontSize:12,fontWeight:'bold',borderRadius:10,color:'white'
                ,paddingHorizontal:4}}>NUNUA</Text>
                <Text style={{backgroundColor:'rgba(255, 165, 2,10)',fontSize:12,fontWeight:'bold',borderRadius:10,color:'white'
                ,marginHorizontal:5,paddingHorizontal:4}}>WEKA ODA</Text>
                </View>
                </View>


      </View>

    );
  }

  render(){
    return (


                <FlatList
                      data={live}
                      keyExtractor={this.keyExtractor}
                      renderItem={this.renderItem}
                     horizontal={false}
                  />

        

  
      
    );
  }
  }





