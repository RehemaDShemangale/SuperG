import React, { Component} from 'react';
import { Text, View,  Image, TouchableWithoutFeedback, ImageBackground,FlatList, Dimensions} from 'react-native';
import {  AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import * as actions from '../../actions';
import Uri from '../constants/imageURI';


class Oda extends Component {
  static navigationOptions={
    headerShown: false
}
  keyExtractor=(item)=>item.id.toString()
  renderItem=({item})=>{
    console.log("item",item)
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
          <TouchableWithoutFeedback
              onPress={()=>this.props.removeCart(item.id)}
          >
            <AntDesign
              name="delete" 
              color="red"  
              size={20} 
            />
          </TouchableWithoutFeedback>
          <AntDesign
            name="sharealt" 
            color="rgba(255, 165, 2,10)"  
            size={20} 
          />
        </View>
        <View>
        <Image source={{uri:Uri.uri+item.img}}
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
              >Tsh {item.type}/= </Text>
              
            </View>
          </View>
      </View>
     
 
    );
  }

  showMain=()=>{
    if(Object.values(this.props.app.cart).length > 0){
      return(
        <FlatList
              data={Object.values(this.props.app.cart)}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              numColumns={2}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom:120}}
              style={{
                paddingHorizontal:2,
                paddingTop:80
              }}
          />
      )
    }

    else{
      return(
        <View
           style={{
             flex:1,
             justifyContent:'center',
             alignItems:'center'
           }}
        >
            <Text 
                  style={{
                    fontSize:RFPercentage(3),
                    color:'rgba(255, 165, 2,10)'
                  }}
              >Hakuna Bidhaa kwenye Tenga</Text>
        </View>
      )
    }
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
          {this.showMain()}
          {Object.values(this.props.app.cart).length > 0 && 
          <TouchableWithoutFeedback
              onPress={()=>this.props.navigation.navigate("Malipo")}
          >
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
                Nenda kakamilishe malipo ya oda zako zote 
              </Text>          
              <MaterialCommunityIcons
                  name="chevron-triple-right" 
                  size={20} 
                  color="black"  
              />
            </View>
          </TouchableWithoutFeedback>
          }
      </ImageBackground>
  );
}
  }
  const mapStateToProps = (state) => ({
    app: state.app
  });
export default connect(mapStateToProps,actions)(Oda);
 


