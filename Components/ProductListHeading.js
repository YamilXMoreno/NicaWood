import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ProductListHeading = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Image</Text>
      <Text style={styles.text}>Price</Text>
      <Text style={{ ...styles.text, maxWidth: 120 }}>Name</Text>
      <Text style={{ ...styles.text, width: 70 }}>Category</Text>
      <Text style={styles.text}>Stock</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0FDD6F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
    borderRadius: 6,
    padding: 10,
  },
  text: {
    width: 50,
    color: '#00FCFCF8',
    fontWeight: '900',
  },
});

export default ProductListHeading;
