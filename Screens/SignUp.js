import React, {useState} from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import CustomTextInput from '../Components/CustomTextInput';
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { authSignUp } from './Services/auth';
import {saveUserData} from 'firebase/auth'

const SignUp = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);



  const handleSignUp = async () => {
    setLoading(true);
    try {
      const userCredential = await authSignUp(email, password);
      if (userCredential) {
        const user = userCredential.user;
        const id = user.uid;
        await saveUserData(id, user);
        
        await signInWithCredential(auth, userCredential.credential);
  
      }
    } catch (error) {
      setLoading(false);
    }
  };
 
  return (
    <ScrollView style={styles.viewSignUp}>
      <Image source={require('../assets/Logo.png')} style={styles.imageSignUp} />
      <Text style={styles.signupTitle}>
        Sign Up
      </Text>
      <CustomTextInput placeholder={'Username'} icon={require('../assets/username.png')} value={user} onChangeText={setUser} />      
      <CustomTextInput placeholder={'Email'} icon={require('../assets/email.png')} value={email} onChangeText={setEmail} />      
      <CustomTextInput type={'password'} placeholder={'Password'} icon={require('../assets/password.png')} value={password} onChangeText={setPassword} />
      <CustomButton title={'Sign Up'} bgColor={'#000'} textColor={'#fff'} onPress={handleSignUp} />
      <Text style={styles.createAccountButton} onPress={() => { navigation.navigate('Login'); }}>
        Already got an Account?
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageSignUp: {
    marginTop: 155,
    width: 220,
    height: 100,
    alignSelf: 'center',
    borderRadius: 25,
  },

  viewSignUp: {
    flex: 1,
  },

  signupTitle: {
    marginTop: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: '600',
    color: '#000',
  },

  createAccountButton: {
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

export default SignUp;
