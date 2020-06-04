import React, { Component} from 'react';
import { Text, View,Share,Image, TextInput, TouchableWithoutFeedback,ImageBackground,FlatList,Dimensions, Modal} from 'react-native';
import { EvilIcons,SimpleLineIcons, AntDesign} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import * as actions from '../../actions';


class Maskani extends Component {
  static navigationOptions={
    headerShown: false
}

state={
  more:false,
  img:'',
  prod:"",
  jumla:'',
  reja:'',
  id:''
}



  keyExtractor=(item)=>item.id.toString()
  renderItem=({item})=>{
    let cart1=this.props.app.cart;
    let cart2=Object.keys(cart1)
    let cart=cart2.findIndex(obj =>obj ==item.id);
    console.log("cart",cart);
    if(cart ==-1){
        return (
          <TouchableWithoutFeedback 
              //onPress={()=>this.props.navigation.navigate ("Vyakula")}
              onPress={()=>this.setState({id:item.id,img:item.bg,prod:item.name,jumla:item.jumla,reja:item.reja,more:true})}
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
                <TouchableWithoutFeedback
                  onPress={this.openShareDialogAsync}
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
                </TouchableWithoutFeedback>
                <Image source={{uri:item.bg}}
                  style={{
                    width:Dimensions.get('screen').width/3.2, 
                    height:Dimensions.get('screen').width/3,
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
                  >Jumla {item.jumla}tshs 1kg  </Text>
                  <Text 
                    style={{
                      fontSize:RFPercentage(1.7),
                      color:'rgba(255, 165, 2,10)'
                    }}
                  >
                   rejareja {item.reja}tshs 1kg 
                  </Text>

              </View>
              
              
          </View>
        </TouchableWithoutFeedback>
    
        );
   }
   else{
    return (
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
                name="shoppingcart" 
                color="rgba(255, 165, 2,10)"  
                size={23} 
                style={{
                position:'absolute',
                left:5,
                top:5

                }}
              />
              <TouchableWithoutFeedback
                onPress={this.openShareDialogAsync}
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
              </TouchableWithoutFeedback>
              <Image source={item.bg}
                style={{
                  width:Dimensions.get('screen').width/3.2, 
                  height:Dimensions.get('screen').width/3,
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

      );
   }
  }

  cart=(item)=>{
    let data={
      img:this.state.img,
      name:this.state.prod,
      type:item =="jumla"?this.state.jumla:this.state.reja,
      id:this.state.id
    }
    this.setState({more:false})
    this.props.updateCart(data)
  }

  openShareDialogAsync = async () => {
   // Share.open(options);
   try {
    const result = await Share.share({
      message:
        'Download genge',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
  };

  
  render(){
    
  return (

    <View  
      style={{
        flex:1,
        backgroundColor:'#f1f2f0'
      }}
    >
      <Modal
          visible={this.state.more}
          transparent={true}
      >
          <TouchableWithoutFeedback
            onPress={()=>this.setState({more:false})}
        >
          <View
              style={{
                flex:1,
                backgroundColor:'rgba(0,0,0,0.5)',
                alignItems:'center',
                justifyContent:'center'
              }}
          >
              <View
                  style={{
                    width:'80%',
                    height:'55%',
                    backgroundColor:'white',
                    borderRadius:8,
                    padding:10,
                    alignItems:'center',
                    justifyContent:'center'
                  }}
              >
                  <Image source={this.state.img}
                    style={{
                      width:Dimensions.get('screen').width/2.5, 
                      height:Dimensions.get('screen').width/2.5,
                      alignSelf:'center'
                    }}
                  />
                  
              
                <Text 
                  style={{
                    fontWeight:'bold',
                    fontSize:RFPercentage(2.7)
                  }}
                >{this.state.prod} </Text>
              
              
                <View>
                    <Text 
                        style={{
                          fontSize:RFPercentage(2.2),
                          color:'rgba(255, 165, 2,10)'
                        }}
                    >{this.state.jumla} </Text>
                    <Text 
                      style={{
                        fontSize:RFPercentage(2.2),
                        color:'rgba(255, 165, 2,10)'
                      }}
                    >
                      {this.state.reja} 
                    </Text>

                </View>
                <TouchableWithoutFeedback
                   onPress={()=>this.cart("jumla")}
                >
                  <View
                      style={{
                        paddingHorizontal:10,
                        paddingVertical:5,
                        backgroundColor:'rgba(255, 165, 2,10)',
                        borderRadius:5,
                        marginTop:15
                      }}
                  >
                      <Text 
                        style={{
                          fontSize:RFPercentage(2.2),
                          color:'#FFF'
                        }}
                      >
                        Weka Oda Kwa jumla
                      </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={()=>this.cart("reja")}
                >
                  <View
                      style={{
                        paddingHorizontal:10,
                        paddingVertical:5,
                        backgroundColor:'rgba(255, 165, 2,10)',
                        borderRadius:5,
                        marginTop:15
                      }}
                  >
                      <Text 
                        style={{
                          fontSize:RFPercentage(2.2),
                          color:'#FFF'
                        }}
                      >
                        Weka Oda Kwa RejaReja
                      </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>


      <ImageBackground 
          source={require('../../assets/Layer.png')}
          style={{
            height:250,
          }}
      >
          <View 
             style={{
               flexDirection:'row',
               alignItems:'center',
               marginTop:30
              }}
          >
            <TouchableWithoutFeedback
              onPress={()=>this.props.navigation.navigate ("Vyakula")}
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
                <Text 
                  style={{
                    width:"90%",
                    fontSize:RFPercentage(2.2),
                    color:'#AAA'
                  }}
                >  
                Tafuta Bidhaa
                </Text>
                <EvilIcons
                  name="search"
                  color="#a4b0be" 
                  size={25}
                />
              </View> 
            </TouchableWithoutFeedback> 
            <SimpleLineIcons
              name="settings"
              color="#57606f" 
              size={30} 
            />
          </View> 

    </ImageBackground>
    
    
      <FlatList
          data={this.props.app.product}
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
              <Text 
                style={{
                  fontSize:RFPercentage(2.1)
                }}
              > online shop
              </Text>
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
          <Text 
            style={{
              color:'rgb(230, 149, 0)',
              fontSize:RFPercentage(2.1)
            }}
          > - DSM
          </Text>
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
          
          <Text 
            style={{
              marginRight:15,
              fontSize:RFPercentage(2.5)
            }}
          >Msaada
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
export default connect(mapStateToProps,actions)(Maskani);