import React from "react";
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GetStarted = ({ navigate }) => {
  const handleSignUp = () => {
    navigate('SignUp');
  };

  const handleLogin = () => {
    navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{ uri: 'https://cdn.pixabay.com/photo/2021/05/17/12/42/lake-6260668_640.png' }} 
        resizeMode="cover" 
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>Get started by creating an account or logging in.</Text>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: 'yellow',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  }
});

export default GetStarted;