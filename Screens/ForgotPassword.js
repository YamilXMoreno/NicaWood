import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import CustomTextInput from '../Components/CustomTextInput';
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { authForgotPassword } from './Services/auth';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async () => {
    setLoading(true);
    try {
      await authForgotPassword(email);
      // If you want to use email.uid here, make sure authForgotPassword returns the user object.
      // Otherwise,  email is just a string, and you don't need to use email.uid.
      if (email) {
        const id = email.uid; // This line may not be necessary based on the response of authForgotPassword
        // await saveUserData(id, email); // Uncomment this line if needed
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <View style={styles.viewFP}>
      <Image source={require('../assets/Logo.png')} style={styles.imageFP} />
      <Text style={styles.fpTitle}>
        Forgot Password
      </Text>
      <CustomTextInput placeholder={'Email'} icon={require('../assets/email.png')} value={email} onChangeText={setEmail} />
      <CustomButton title={'Send Password Reset'} bgColor={'#000'} textColor={'#fff'} onPress={handleForgotPassword} />
      <Text style={styles.newUserButton} onPress={() => { navigation.navigate('SignUp'); }}>
        Create a new Account?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageFP: {
    marginTop: 195,
    width: 220,
    height: 100,
    alignSelf: 'center',
    borderRadius: 25,
  },

  viewFP: {
    flex: 1,
  },

  fpTitle: {
    marginTop: 30,
    marginBottom: 10,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: '600',
    color: '#000',
  },

  newUserButton: {
    marginTop: 18,
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

export default ForgotPassword;
