/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {Dimensions} from 'react-native';
import {AppRegistry} from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import abc from "./img/download.jpg"
import icon from "./img/icon.png"
import Routes from "./Routes"
import Login from "./Login"
import SignUp from './SignUp';
import {Router,Stack,Scene} from "react-native-router-flux"


const {width:WIDTH} = Dimensions.get('window')
class App extends React.Component{
  render(){
    return (
      <Router>
                <Stack key="root" hideNavBar={true}>
                <Scene key="login" component={Login} title="Login" initial={true}/>
                <Scene key="register" component={SignUp} title="Register"/>
                </Stack>
            </Router>
      // <View style={styles.container}>
      //   <Login/>
      // </View>
);
  }
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    marginTop: 10,

  },
  icon:{
    width:120,
    height:120
  },
  logoContainer: {
    alignItems: "center",
    marginBottom:50
  },
  logoTxt:{
    color: "white",
    fontSize:20,
    fontWeight:"500",
    marginTop:10,
    opacity:0.5
  },
  input:{
    width: WIDTH-55,
    height:45,
    borderRadius:25,
    fontSize:16,
    paddingLeft:45,
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal:25
  },
  btn: {
    width: WIDTH-55,
    height:45,
    borderRadius:25,
    backgroundColor: "black",
    justifyContent:"center",
    marginTop:28
  },
  txt: {
    color: "rgba(255,255,255,0.7)",
    fontSize:16,
    textAlign: "center"
  },
  signup:{
    alignItems: "flex-end",
    flexDirection: "row"
  },
  signuptxt: {
    color: "white",
    fontWeight:"bold"
  }
});

export default App;
