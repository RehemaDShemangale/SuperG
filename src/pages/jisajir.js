import React, { Component} from 'react';
import {Text, View, TextInput,Image } from 'react-native';
import { AntDesign,} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
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
            backgroundColor:'rgb(255, 255, 255)',
            paddingHorizontal:15
          }}
      >
        <ScrollView 
          showsVerticalScrollIndicator={false}
        >
          <View 
              style={{
                alignSelf:'center',
                marginBottom:10,
                alignItems:'center',
                marginTop:30
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
            <Text 
              style={{
                marginTop:5,
                fontSize:RFPercentage(2.2)
              }}
            >
              Karibu kujisajiri na ushirika(membership card)
            </Text>

           </View>
           <View 
            style={{marginTop:10}}
           >
             <Text 
                style={{
                  color:'rgba(255, 153, 0,100)',
                  fontSize:RFPercentage(2)
                }}
             >
               Majina matatu(User name):
             </Text>
             <TextInput 
                style={{
                  borderBottomWidth:1,
                  width:250,
                  fontSize:RFPercentage(2.2)
                }}
                placeholder=""  
             />
              <Text 
                style={{
                  color:'rgba(255, 153, 0,10)',
                  marginTop:15,
                  fontSize:RFPercentage(2)
                }}
              >
                Namba ya simu kwa mawasiliano(Phone Number):
              </Text>
              <View 
                style={{
                  flexDirection:'row',
                  alignItems:'center'
                }}
              >     
                <Text 
                  style={{
                    //textDecorationLine:'underline',
                    fontWeight:'bold',
                    marginRight:5,
                    fontSize:RFPercentage(2.2)
                  }}
                >
                  255
                </Text>
                <TextInput 
                  style={{
                    borderBottomWidth:1,
                    width:250,
                    fontSize:RFPercentage(2.2)
                  }}
                  placeholder="" 
                  keyboardType="number-pad"
                /> 
              </View>   

              <Text 
                style={{
                  color:'rgba(255, 153, 0,10)',
                  marginTop:15,
                  fontSize:RFPercentage(2)
                }}
              >
                Namba ya simu kwa mawasiliano(Phone Number):
              </Text>
              <View 
                style={{
                  flexDirection:'row',
                  alignItems:'center'
                }}
              >     
                <Text 
                  style={{
                    //textDecorationLine:'underline',
                    fontWeight:'bold',
                    marginRight:5,
                    fontSize:RFPercentage(2.2)
                  }}
                >
                  255
                </Text>
                <TextInput 
                  style={{
                    borderBottomWidth:1,
                    width:250,
                    fontSize:RFPercentage(2.2)
                  }}
                  placeholder="" 
                  keyboardType="number-pad"
                /> 
              </View>

              <Text 
                style={{
                  color:'rgba(255, 153, 0,10)',
                  marginTop:15,
                  fontSize:RFPercentage(2)
                }}
              >
                Barua pepe(Email):
              </Text>
              <TextInput 
                style={{
                  borderBottomWidth:1,
                  width:250,
                  fontSize:RFPercentage(2.2)
                }}
                  placeholder=""  
              /> 
             <Text 
                style={{
                  color:'rgba(255, 153, 0,10)',
                  marginTop:15,
                  fontSize:RFPercentage(2)
                }}
              >
                Eneo(Location):
              </Text>
              <TextInput 
                style={{
                  borderBottomWidth:1,
                  width:250,
                  fontSize:RFPercentage(2.2)
                }}
                  placeholder=""  
              />      
              <Text 
                style={{
                  color:'rgba(255, 153, 0,10)',
                  marginTop:15,
                  fontSize:RFPercentage(2)
                }}
              >
                Nywila(Password):
              </Text>
              <TextInput 
                style={{
                  borderBottomWidth:1,
                  width:250,
                  fontSize:RFPercentage(2.2)
                }}
                  placeholder=""  
              /> 
              <Text 
                style={{
                  color:'rgba(255, 153, 0,10)',
                  marginTop:15,
                  fontSize:RFPercentage(2)
                }}
              >
                Thibitisha nywila(Confirm Password):
              </Text>
              <TextInput 
                style={{
                  borderBottomWidth:1,
                  width:250,
                  fontSize:RFPercentage(2.2)
                }}
                  placeholder=""  
              />

              <View style={{flexDirection:'row',marginTop:10,alignItems:'center',justifyContent:'space-between',width:"70%"}}>
              <Text style={{fontSize:15}}>Notification </Text> 
              <AntDesign name="checksquare" color="rgba(255, 153, 0,100)" size={20} />
              </View> 

              <View style={{flexDirection:'row',marginTop:10,alignItems:'center',justifyContent:'space-between',width:"70%"}}>
              <Text style={{fontSize:15}}>Location </Text> 
              <AntDesign name="checksquareo" color="#ced6e0" size={20} />
              </View>  

           
              <Text style={{color:'rgba(255, 153, 0,10)',marginTop:10,borderWidth:0.2,borderRadius:5,paddingHorizontal:5,width:55,backgroundColor:'white',  shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.23,
                      shadowRadius: 2.62,

                      elevation: 4,}}>SAJIRI</Text> 
              <Text style={{marginTop:10,borderTopWidth:0.5,textAlign:'center'}}>Hivi punde tutakutumia namba(verification code) katika namba zako zote za simu kwa kukamilisha taarifa zako za awali. {'\n'}{'\n'} </Text> 
              <Text style={{color:'rgba(255, 153, 0,10)',textAlign:'center'}}>Kutoka namba ya mawasiliano (PIN CODE 1) {'\n'}
                          <Text style={{color:'black'}}>___ ___ ___ ___{'\n'}</Text>
                    </Text>
                    <Text style={{color:'rgba(255, 153, 0,10)',textAlign:'center'}}>Kutoka namba ya miamala (PIN CODE 2) {'\n'}
                          <Text style={{color:'black'}}>___ ___ ___ ___</Text>
                    </Text>
               
               <View style={{height:50}} />         
              </View>
              </ScrollView>
      </View>

  
      
    );
  }
  }

 
