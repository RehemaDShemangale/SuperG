import React, { Component} from 'react';
import { FlatList, Text, View, ImageBackground, TextInput,Image, ScrollView,TabBarIOS,Dimensions } from 'react-native';
import {  AntDesign} from '@expo/vector-icons';
import Jisajiri from './jisajir';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import * as actions from '../../actions';
import NumericInput from "react-native-numeric-input";

class Malipo extends Component {
  static navigationOptions={
    headerShown: false
  }
  state={
      value:1
  }

  showProduct=()=>{
      console.log("cart",this.props.app.cart)
      let cart=Object.values(this.props.app.cart);
       return cart.map((item)=>(
            <View
                key={item.id}
                 style={{
                     flexDirection:'row',
                     alignItems:'center',
                     //paddingHorizontal:20,
                     height:40,
                     borderBottomWidth:1,
                     borderBottomColor:"#AAA"
                 }}
            >
                <AntDesign
                 name="delete" 
                 color="red"  
                 size={18} 
                />
                <Text 
                   style={{
                     color:'#000',
                     fontSize:RFPercentage(2.3),
                     width:'48%',
                     marginLeft:5
                    }}
                >{item.name}
                </Text>
                <View
                    style={{
                        width:'20%',
                        alignItems:'center',
                        marginRight:10
                    }}
                >
                    <NumericInput 
                        value={item.quantity} 
                        onChange={value => this.setState({value})} 
                        onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                        totalWidth={70} 
                        totalHeight={30} 
                        iconSize={25}
                        step={1}
                        valueType='real'
                        rounded 
                        textColor='#B0228C' 
                        iconStyle={{ color: 'white' }} 
                        rightButtonBackgroundColor='#000' 
                        leftButtonBackgroundColor='#000'
                    />
                </View>
                <View
                    style={{
                        width:'20%',
                        alignItems:'center',
                        
                    }}
                >
                    <Text 
                        style={{
                        color:'rgba(255, 165, 2,10)',
                        fontSize:RFPercentage(2.3),
                        alignItems:'center'
                        }}
                    >{item.type}
                    </Text>
                </View>
                
            </View>
        ))
  }

  render(){
    return (
     
      <View 
        style={{
          flex:1,
          backgroundColor:'rgb(255, 255, 255)',
          justifyContent:'space-between'
        }}
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
                style={{
                  height:50,
                  width:160
                }}
             />
             <Text 
                style={{
                  marginTop:5,
                  fontWeight:'bold',
                  fontSize:RFPercentage(2.5)
                }}
             >Malipo
             </Text>

           </View>
           <View>
               <View
                  style={{
                      flexDirection:'row',
                      alignItems:'center',
                      paddingHorizontal:20,
                      height:40,
                      backgroundColor:'rgba(0,0,0,0.05)'
                  }}
               >
                   <Text 
                        style={{
                        color:'#AAA',
                        fontSize:RFPercentage(2.3),
                        width:'60%'
                        }}
                   >Bidhaa
                   </Text>
                   <Text 
                        style={{
                        color:'#AAA',
                        fontSize:RFPercentage(2.3),
                        width:'20%',
                        }}
                   >Idadi
                   </Text>
                   <Text 
                        style={{
                        color:'#AAA',
                        fontSize:RFPercentage(2.3),
                        width:'20%',
                        }}
                   >Gharama
                   </Text>
               </View>
               {this.showProduct()}

               <View
                    style={{
                        width:'100%',
                        paddingLeft:20,
                        paddingRight:40,
                        alignItems:'center',
                        justifyContent:'space-between',
                        flexDirection:'row',
                        marginTop:15
                    }}
               >
                   <Text 
                        style={{
                        color:'#AAA',
                        fontSize:RFPercentage(2.3),
                        }}
                   >Jumla
                   </Text>
                   <Text 
                        style={{
                        color:'rgba(255, 165, 2,10)',
                        fontSize:RFPercentage(2.3),
                        }}
                   >5000
                   </Text>
               </View>

               <View
                    style={{
                        width:'100%',
                        paddingLeft:20,
                        paddingRight:40,
                        alignItems:'center',
                        justifyContent:'space-between',
                        flexDirection:'row',
                        //marginTop:15
                    }}
               >
                   <Text 
                        style={{
                        color:'#AAA',
                        fontSize:RFPercentage(2.3),
                        }}
                   >Usafirishaji
                   </Text>
                   <Text 
                        style={{
                        color:'rgba(255, 165, 2,10)',
                        fontSize:RFPercentage(2.3),
                        }}
                   >2000
                   </Text>
               </View>
               <View
                    style={{
                        width:'100%',
                        paddingLeft:20,
                        paddingRight:40,
                        alignItems:'center',
                        justifyContent:'space-between',
                        flexDirection:'row',
                        borderBottomWidth:1,
                        borderBottomColor:'#AAA',
                        paddingBottom:15
                        //marginTop:15
                    }}
               >
                   <Text 
                        style={{
                        color:'#AAA',
                        fontSize:RFPercentage(2.3),
                        }}
                   >Punguzo
                   </Text>
                   <Text 
                        style={{
                        color:'rgba(255, 165, 2,10)',
                        fontSize:RFPercentage(2.3),
                        }}
                   >0
                   </Text>
               </View>
               <View
                    style={{
                        width:'100%',
                        paddingLeft:20,
                        paddingRight:40,
                        alignItems:'center',
                        justifyContent:'space-between',
                        flexDirection:'row',
                        marginTop:15,
                        marginBottom:30
                    }}
               >
                   <Text 
                        style={{
                        color:'#AAA',
                        fontSize:RFPercentage(2.3),
                        }}
                   >Jumla ya vyote
                   </Text>
                   <Text 
                        style={{
                        color:'rgba(255, 165, 2,10)',
                        fontSize:RFPercentage(2.3),
                        }}
                   >5000
                   </Text>
               </View>
               
               <View
                    style={{
                        height:Dimensions.get('screen').width/9,
                        width:Dimensions.get('screen').width,
                        backgroundColor:'green',
                        alignItems:'center',
                        justifyContent:'center'
                    }}
               >
                   <Text 
                        style={{
                        fontWeight:'bold',
                        fontSize:RFPercentage(2.5),
                        color:'white'
                        }}
                    >
                        ENDELEA
                    </Text>
               </View>
           </View>
          
      </View>
    
    );
  }
  }
  const mapStateToProps = (state) => ({
    app: state.app
  });
export default connect(mapStateToProps,actions)(Malipo);




