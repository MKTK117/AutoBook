// LoginScreen.js
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Text,
	Switch,
} from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../reducers/AuthReducer";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
	
	const dispatch = useDispatch();

  const handleLogin = () => {
    if (username && password) {
      dispatch(login())
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.boxContent}>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
				<View
				style={styles.toggleBlock}
				>
					
				</View>
				
        <Pressable style={styles.btnLogin} onPress={handleLogin}>
          <Text style={{ color: "#FFF", fontSize: 17, fontWeight: "600" }}>
            Login
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  boxContent: {
    width: "100%",
    top: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    justifyContent: "center",
    textAlign: "center",
    width: "80%",
    height: 50,
    borderWidth: 0.5,
    borderColor: "#bbb",
    borderRadius: 5,
    marginBottom: 15,
  },
  btnLogin: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "80%",
    height: 50,
    borderRadius: 5,
    backgroundColor: "#003580",
  },
	toggleBlock: {
		gap:130,
		flexDirection: 'row',
		alignItems:'center',
		marginBottom: 10,
	},

});

export default LoginScreen;
