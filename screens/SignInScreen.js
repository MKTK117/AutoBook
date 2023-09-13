import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const auth = getAuth();
  
  const handleSignInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('User signed in: ' + user.email)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.boxContent}>
        <TextInput
          style={styles.textInput}
          placeholder="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <Pressable 
        onPress={handleSignInUser} 
        style={({pressed}) => [
          styles.btnLogin,
          {backgroundColor: pressed ? "#003580" : '#3b82f6'}
        ]}>
          <Text style={{ color: "#FFF", fontSize: 17, fontWeight: "600" }}>
            Login
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
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
  },
});

export default SignInScreen;
