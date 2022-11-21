import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export function HomeScreen({ navigation }) {
  return (
<View style={styles.container}>
        <Text  style={[styles.ROIsign, styles.ROItext]}>ROI</Text>
        {/* <Text  style={LoginCredentials()}>ROI</Text> */}
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={() => {
        navigation.navigate('Directory')
      }}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#cb6d4f",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#941a1d",
  },
    ROIsign: {
    flex: 1,
    maxHeight: 100,
    maxWidth: 200,
    height: 100,
    width: 200,
    backgroundColor: '#990000',
    textAlign: 'centre',
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 2,
    paddingTop: 8, 
    textAlign: 'center',
    marginBottom: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  ROItext: {
    fontSize: 50,
    fontWeight: "bold",
  },
});

