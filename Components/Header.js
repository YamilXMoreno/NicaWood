import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Header = () => {

    return(
        <View>
            <View style={{width: '100%', height: 100, position: 'absolute', top: 0, flexDirection: 'row'}}>
                <Image source={require('../assets/Logo.png')} style={styles.imageHeader}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    imageHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        height: '120%',
        borderRadius: 20,
        marginTop: 105,
        marginLeft: 10,
        alignSelf: 'center',
        resizeMode: 'cover',
    },
});

export default Header;

