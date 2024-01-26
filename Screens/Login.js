import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import CustomTextInput from '../Components/CustomTextInput';
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { authLogIn } from './Services/auth';
import { saveUserData } from './Services/auth';


const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

const handleLogIn = async () => {
  setLoading(true);
  try {
    const user = await authLogIn(email, password);
    console.log('User Object:', user); 
    if (user) {
      const id = user.uid;
      await saveUserData(id, user);
      navigation.navigate('HomePage');
    }
  } catch (error) {
    setLoading(false);
    console.error('Login Error:', error);
  }
};

  return (
    <View style={styles.viewLogin}>
      <Image source={require('../assets/Logo.png')} style={styles.imageLogin} />
      <Text style={styles.loginTitle}>Log In</Text>
      <CustomTextInput placeholder={'Email'} icon={require('../assets/email.png')} value={email} onChangeText={setEmail} />
      <CustomTextInput type={'password'} placeholder={'Password'} icon={require('../assets/password.png')} value={password} onChangeText={setPassword} />
      <CustomButton title={'Log In'} bgColor={'#000'} textColor={'#fff'} onPress={handleLogIn} />
      <Text style={styles.newUserButton} onPress={() => { navigation.navigate('SignUp'); }}>Create a new Account?</Text>
      <Text style={styles.newUserButton} onPress={() => { navigation.navigate('ForgotPassword'); }}>Forgot Password?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageLogin: {
    marginTop: 195,
    width: 220,
    height: 100,
    alignSelf: 'center',
    borderRadius: 25,
  },

  viewLogin: {
    flex: 1,
  },

  loginTitle: {
    marginTop: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: '600',
    color: '#000',
  },

  newUserButton: {
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 13,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },

  validationMessage: {
    color: 'red',
    marginTop: 10,
    alignSelf: 'center',
  },

});

export default Login;
