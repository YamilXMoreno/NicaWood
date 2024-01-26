import React from 'react';
import { View, StyleSheet, Image, TextInput, text } from 'react-native';
import { useState } from 'react';

const CustomTextInput = ({value, onChangeText, placeholder, icon, type}) => {

    const [text, setText] = useState();

    return(
        <View style={styles.ViewInput}>
            <Image source={icon} style={styles.imageIcon}/>
            <TextInput placeholder={placeholder} style={styles.textInput} secureTextEntry={type ? true: false} value={text} onChangeText={(txt) => {onChangeText(txt);}} />
        </View>
    )
};

const styles = StyleSheet.create({
    imageIcon: {
        width: 30,
        height: 30,
    },

    ViewInput: {
        alignSelf: 'center',
        paddingLeft: 20,
        width: '85%',
        height: 60,
        marginTop: 25,
        borderRadius: 15,
        borderWidth: 1,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
    },

    textInput: {
        marginLeft: 10,
    },

});

export default CustomTextInput;