import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButton = ({onPress, title, bgColor, textColor}) => {
    return(
        <View>
            <TouchableOpacity style={[styles.Button, { backgroundColor: bgColor }]} onPress={()=> {onPress()}} >
                <Text style={{color: textColor, fontWeight: '800', fontSize: 15,}}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    Button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        height: 50,
        borderRadius: 10,
        marginTop: 60,
        alignSelf: 'center',
    },
});

export default CustomButton;