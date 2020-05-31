import React, { Component} from 'react';
import { Text, View,  Image, TextInput, ImageBackground,FlatList, Dimensions} from 'react-native';
import {  AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

let bgu=require('../../assets/kabichi.png');
let bgu1=require('../../assets/nyama.png');
let bgu2=require('../../assets/bili.jpg');
let bgu3=require('../../assets/mchele.png');
let bgu4=require('../../assets/palmOil.jpg');



let live=[
  {id:1,name:"Kabichi (Cabeg)",name1:"Jumla 500tshs  1kg",name2:"rejareja 5100tshs  1kg",bg:bgu},
  {id:2,name:"Nyama ya ng'ombe (meat)",name1:"Jumla 600tshs  1kg",name2:"rejareja 5002tshs  1kg",bg:bgu1},
  {id:3,name:"Bilinganya (Eggplant)",name1:"Jumla 700tshs  1kg",name2:"rejareja 5020tshs  1kg",bg:bgu2},
  {id:4,name:"Mchele (Rice)",name1:"Jumla 800tshs  1kg",name2:"rejareja 5030tshs  1kg",bg:bgu3},
  {id:5,name:"Palmix",name1:"Jumla 900tshs  1kg",name2:"rejareja 5030tshs  1kg",bg:bgu4},

]

export default class Maskani extends Component {
  static navigationOptions={
    headerShown: false
}
  keyExtractor=(item)=>item.id.toString()
  renderItem=({item})=>{
    return (
      <View 
          style={{
            backgroundColor:'white',
            height:Dimensions.get('screen').width/1.7,
            width:"49%",
            paddingHorizontal:5,
            marginRight:4,
            marginLeft:1,
            marginBottom:5,
            paddingBottom:10,
            justifyContent:'space-between'
          }}
      >
        <View 
            style={{
              flexDirection:'row',
              justifyContent:"space-between",
              paddingTop:5
            }}
        >
          <AntDesign
            name="delete" 
            color="red"  
            size={20} 
          />
         
          <AntDesign
            name="sharealt" 
            color="rgba(255, 165, 2,10)"  
            size={20} 
          />
        </View>
        <View>
        <Image source={item.bg}
              style={{
                width: 130, 
                height: 150,
                marginHorizontal:8,
                marginTop:10,
                overflow:'hidden',
                borderRadius:6,
                alignSelf:'center'
              }}
          />
        <Text 
            style={{
              fontWeight:'bold',
              fontSize:RFPercentage(2.3)
            }}
          >{item.name} </Text>
        
        
          <View>
              <Text 
                  style={{
                    fontSize:RFPercentage(1.7),
                    color:'rgba(255, 165, 2,10)'
                  }}
              >{item.name1} </Text>
              <Text 
                style={{
                  fontSize:RFPercentage(1.7),
                  color:'rgba(255, 165, 2,10)'
                }}
              >
                {item.name2} 
              </Text>
            </View>
          </View>
      </View>
     
 
    );
  }


  render(){
    
  return (
      <ImageBackground 
          source={require('../../assets/Layer.png')}
          style={{
            height:250,
            backgroundColor:'rgba(241, 242, 246,0.1)',
            flex:1,
            paddingTop:30
          }}
      >
          <FlatList
              data={live}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              numColumns={2}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom:150}}
              style={{
                paddingHorizontal:2,
                paddingTop:80
              }}
          />
          <View 
              style={{
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'white',
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.39,
                shadowRadius: 8.30,
                elevation: 13,
                width:"80%",
                flexDirection:'row',
                alignSelf:'center',
                position:'absolute',
                bottom:10
              }}
          >
            <Text 
              style={{
                paddingBottom:3,
                fontSize:RFPercentage(2.2),
                marginRight:5
              }}
            >
              Nenda kukalimisha malipo ya oda zako zote 
            </Text>          
            <MaterialCommunityIcons
                name="chevron-triple-right" 
                size={20} 
                color="black"  
            />
          </View>
      </ImageBackground>
           
  );
}
  }

 


