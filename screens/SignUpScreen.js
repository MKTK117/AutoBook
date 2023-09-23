
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const SignUpScreen = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  
  const auth = getAuth();

  

  const handleSignUpPress = () => {
    // Add your signup logic here, including validation
    if (!email || !password || !confirmPassword) {
      alert('Please fill in all fields');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      createUserWithEmailAndPassword(auth, email, password, username)
      .then((userCredential) => {
        // Successfully created user
        return userCredential.user.displayName = username
        // Dispatch 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error creating user:", errorCode, errorMessage);
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUpScreen</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry
      />
      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxText}>
          I have read and accept the rules and bla bla bla...
        </Text>
      </View>
      <Pressable style={styles.button} onPress={handleSignUpPress}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#4299e1',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
