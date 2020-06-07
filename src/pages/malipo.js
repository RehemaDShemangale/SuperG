import React, { Component} from 'react';
import { FlatList, Text, View, ImageBackground,TouchableWithoutFeedback,TouchableOpacity, TextInput,Image, ScrollView,TabBarIOS,Dimensions } from 'react-native';
import {  AntDesign} from '@expo/vector-icons';
import Jisajiri from './jisajir';
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

  componentDidMount=()=>{
    this.props.updateMalipoCart(Object.values(this.props.app.cart))
  }

  itemQtyPiker=(qty,id)=>{
    console.log("qty",qty +"n"+ id)
    this.props.quantityUpdate(qty,id);
  }

  delete=(id)=>{
    this.props.deleteMalipoCart(id);
    let malipo=this.props.app.malipo_cart;
    console.log("malipo1",malipo)
    console.log("malipo.length",malipo.length)
    if(malipo.length == 1){
        this.props.navigation.goBack();
    }
  }

  showProduct=()=>{
      console.log("cart malipo",this.props.app.malipo_cart)
      let malipo_cart=this.props.app.malipo_cart;
       return malipo_cart.map((item)=>(
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
                <TouchableWithoutFeedback
                    onPress={()=>this.delete(item.id)}
                >
                    <AntDesign
                    name="delete" 
                    color="red"  
                    size={20} 
                    />
                </TouchableWithoutFeedback>
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
                        onChange={qty => this.itemQtyPiker(qty, item.id)}
                       // onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                        totalWidth={100} 
                        totalHeight={30} 
                        iconSize={25}
                        step={1}
                        valueType='real'
                        minValue={1}
                        editable={false}
                       // rounded 
                        borderColor="black"
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
                   >{this.props.total - 1000}
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
                   >1000
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
                        marginBottom:30,
                        borderBottomWidth:1,
                        borderBottomColor:'#AAA',
                        paddingBottom:15
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
                   >{this.props.total}
                   </Text>
               </View>
           </View>
           <TouchableOpacity
                onPress={()=>this.props.navigation.navigate("Tumaoda")}
           >
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
            </TouchableOpacity>
      </View>
    
    );
  }
  }
  const mapStateToProps = (state) => ({
    app: state.app,
    total:Object.values(state.app.malipo_cart).reduce(
        (prev, cur) => prev + cur.quantity * cur.type,
        1000
      )
  });
export default connect(mapStateToProps,actions)(Malipo);




