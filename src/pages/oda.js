import React, { Component} from 'react';
import { Text, View,  Image, TouchableWithoutFeedback, ImageBackground,FlatList, Dimensions} from 'react-native';
import {  AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import * as actions from '../../actions';

let bgu=require('../../assets/kabichi.png');
let bgu1=require('../../assets/nyama.png');
let bgu2=require('../../assets/bili.jpg');
let bgu3=require('../../assets/mchele.png');
let bgu4=require('../../assets/palmOil.jpg');



let live=[
  {id:1,name:"Kabichi (Cabeg)",name1:"Jumla 500tshs  1kg",name2:"rejareja 5100tshs  1kg",bg:bgu},
  {id:2,name:"Nyama ya ng'ombe (meat)",name1:"Jumla 600tshs  1kg",name2:"rejareja 5002tshs  1kg",bg:bgu1},
  {id:3,name:"Bilinganya (Eggplant)",name1:"Jumla 700tshs  1kg",name2:"rejareja 5020tshs  1kg",bg:bgu2},
  {id:4,name:"Mchele (Rice)",name1:"Jumla 800tshs  1kg",name2:"rejareja 5030tshs  1kg",bg:bgu3},
  {id:5,name:"Palmix",name1:"Jumla 900tshs  1kg",name2:"rejareja 5030tshs  1kg",bg:bgu4},

]

class Oda extends Component {
  static navigationOptions={
    headerShown: false
}
  keyExtractor=(item)=>item.id.toString()
  renderItem=({item})=>{
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
        <Image source={item.img}
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
              >{item.type} </Text>
              
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
          {Object.values(this.props.app.cart).length > 0 && <View 
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
          </View>}
      </ImageBackground>
  );
}
  }
  const mapStateToProps = (state) => ({
    app: state.app
  });
export default connect(mapStateToProps,actions)(Oda);
 


