/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {Dimensions} from 'react-native';
import {Actions} from "react-native-router-flux"

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
import abc from "./img/download1.jpg"
import icon from "./img/icon.png"

const {width:WIDTH} = Dimensions.get('window')
class Login extends React.Component{
    signup(){
        Actions.register()
    }
  render(){
    return (
      <ImageBackground source={abc} style={styles.container}>
          <View style={styles.logoContainer}>
              <Image source={icon} style={styles.icon} />
              <Text style={styles.logoTxt}>REACT NATIVE</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input}
            placeholder="Username"
            placeholderTextColor= "rgba(255,255,255,0.7)"
            underlineColorAndroid= "transparent"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor= "rgba(255,255,255,0.7)"
            underlineColorAndroid= "transparent"
            />
          </View>
          <TouchableOpacity style={styles.btn}>
                <Text style={styles.txt}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.signup} style={styles.signup}>
                <Text>Don't have an account yet?</Text>
                <Text style={styles.signuptxt}>SignUp</Text>
            </TouchableOpacity>
      </ImageBackground>
);
  }
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    alignItems: "center",
    justifyContent: "center",
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
    fontWeight:"bold",
    marginTop:10,
    opacity:0.9
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
    color: "white",
    fontSize:16,
    fontWeight:"bold",
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

export default Login;
