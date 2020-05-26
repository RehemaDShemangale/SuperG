import React, { Component} from 'react';
<<<<<<< HEAD
import { Text, View,  Image, TextInput, ImageBackground,FlatList} from 'react-native';
import {  AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

let bgu=require('./assets/kabichi.png');
let bgu1=require('./assets/nyama.png');
let bgu2=require('./assets/bili.jpg');
let bgu3=require('./assets/mchele.png');
let bgu4=require('./assets/palmOil.jpg');



let live=[
  {id:1,name:"Kabichi (Cabeg)",name1:"Jumla 500tshs  1kg",name2:"rejareja 5100tshs  1kg",bg:bgu},
  {id:2,name:"Nyama ya ng'ombe (meat)",name1:"Jumla 600tshs  1kg",name2:"rejareja 5002tshs  1kg",bg:bgu1},
  {id:3,name:"Bilinganya (Eggplant)",name1:"Jumla 700tshs  1kg",name2:"rejareja 5020tshs  1kg",bg:bgu2},
  {id:4,name:"Mchele (Rice)",name1:"Jumla 800tshs  1kg",name2:"rejareja 5030tshs  1kg",bg:bgu3},
  {id:5,name:"Palmix",name1:"Jumla 900tshs  1kg",name2:"rejareja 5030tshs  1kg",bg:bgu4},

]
=======
import { FlatList, Text, View, ImageBackground, TextInput,Image, TabBarIOS } from 'react-native';
import {  EvilIcons, SimpleLineIcons,} from '@expo/vector-icons';

>>>>>>> d97e0e81ce9b71e63deae9fb4e68c92663b4f981

export default class Maskani extends Component {
  static navigationOptions={
    headerShown: false
<<<<<<< HEAD
}
  keyExtractor=(item)=>item.id.toString()
  renderItem=({item})=>{
    return (
       
      <View style={{backgroundColor:'white',height:210,width:"49%",paddingHorizontal:5,marginRight:4,marginLeft:1,marginBottom:5}}>
      <View style={{flexDirection:'row',justifyContent:"space-between",paddingTop:5}}>
      <AntDesign
        name="delete" color="red"  size={18} 
       />
      <Image source={item.bg}
      style={{width: 130, height: 150,marginHorizontal:8,marginTop:10,overflow:'hidden',borderRadius:6,alignSelf:'center'}}
       />
       <AntDesign
        name="sharealt" color="rgba(255, 165, 2,10)"  size={15} 
       />
       </View>
       <Text style={{fontWeight:'bold',fontSize:12}}>{item.name} </Text>
      <View style={{flexDirection:'row'}}>
       <Text style={{fontSize:10,color:'rgba(255, 165, 2,10)'}}>{item.name1} </Text>
       <Text style={{backgroundColor:'rgba(255, 165, 2,10)',fontSize:8,borderRadius:10,marginBottom:5,fontWeight:'bold',color:'white',marginLeft:19,paddingHorizontal:4}}>NUNUA</Text>
       <Text style={{backgroundColor:'rgba(255, 165, 2,10)',fontSize:8,borderRadius:10,marginBottom:5,fontWeight:'bold',color:'white',marginHorizontal:5,paddingHorizontal:2}}>LIPIA ODA</Text>
      
       </View>
       <View style={{flexDirection:'row'}}>
       <Text style={{fontSize:10,color:'rgba(255, 165, 2,10)'}}>{item.name2} </Text>
       <Text style={{backgroundColor:'rgba(255, 165, 2,10)',fontSize:8,borderRadius:10,marginBottom:5,fontWeight:'bold',color:'white',paddingHorizontal:4,marginLeft:8}}>NUNUA</Text>
       <Text style={{backgroundColor:'rgba(255, 165, 2,10)',fontSize:8,borderRadius:10,marginBottom:5,fontWeight:'bold',color:'white',marginHorizontal:5,paddingHorizontal:2}}>LIPIA ODA</Text>
      
       </View>
      </View>
     
 
    );
  }


  render(){
    
  return (



      <ImageBackground source={require('./assets/Layer.png')}
                            style={{height:250,backgroundColor:'rgba(241, 242, 246,0.1)',flex:1,paddingTop:100}}>
          

        
                  <FlatList
                      data={live}
                      keyExtractor={this.keyExtractor}
                      renderItem={this.renderItem}
                      numColumns={2}
                      horizontal={false}
                      showsVerticalScrollIndicator={false}
                      style={{
                        paddingHorizontal:2
                      }}
                  />
            <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'white',marginBottom:5,marginTop:5,
                 shadowColor: "#000",
                 shadowOffset: {
                   width: 0,
                   height: 6,
                 },
                 shadowOpacity: 0.39,
                 shadowRadius: 8.30,
                 
                 elevation: 13,width:"80%",flexDirection:'row',alignSelf:'center'}}>
              <Text style={{paddingBottom:3}}>Nenda kukalimisha malipo ya oda zako zote </Text>          
              <MaterialCommunityIcons
                      name="chevron-triple-right" size={15} color="black"  
                />
              </View>
              </ImageBackground>
                                                                            


 

  );
}
=======
   }

  render(){
    return (
     
      <View style={{backgroundColor:'red',height:220,width:165,paddingHorizontal:5,marginLeft:5,marginBottom:5}}>

          </View>

  
      
    );
  }
>>>>>>> d97e0e81ce9b71e63deae9fb4e68c92663b4f981
  }

 


