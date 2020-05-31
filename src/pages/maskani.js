import React, { Component} from 'react';
import { Text, View,  Image, TextInput, TouchableWithoutFeedback,ImageBackground,FlatList,Dimensions} from 'react-native';
import { EvilIcons,SimpleLineIcons, AntDesign} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

let bgu=require('../../assets/kabichi.png');
let bgu1=require('../../assets/nyama.png');
let bgu2=require('../../assets/bili.jpg');
let bgu3=require('../../assets/mchele.png');
let bgu4=require('../../assets/palmOil.jpg');
let bgu5=require('../../assets/oil.jpg');


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
      <TouchableWithoutFeedback 
          onPress={()=>this.props.navigation.navigate ("Vyakula")}
      >
        <View 
          style={{
            backgroundColor:'white',
            height:Dimensions.get('screen').width/1.8,
            width:"49%",
            paddingHorizontal:5,
            paddingBottom:5,
            marginLeft:5,
            marginBottom:5,
            justifyContent:'flex-end'
          }}
        >
            <AntDesign
              name="sharealt" 
              color="rgba(255, 165, 2,10)"  
              size={20} 
              style={{
              position:'absolute',
              right:5,
              top:5

              }}
            />
          
            <Image source={item.bg}
              style={{
                width: 130, 
                height: 140,
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
    </TouchableWithoutFeedback>
 
    );
  }


  render(){
    
  return (

    <View  
      style={{
        flex:1,
        backgroundColor:'#f1f2f0'
      }}
    >


      <ImageBackground 
          source={require('../../assets/Layer.png')}
          style={{height:250,}}
      >
          <View 
             style={{
               flexDirection:'row',
               alignItems:'center',
               marginTop:30
              }}
          >
            <View 
              style={{
                flexDirection:'row',
                backgroundColor:'#f1f2f6',
                justifyContent:'space-between',
                alignItems:'center',
                width:200,
                borderRadius:5,
                marginLeft:20,
                marginRight:15,
                paddingHorizontal:10,
                paddingVertical:5
              }}
            >
              <TextInput 
                style={{width:"90%",fontSize:RFPercentage(2.2)}}
                placeholder="Tafuta Bidhaa"
                
              />  
              <EvilIcons
                name="search"
                color="#a4b0be" size={25}
              />
            </View>  
            <SimpleLineIcons
              name="settings"
              color="#57606f" size={30} 
            />
          </View> 

    </ImageBackground>
    
    
      <FlatList
          data={live}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          numColumns={2}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom:70}}
          style={{
            paddingTop:70
          }}
      />

    <View 
        style={{
          backgroundColor:'white',
          height:135,
          borderRadius:3,
          width:"90%",
          alignSelf:'center',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,  
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          position:'absolute',
          top:170,
          
        }}
      >
        <View 
          style={{
            borderBottomWidth:0.5,
            paddingBottom:10
            }}
        >
          <View 
            style={{
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between',
              paddingHorizontal:15,
              marginTop:10
            }}
          >
            <Text 
              style={{
                fontSize:RFPercentage(2.4),
              }}
            >Supper Genge  
              <Text style={{fontSize:RFPercentage(2.1)}}> online shop</Text>
            </Text>
            <Text 
              style={{
                backgroundColor:'rgba(255, 165, 2,10)',
                fontSize:RFPercentage(2.2),
                color:'white',
                borderRadius:10,
                paddingHorizontal:5
              }}
            >OPENED
            </Text>
            
          </View>  
          <Text 
            style={{
              marginHorizontal:20,
              fontSize:13,
              color:'#747d8c',
              fontSize:RFPercentage(2),
              alignItems:'center'
            }}
          >Wauzaji na wasambazaji wa jumla na rejareja 
          <Text style={{color:'rgb(230, 149, 0)',fontSize:RFPercentage(2.1)}}> - DSM</Text>
          </Text>

        </View>
        <View 
          style={{
            flexDirection:'row',
            marginHorizontal:20,
            top:20,
            justifyContent:'space-between'
          }}
        >
          <Text 
            style={{
              borderBottomWidth:3,
              color:'rgba(255, 165, 2,10)',
              paddingBottom:24,
              paddingHorizontal:15,
              fontSize:RFPercentage(2.5),
              borderBottomColor:'rgba(255, 165, 2,10)'
            }}
          >Menu
          </Text>
          
          <Text style={{marginRight:15,fontSize:RFPercentage(2.5)}}>Msaada</Text>

        </View>

      </View> 

    </View>                                                                             

  );
}
  }
