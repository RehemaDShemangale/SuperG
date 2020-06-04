import React, { Component} from 'react';
import { Text, View,  Image, TextInput, ImageBackground,FlatList, Dimensions} from 'react-native';
import { EvilIcons,SimpleLineIcons, AntDesign} from '@expo/vector-icons';
import {ScrollableTabView,DefaultTabBar} from '@valdio/react-native-scrollable-tabview';
import { TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import * as actions from '../../actions';




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
        <Image source={{uri:item.bg}}
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
          <Image source={{uri:item.bg}}
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
      let pro2= product.filter(obj => obj.name.includes(item) && obj.type == "vipodozi");
      let pro3= product.filter(obj => obj.name.includes(item) && obj.type == "vinywaji");
      let pro4= product.filter(obj => obj.name.includes(item) && obj.type == "vingine");
      //let pro= product.filter(obj => obj.name.includes(item));
      console.log("new product",product)


      this.setState({vyakula:pro,vipodozi:pro2,vinywaji:pro3,vingine:pro4});
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

  showVipodozi=()=>{
    if(this.state.vipodozi.length > 0){
      return(
          <FlatList
              tabLabel='Vipodozi'
              data={this.state.vipodozi}
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
            tabLabel='Vipodozi'
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

  showVinywaji=()=>{
    if(this.state.vinywaji.length > 0){
      return(
          <FlatList
              tabLabel='Vinywaji'
              data={this.state.vinywaji}
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
            tabLabel='Vinywaji'
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

  showVingine=()=>{
    if(this.state.vingine.length > 0){
      return(
          <FlatList
              tabLabel='Vitu Vingine'
              data={this.state.vingine}
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
            tabLabel='Vitu Vingine'
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
          {this.showVinywaji()}
          {this.showVipodozi()}

          {this.showVingine()}


      </ScrollableTabView> 

    </ImageBackground>                                                                             

  );
}
}
const mapStateToProps = (state) => ({
  app: state.app
});
export default connect(mapStateToProps,actions)(Vyakula);