import React, { Component} from 'react';
import { FlatList, Text, View, ImageBackground,TouchableWithoutFeedback,ActivityIndicator,TouchableOpacity,TextInput,Image, ScrollView,TabBarIOS,Dimensions,Alert, } from 'react-native';
import {  AntDesign} from '@expo/vector-icons';
import Jisajiri from './jisajir';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import * as actions from '../../actions';
import NumericInput from "react-native-numeric-input";
import axios from 'axios'; 

class Tumaoda extends Component {
  static navigationOptions={
    headerShown: false
  }

  state={
      jina:"",
      namba1:"",
      namba2:"",
      email:"",
      location:"",
      loading:false
  }

  componentDidMount=()=>{
    this.props.updateMalipoCart(Object.values(this.props.app.cart))
  }

  tuma=()=>{
      let {jina,namba1,namba2,email,location}=this.state;
      if(jina =="" || namba1 =="" || namba2 =="" || location==""){
          Alert.alert("","Jaza nafasi zilizo wazi");
      } 
      else if(namba1.length !=9 || namba2.length != 9){
        Alert.alert("","weka namba ya simu sahihi");
      }
      else{
        this.setState({loading:true})
          console.log("malipo_cart",this.props.app.malipo_cart);
          axios.get("https://supergenge.000webhostapp.com/create_order.php",
          {
            params: {
                jina,
                namba1,
                namba2,
                email,
                location,
                deliver_cost:1000,
                total:this.props.total
              }
          })
            .then(res => {
              
            console.log("data",res);
            //Alert.alert("","data send an return id "+res.data)
            let malipo_cart=this.props.malipo_cart;
               for(let x=0;x<malipo_cart.length;x++){
                    let malipo=malipo_cart[x];
                  axios.get("https://supergenge.000webhostapp.com/ordered_product.php",
                  {
                    params: { 
                      product_id:malipo.id,
                      order_id:res.data,
                      product_name:malipo.name,
                      product_price:malipo.type,
                      $quantity:malipo.quantity,
                      $product_image:malipo.img
                    }
                  })
                    .then(res => {
                      
                      this.props.deleteMalipoCart(malipo.id);
                      console.log("data",res);
                      let newl=malipo_cart.length-1;
                      if(x==newl){
                        this.setState({loading:false});
                        Alert.alert("","Umefanikiwa kukamilisha oda");
                        this.props.navigation.navigate("Oda")
                      }
                    
                    
                    })
                    .catch(function (error) {
                      this.setState({loading:false})
                        console.log("error1",error);
                    });
                 
               }
            })
            .catch(function (error) {
              this.setState({loading:false})
                console.log("error1",error);
            });

      }
  }
 
  showLoaading=()=>{
    if(this.state.loading == false){
      return(
        <TouchableOpacity
          onPress={this.tuma}
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
                    TUMA
                </Text>
            </View>
        </TouchableOpacity>
      )
    }
    else{
      return(
        <View
          style={{
            alignItems:'center',
            justifyContent:'center'
          }}
        >
          <ActivityIndicator size="large" color="green" />
        </View>
      )
    }
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
           <ScrollView
              style={{
                  paddingHorizontal:15
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
                    fontSize:RFPercentage(2.3)
                    }}
                >KAMILISHA TAARIFA ZA KUSAFIRISHA
                </Text>
                <Text 
                    style={{
                        marginTop:15,
                        fontSize:RFPercentage(2),
                        //paddingHorizontal:20
                    }}
                >Kamilisha taarifa zitakazo saidia kuweza kufikisha huduma zetu kwa wepesi na alaka zaidi.
                </Text>

            </View>

            <Text 
                style={{
                  color:'rgba(255, 153, 0,100)',
                  fontSize:RFPercentage(2),
                  marginTop:20
                }}
             >
               Jina:
             </Text>
             <TextInput 
                style={{
                  borderBottomWidth:1,
                  width:250,
                  fontSize:RFPercentage(2.2)
                }}
                onChangeText={text=>this.setState({jina:text})}
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
                  onChangeText={text=>this.setState({namba1:text})}
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
                  onChangeText={text=>this.setState({namba2:text})}
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
                Barua pepe(Email)(sio lazima):
              </Text>
              <TextInput 
                style={{
                  borderBottomWidth:1,
                  width:250,
                  fontSize:RFPercentage(2.2)
                }}
                onChangeText={text=>this.setState({email:text})}
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
                onChangeText={text=>this.setState({location:text})}
                onSubmitEditing={this.tuma}
                  placeholder=""  
              /> 

           </ScrollView>
           
           {this.showLoaading()}
          
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
export default connect(mapStateToProps,actions)(Tumaoda);




