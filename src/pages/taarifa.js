import React, { Component} from 'react';
import { FlatList, Text, View, ImageBackground, TextInput,Image, ScrollView,TabBarIOS,Dimensions } from 'react-native';
import {  EvilIcons, SimpleLineIcons,} from '@expo/vector-icons';
import Jisajiri from './jisajir';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default class Maskani extends Component {
  static navigationOptions={
    headerShown: false
  }

  render(){
    return (
     
      <View 
          style={{
            flex:1,
            backgroundColor:'white',
            paddingHorizontal:15
          }}
      >
        <ScrollView
              contentContainerStyle={{
                paddingBottom:10
              }}
        >
         <View 
            style={{
              alignSelf:'center',
              marginBottom:10,
              alignItems:'center',
              marginTop:30,
            }}
         >
            <Image 
                source={require('../../assets/gengeLogo.png')}
                style={{height:50,width:160}}
            />
            <Text 
                style={{
                  marginTop:5,
                  fontWeight:'bold',
                  fontSize:RFPercentage(2.3)
                }}
            >
              USHIRIKA(MEMMBERSHIP CARD)
            </Text>

         </View>
         <View 
            style={{
              marginTop:10
            }}
         >
            <Text 
              style={{
                marginBottom:15,
                fontSize:RFPercentage(2)
              }}
            >
              Karibu katika kurasa ya ushirika (membership card), 
              ingiza jina na nywila(password) kama umeshajiunga na 
              kama bado bonyeza kitufe chini uweze kujiunganisha na
               kuwa mteja mshirika wetu.
            </Text>
            <Text 
              style={{
                marginTop:10,
                fontSize:RFPercentage(2)
              }} 
            >
              Faida za kujiunga na ushirika (membership card)
               {'\n'} {'\n'}
              1. Taarifa na ujumbe wa huduma zetu vitakufikia kwa 
              urahisi  {'\n'}{'\n'}
              2. Ofa mbalimbali zitakazo tokea utaanza kuzipata kwa 
              wepesi{'\n'}{'\n'}
            </Text>
            
            <Text 
              style={{
                color:'rgba(255, 153, 0,100)',
                fontSize:RFPercentage(2)
              }}
            >
              Jina (User name):
            </Text>
            <TextInput 
              style={{
                borderBottomWidth:1,
                width:250,
                fontSize:RFPercentage(2.4)
              }}
              placeholder=""  
              multiline={false}
            />
            <Text 
              style={{
                color:'rgba(255, 153, 0,10)',
                marginTop:15,
                fontSize:RFPercentage(2)
              }}
            >
              Nywila (Password):
            </Text>
            
            <TextInput 
              style={{
                borderBottomWidth:1,
                width:250,
                fontSize:RFPercentage(2.4)
              }}
              placeholder=""  
              multiline={false}
            /> 
            <View 
              style={{
                flexDirection:'row',
                alignItems:'center',
                marginTop:15,
              }}
            >      
              <Text 
                style={{
                  color:'rgba(255, 153, 0,10)',
                  alignItems:'center',
                  justifyContent:'center',
                  marginRight:10,
                  borderWidth:0.2,
                  borderRadius:5,
                  paddingHorizontal:10,
                  paddingVertical:5,
                  backgroundColor:'white', 
                  fontSize:RFPercentage(2.3), 
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.23,
                  shadowRadius: 2.62,

                  elevation: 4,
                }}
              >
                INGIA
              </Text> 
              <Text 
                style={{
                  marginHorizontal:5,
                  fontWeight:'bold',
                  fontSize:RFPercentage(2),
                  marginRight:10
                }}
              >
                Kama bado haujajiunga bofya 
              </Text>  
              <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate ("Jisajiri")}
              >
                <Text 
                  style={{
                    color:'rgb(0, 51, 153)',
                    textDecorationLine:'underline',
                    fontSize:RFPercentage(2.2)
                  }}
                >
                  JISAJIRI
                </Text> 
              </TouchableOpacity>        
          </View>
        </View>
       </ScrollView>
      </View>
    
    );
  }
  }





