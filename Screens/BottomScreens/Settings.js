import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase'; // Import your authentication module

const COLORS = {
  white: '#ffffff',
  orange: '#ff8200',
  dark: '#1d1d2a',
  black: '#000000',
};

const Settings = () => {
  const navigation = useNavigation();

  const navigateToEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  const navigateToOrders = () => {
    navigation.navigate('Orders');
  };

  const navigateToAdmin = () => {
    navigation.navigate('AdminPanel');
  };

  const navigateToSubscription = () => {
    console.log('Subscription function');
  };

  const navigateToSupport = () => {
    console.log('Support function');
  };

  const navigateToTermsAndPolicies = () => {
    console.log('Terms and Policies function');
  };

  const navigateToFreeSpace = () => {
    console.log('Free Space function');
  };

  const navigateToDateSaver = () => {
    console.log('Date saver');
  };

  const addAccount = () => {
    navigation.navigate('Login');
  };

  const logout = () => {
    // Check if the user is logged in
    if (auth.currentUser) {
      // User is logged in, log them out
      auth.signOut();
      Alert.alert('Logout', 'You have been logged out.');
    } else {
      // User is already logged out, prompt them to log in
      Alert.alert(
        'Login Required',
        'You need to log in to access this feature.',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Log In',
            onPress: () => navigation.navigate('Login'),
          },
        ]
      );
    }
  };

  const renderSettingsItem = ({ icon, text, action }) => (
    <TouchableOpacity
      onPress={action}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingLeft: 12,
        backgroundColor: COLORS.white,
        borderRadius: 12,
        marginBottom: 8,
      }}
    >
      <MaterialIcons name={icon} size={24} color={COLORS.black} />
      <Text
        style={{
          marginLeft: 12,
          color: COLORS.black,
          fontWeight: 'bold',
          fontSize: 16,
        }}
      >
        {text}{' '}
      </Text>
    </TouchableOpacity>
  );

  const accountItems = [
    {
      icon: 'person-outline',
      text: 'Edit Profile',
      action: navigateToEditProfile,
    },
    { icon: 'person-outline', text: 'Profile', action: navigateToProfile },
    {
      icon: 'person-outline',
      text: 'Orders',
      action: navigateToOrders,
    },
    { icon: 'person-outline', text: 'Admin Dashboard', action: navigateToAdmin },
  ];

  const supportItems = [
    {
      icon: 'credit-card',
      text: 'My Subscription',
      action: navigateToSubscription,
    },
    { icon: 'help-outline', text: 'Help & Support', action: navigateToSupport },
    {
      icon: 'info-outline',
      text: 'Terms and Policies',
      action: navigateToTermsAndPolicies,
    },
  ];

  const cacheAndCellularItems = [
    {
      icon: 'delete-outline',
      text: 'Free up space',
      action: navigateToFreeSpace,
    },
    { icon: 'save-alt', text: 'Date Saver', action: navigateToDateSaver },
  ];

  const actionsItems = [
    { icon: 'people-outline', text: 'Add Account', action: addAccount },
    { icon: 'person-outline', text: 'Log out', action: logout },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('HomePage')}
          style={{
            marginTop: 20,
            marginLeft: 5,
            position: 'absolute',
            left: 0,
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={30}
            color={COLORS.black}
          />
        </TouchableOpacity>

        <Text style={{ fontWeight: '900', fontSize: 18, color: COLORS.black, marginBottom: 40, marginTop: 20 }}>
          Settings
        </Text>
      </View>

      <ScrollView style={{ marginHorizontal: 12 }}>
        {/* Account Settings */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16, marginVertical: 10, color: COLORS.black }}>
            Account
          </Text>
          {accountItems.map((item, index) => (
            <React.Fragment key={index}>
              {renderSettingsItem(item)}
            </React.Fragment>
          ))}
        </View>

        {/* Support and About settings */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16, marginVertical: 10, color: COLORS.black }}>
            Support & About{' '}
          </Text>
          {supportItems.map((item, index) => (
            <React.Fragment key={index}>
              {renderSettingsItem(item)}
            </React.Fragment>
          ))}
        </View>

        {/* Cache & Cellular */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16, marginVertical: 10, color: COLORS.black }}>
            Cache & Cellular{' '}
          </Text>
          {cacheAndCellularItems.map((item, index) => (
            <React.Fragment key={index}>
              {renderSettingsItem(item)}
            </React.Fragment>
          ))}
        </View>

        {/* Actions Settings */}
        <View style={{ marginBottom: 80 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16, marginVertical: 10, color: COLORS.black }}>
            Actions
          </Text>
          {actionsItems.map((item, index) => (
            <React.Fragment key={index}>
              {renderSettingsItem(item)}
            </React.Fragment>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
