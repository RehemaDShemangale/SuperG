import React, { Component} from 'react';
import { Text, View,  Image, TextInput, ImageBackground,FlatList} from 'react-native';
<<<<<<< HEAD
import { EvilIcons,SimpleLineIcons, AntDesign} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

let bgu=require('./assets/kabichi.png');
let bgu1=require('./assets/nyama.png');
let bgu2=require('./assets/bili.jpg');
let bgu3=require('./assets/mchele.png');
=======
import { EvilIcons,SimpleLineIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

let bgu=require('./assets/cabeg.jpg');
let bgu1=require('./assets/meat.jpg');
let bgu2=require('./assets/bili.jpg');
let bgu3=require('./assets/rice.jpg');
>>>>>>> d97e0e81ce9b71e63deae9fb4e68c92663b4f981
let bgu4=require('./assets/palmOil.jpg');
let bgu5=require('./assets/oil.jpg');


let live=[
  {id:1,name:"Kabichi (Cabeg)",name1:"Jumla 500tshs  1kg",name2:"rejareja 5100tshs  1kg",bg:bgu},
  {id:2,name:"Nyama ya ng'ombe (meat)",name1:"Jumla 600tshs  1kg",name2:"rejareja 5002tshs  1kg",bg:bgu1},
  {id:3,name:"Bilinganya (Eggplant)",name1:"Jumla 700tshs  1kg",name2:"rejareja 5020tshs  1kg",bg:bgu2},
  {id:4,name:"Mchele (Rice)",name1:"Jumla 800tshs  1kg",name2:"rejareja 5030tshs  1kg",bg:bgu3},
  {id:5,name:"Palmix",name1:"Jumla 900tshs  1kg",name2:"rejareja 5030tshs  1kg",bg:bgu4},
  {id:6,name:"Blue Magic Oil",name1:"Jumla 980tshs  1kg",name2:"rejareja 5050tshs  1kg",bg:bgu5},
]

export default class Maskani extends Component {
  static navigationOptions={
    headerShown: false
}
  keyExtractor=(item)=>item.id.toString()
  renderItem=({item})=>{
    return (
     
<<<<<<< HEAD
      
      <View style={{backgroundColor:'white',height:208,width:"49%",paddingHorizontal:5,marginRight:4,marginLeft:1,marginBottom:5}}>
      <View style={{flexDirection:'row',justifyContent:"space-between",paddingTop:5}}>
      <Image source={item.bg}
      style={{width: 130, height: 150,marginHorizontal:8,marginTop:10,overflow:'hidden',borderRadius:6,alignSelf:'center'}}
       />
       <AntDesign
        name="sharealt" color="rgba(255, 165, 2,10)"  size={15} 
       />
       </View>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate ("Vyakula")}>
       <Text style={{fontWeight:'bold',fontSize:12}}>{item.name} </Text></TouchableOpacity>
      <View style={{flexDirection:'row'}}>
       <Text style={{fontSize:8,color:'rgba(255, 165, 2,10)'}}>{item.name1} </Text>
       <Text style={{backgroundColor:'rgba(255, 165, 2,10)',fontSize:5,borderRadius:10,marginBottom:5,color:'white',marginLeft:55,paddingHorizontal:2}}>NUNUA</Text>
       <Text style={{backgroundColor:'rgba(255, 165, 2,10)',fontSize:5,borderRadius:10,marginBottom:5,color:'white',marginHorizontal:5,paddingHorizontal:2}}>WEKA ODA</Text>
=======
      <View style={{backgroundColor:'white',height:208,width:"49%",paddingHorizontal:5,marginRight:4,marginLeft:1,marginBottom:5}}>
      <Image source={item.bg}
      style={{width: 130, height: 150,marginHorizontal:8,marginTop:10,overflow:'hidden',borderRadius:6,alignSelf:'center'}}
       />
       <Text style={{fontWeight:'bold',fontSize:12}}>{item.name} </Text>
      <View style={{flexDirection:'row'}}>
       <Text style={{fontSize:8,color:'rgba(255, 165, 2,10)'}}>{item.name1} </Text>
       <Text style={{backgroundColor:'rgba(255, 165, 2,10)',fontSize:8,borderRadius:10,marginBottom:5,marginLeft:55,paddingHorizontal:5}}>miica</Text>
       <Text style={{backgroundColor:'rgba(255, 165, 2,10)',fontSize:8,borderRadius:10,marginBottom:5,marginHorizontal:5,paddingHorizontal:5}}>miica</Text>
>>>>>>> d97e0e81ce9b71e63deae9fb4e68c92663b4f981
      
       </View>
       <View style={{flexDirection:'row'}}>
       <Text style={{fontSize:8,color:'rgba(255, 165, 2,10)'}}>{item.name2} </Text>
<<<<<<< HEAD
       <Text style={{backgroundColor:'rgba(255, 165, 2,10)',fontSize:5,borderRadius:10,marginBottom:5,color:'white',paddingHorizontal:2,marginLeft:47}}>NUNUA</Text>
       <Text style={{backgroundColor:'rgba(255, 165, 2,10)',fontSize:5,borderRadius:10,marginBottom:5,color:'white',marginHorizontal:5,paddingHorizontal:2}}>WEKA ODA</Text>
=======
       <Text style={{backgroundColor:'rgba(255, 165, 2,10)',fontSize:8,borderRadius:10,marginBottom:5,paddingHorizontal:5,marginLeft:47}}>miica</Text>
       <Text style={{backgroundColor:'rgba(255, 165, 2,10)',fontSize:8,borderRadius:10,marginBottom:5,marginHorizontal:5,paddingHorizontal:5}}>miica</Text>
>>>>>>> d97e0e81ce9b71e63deae9fb4e68c92663b4f981
      
       </View>
      </View>
     
 
    );
  }


  render(){
    
  return (

    <View  style={{flex:1,backgroundColor:'#f1f2f0'}}>


<<<<<<< HEAD
      <ImageBackground source={require('./assets/Layer.png')}
=======
      <ImageBackground source={require('./assets/s1.jpg')}
>>>>>>> d97e0e81ce9b71e63deae9fb4e68c92663b4f981
                            style={{height:250,}}>
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


      <View style={{backgroundColor:'white',height:135,borderRadius:3,width:"90%",alignSelf:'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      
      elevation: 5,position:'absolute',bottom:-67}}>
        <View style={{borderBottomWidth:0.5,paddingBottom:10}}>
        <View style={{flexDirection:'row',alignItems:'center',marginTop:10,}}>
          <Text style={{marginHorizontal:20,fontSize:20}}>Supper Genge <Text style={{fontSize:15}}>online shop</Text>
          </Text>
          <Text style={{backgroundColor:'rgba(255, 165, 2,10)',fontSize:15,color:'white',right:-45,borderRadius:10,paddingHorizontal:5}}>OPENED</Text>
          
          </View>  
          <Text style={{marginHorizontal:20,fontSize:13,color:'#747d8c'}}>Wauzaji na wasambazaji wa jumla na rejareja <Text style={{color:'rgb(230, 149, 0)'}}>- DSM</Text></Text>

        </View>
        <View style={{flexDirection:'row',marginHorizontal:20,top:20,justifyContent:'space-between'}}>
          <Text style={{borderBottomWidth:3,color:'rgba(255, 165, 2,10)',paddingBottom:24,paddingHorizontal:15,fontSize:17,borderBottomColor:'rgba(255, 165, 2,10)'}}>Menu</Text>
<<<<<<< HEAD
          
=======
          <Text style={{fontSize:17}}> Huduma</Text>
>>>>>>> d97e0e81ce9b71e63deae9fb4e68c92663b4f981
          <Text style={{marginRight:15,fontSize:17}}>Msaada</Text>

        </View>

      </View>            

        </ImageBackground>
        <View
        style={{height:78}}
        />


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
   
                </View>                                                                             


 

  );
}
  }
