import React, { Component} from 'react';
import { Text, View,  Image, TextInput, ImageBackground,FlatList, Dimensions} from 'react-native';
import { EvilIcons,SimpleLineIcons, AntDesign} from '@expo/vector-icons';
import {ScrollableTabView,DefaultTabBar} from '@valdio/react-native-scrollable-tabview';
import { TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import VinywajiPage from './vinywaj';
import GesiPage from './gesi';
import VituPage from './v2vingine';
import { connect } from "react-redux";
import * as actions from '../../actions';


let bgu=require('../../assets/kabichi.png');


let live=[
  {id:1,name:"Kabichi (Cabeg) ya Arusha",name0:"Kabichi safi iliyo andaliwa freshi kwa \n matumizi ya binadam kutoka Arusha",name1:"Jumla 500tshs kuanzia makabichi 10 na kuendelea ",name2:"Rejareja 600tshs kwanzia 1 na kuendelea",bg:bgu},
  {id:2,name:"Kabichi (Cabeg) ya Mbeya",name0:"Kabichi safi iliyo andaliwa freshi kwa \n matumizi ya binadam kutoka mbeya",name1:"Jumla 600tshs kuanzia makabichi 10 na kuendelea",name2:"Rejareja 700tshs kwanzia 1 na kuendelea",bg:bgu},
  {id:3,name:"Kabichi (Cabeg) Nyekundu",name0:"Kabichi safi nyekundu iliyo andaliwa freshi kwa \n matumizi ya binadam ",name1:"Jumla 700tshs kuanzia makabichi 10 na kuendelea",name2:"Rejareja 800tshs kwanzia 1 na kuendelea",bg:bgu},
  {id:4,name:"Kabichi (Cabeg) ya Iringa",name0:"Kabichi safi iliyo andaliwa freshi kwa \n matumizi ya binadam kutoka Iringa",name1:"Jumla 800tshs kuanzia makabichi 10 na kuendelea",name2:"Rejareja 900tshs kwanzia 1 na kuendelea",bg:bgu},
  {id:5,name:"Kabichi (Cabeg) ya DSM",name0:"Kabichi safi iliyo andaliwa freshi kwa \n matumizi ya binadam kutoka DSM",name1:"Jumla 900tshs kuanzia makabichi 10 na kuendelea",name2:"Rejareja 1000tshs kwanzia 1 na kuendelea",bg:bgu},
  {id:6,name:"Kabichi (Cabeg) ya Moro",name0:"Kabichi safi iliyo andaliwa freshi kwa \n matumizi ya binadam kutoka Moro",name1:"Jumla 980tshs kuanzia makabichi 10 na kuendelea",name2:"Rejareja 1000tshs kwanzia 1 na kuendelea",bg:bgu},
]

class Vyakula extends Component {
  static navigationOptions={
    headerShown: false
}

state={
  vyakula:[],
  vinywaji:[],
  vipodozi:[],
  vingine:[],
  search:''
}

componentDidMount=()=>{
  // this.setText.focus()
   this.editSticker.focus()
   let product=this.props.app.product;
   let pro1= product.filter(obj =>obj.type == "chakula");
   let pro2= product.filter(obj =>obj.type == "vipodozi");
   let pro3= product.filter(obj =>obj.type == "vinywaji");
   let pro4= product.filter(obj =>obj.type == "other");
   this.setState({vyakula:pro1,vinywaji:pro3,vipodozi:pro2,vingine:pro4});
}

  keyExtractor=(item)=>item.id.toString()
  renderItem=({item})=>{
    return (

      <View 
        style={{
          backgroundColor:'white',
          borderBottomWidth:0.2,
          width:Dimensions.get('screen').width,
          flexDirection:'row',
          marginTop:10,
          paddingBottom:10
        }}
      >

      <View 
        style={{
          //flexDirection:'row',
          paddingTop:10
        }}
      >
        <AntDesign
          name="sharealt" 
          color="rgba(255, 165, 2,10)"  
          size={20} 
          style={{
            alignSelf:'flex-end'
          }}
       />
        <Image source={item.bg}
        style={{
          width:Dimensions.get('screen').width/3.2, 
          height:Dimensions.get('screen').width/3,
          marginHorizontal:8,
          overflow:'hidden',
          borderRadius:6,
          alignSelf:'center'
        }}
        />
       
       </View>
       <View 
          style={{
            paddingTop:10,
            paddingHorizontal:10,
            width:'65%'
          }}
       >

        <Text 
          style={{
            fontWeight:'bold',
            fontSize:RFPercentage(2.1),
          }}
        >
          {item.name} 
        </Text>

        <Text 
          style={{
            fontSize:RFPercentage(1.6),
            marginTop:10
          }}
        >
          {item.desc} 
        </Text>

        <Text 
          style={{
            fontSize:RFPercentage(1.5),
            color:'rgba(255, 165, 2,10)',
            marginTop:20
          }}
        >
         Jumla {item.jumla}tsh kuanzia 10 nakuendelea
        </Text>

        <Text 
          style={{
            fontSize:RFPercentage(1.5),
            color:'rgba(255, 165, 2,10)',
            marginTop:5
          }}
        >
         Rejareja {item.reja}tsh 
        </Text>

      <View 
        style={{
          flexDirection:'row',
          marginTop:10,
          alignSelf:'flex-end',
          alignItems:'center'
        }}
      >
       <Text 
        style={{
          backgroundColor:'rgba(255, 165, 2,10)',
          fontSize:RFPercentage(2.1),
          fontWeight:'bold',
          borderRadius:10,
          color:'white',
          paddingHorizontal:5
        }}
        >NUNUA
        </Text>
       <Text 
        style={{
          backgroundColor:'rgba(255, 165, 2,10)',
          fontSize:RFPercentage(2.1),
          fontWeight:'bold',
          borderRadius:10,
          color:'white',
          marginHorizontal:5,
          paddingHorizontal:5
        }}
        >WEKA ODA
        </Text>
       </View>


       </View>
      </View>
     
 
    );
  }

  renderItem1=({item})=>{
      return (

        <View 
          style={{
            backgroundColor:'white',
            borderBottomWidth:0.2,
            width:Dimensions.get('screen').width,
            flexDirection:'row',
            marginTop:10,
            paddingBottom:10
          }}
        >

        <View 
          style={{
            //flexDirection:'row',
            paddingTop:10
          }}
        >
          <AntDesign
            name="sharealt" 
            color="rgba(255, 165, 2,10)"  
            size={20} 
            style={{
              alignSelf:'flex-end'
            }}
        />
          <Image source={item.bg}
          style={{
            width:Dimensions.get('screen').width/3.2, 
            height:Dimensions.get('screen').width/3,
            marginHorizontal:8,
            overflow:'hidden',
            borderRadius:6,
            alignSelf:'center'
          }}
          />
        
        </View>
        <View 
            style={{
              paddingTop:10,
              paddingHorizontal:10,
              width:'65%'
            }}
        >

          <Text 
            style={{
              fontWeight:'bold',
              fontSize:RFPercentage(2.1),
            }}
          >
            {item.name} 
          </Text>

          <Text 
            style={{
              fontSize:RFPercentage(1.6),
              marginTop:10
            }}
          >
            {item.desc} 
          </Text>

          <Text 
            style={{
              fontSize:RFPercentage(1.5),
              color:'rgba(255, 165, 2,10)',
              marginTop:20
            }}
          >
          Jumla {item.jumla}tsh kuanzia 10 nakuendelea
          </Text>

          <Text 
            style={{
              fontSize:RFPercentage(1.5),
              color:'rgba(255, 165, 2,10)',
              marginTop:5
            }}
          >
          Rejareja {item.reja}tsh 
          </Text>

        <View 
          style={{
            flexDirection:'row',
            marginTop:10,
            alignSelf:'flex-end',
            alignItems:'center'
          }}
        >
        <Text 
          style={{
            backgroundColor:'rgba(255, 165, 2,10)',
            fontSize:RFPercentage(2.1),
            fontWeight:'bold',
            borderRadius:10,
            color:'white',
            paddingHorizontal:5
          }}
          >NUNUA
          </Text>
        <Text 
          style={{
            backgroundColor:'rgba(255, 165, 2,10)',
            fontSize:RFPercentage(2.1),
            fontWeight:'bold',
            borderRadius:10,
            color:'white',
            marginHorizontal:5,
            paddingHorizontal:5
          }}
          >WEKA ODA
          </Text>
        </View>


        </View>
        </View>
      
  
      );
  }

  change=(item)=>{
      this.setState({search:item});
      let product=this.props.app.product;
      let pro= product.filter(obj => obj.name.includes(item) && obj.type == "chakula");
      //let pro= product.filter(obj => obj.name.includes(item));
      console.log("new product",product)
      console.log("new product1",pro)
      this.setState({vyakula:pro});
  }

  showVyakula=()=>{
    if(this.state.vyakula.length > 0){
      return(
          <FlatList
              tabLabel='Vyakula'
              data={this.state.vyakula}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem1}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              style={{
                paddingHorizontal:2
              }}
          />
      )
    }
    else{
      return(
        <View
            tabLabel='Vyakula'
            style={{
              flex:1,
              alignItems:'center',
              justifyContent:'center'
            }}
        >
            <Text 
              style={{
                fontSize:RFPercentage(2.5),
                color:'rgba(255, 165, 2,10)',
              }}
            >
             Hakuna hiyo bidhaa
            </Text>
        </View>
      )
    }
  }

  render(){

  return (

    <ImageBackground 
       source={require("../../assets/bg.jpg")} 
      style={{
        flex:1,
        height:Dimensions.get('screen').height,
        width:Dimensions.get('screen').width,
      }}
    >

      <View 
        style={{
          flexDirection:'row',
          alignItems:'center',
          marginTop:50,
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
            paddingVertical:2
          }}
        >
          <TextInput 
            style={{
              fontSize:RFPercentage(2.2),
              width:'80%'
            }}
            onChangeText={text=>this.change(text)}
            ref={((v)=>this.editSticker=v)}
            placeholder="Tafuta Bidhaa"
            
          />  
          <EvilIcons
            name="search"
            color="#a4b0be" 
            size={25}
          />
        </View>  
        <TouchableWithoutFeedback
          onPress={()=>this.props.navigation.goBack()}
        >
          <Text 
            style={{
              fontSize:RFPercentage(3),
              color:'#57606f',
              fontWeight:'bold'
            }}
          > 
          Hairisha
        </Text>
       </TouchableWithoutFeedback>
      </View>    

      <ScrollableTabView
        style={{
          backgroundColor:'white',
          marginTop:15
        }}
        showsHorizontalScrollIndicator={false}
        // renderTabBar={() => <DefaultTabBar />}
        //ref={(tabView) => { this.tabView = tabView; }}
      >
          
          {this.showVyakula()}
          <FlatList
              tabLabel='Vinywaji'
              data={this.props.app.product}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              style={{
                paddingHorizontal:2
              }}
          />
          <FlatList
              tabLabel='Vipodozi'
              data={this.props.app.product}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              style={{
                paddingHorizontal:2
              }}
          />
           <FlatList
              tabLabel='Vitu vingine'
              data={this.props.app.product}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              horizontal={false}
              showsVerticalScrollIndicator={false}
              style={{
                paddingHorizontal:2
              }}
          />

      </ScrollableTabView> 

    </ImageBackground>                                                                             

  );
}
}
const mapStateToProps = (state) => ({
  app: state.app
});
export default connect(mapStateToProps,actions)(Vyakula);