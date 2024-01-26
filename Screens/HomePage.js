import React, { useState } from 'react';
import {  View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ShoppingCart from '../Screens/BottomScreens/ShoppingCart';
import Settings from '../Screens/BottomScreens/Settings';
import Home from '../Screens/BottomScreens/Home';
import Search from '../Screens/BottomScreens/Search';

const HomePage = () => {
const navigation = useNavigation();
const [selectedTab, setSelectedTab] = useState(0);
    return(
        <View style={{flex: 1}}>
            {selectedTab==0?(<Home />): selectedTab==1?(<Search />): selectedTab==2?(<ShoppingCart />): (<Settings />)}
            <View style={{width: '100%', height: 70, backgroundColor: '#fff', position: 'absolute', bottom: 0, flexDirection: 'row'}}>
                <TouchableOpacity style={styles.iconTouchableOpacity} onPress={() =>{setSelectedTab(0)}}>
                    <Image source={require('../assets/home.png')} style={styles.imageIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconTouchableOpacity} onPress={() =>{setSelectedTab(1)}}>
                <Image source={require('../assets/search.png')} style={styles.imageIcon} />
                </TouchableOpacity>
                <View style={styles.iconTouchableOpacity}> 
                    <TouchableOpacity style={styles.middleIcon} onPress={() =>{setSelectedTab(2)}}>
                    <Image source={require('../assets/shopping.png')} style={styles.imageIcon} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.iconTouchableOpacity} onPress={() =>{setSelectedTab(3)}}>
                <Image source={require('../assets/username.png')} style={styles.imageIcon} />
                </TouchableOpacity>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    middleIcon: {
        width: 48,
        height: 48,
        borderRadius: 35,
        backgroundColor: '#ec7519',
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconTouchableOpacity: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        height: '100%',
        marginRight: 20,
    },

    imageIcon: {
        width: 30,
        height: 30,
    }
  });

export default HomePage;