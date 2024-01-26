import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar, Button } from 'react-native-paper';

const Modal = ({ id, deleteHandler, navigate, setOpenModal }) => {
  const colors = {
    color1: '#FF0000',
    color2: '#00FF00',
    color3: '#0000FF',
    // Add more color properties as needed
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
        }}
        onPress={() => setOpenModal(false)}
      >
        <Avatar.Icon
          icon={'close'}
          size={25}
          style={{
            backgroundColor: colors.color1,
          }}
        />
      </TouchableOpacity>

      <Text
        style={styles.text}
        onPress={() => navigate.navigate('UpdateProduct', { id })}
      >
        Edit
      </Text>

      <Button textColor={colors.color3} onPress={() => deleteHandler(id)}>
        Delete
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    zIndex: 100,
    backgroundColor: '#00FF00', // Use the direct hexadecimal color code
    padding: 20,
    borderRadius: 11,
  },

  text: {
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Modal;
