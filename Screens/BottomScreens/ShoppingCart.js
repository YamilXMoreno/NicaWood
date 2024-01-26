import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../../Components/CartContext';
import { auth } from '../../firebase';

const Invoice = ({ cartItems, total }) => (
  <View style={styles.invoiceContainer}>
    <Text style={styles.invoiceHeader}>Invoice</Text>
    {cartItems.map(item => (
      <View style={styles.invoiceItem} key={item.id}>
        <Text>{item.name}</Text>
        <Text>{`Quantity: ${item.selectedQuantity}`}</Text>
        <Text>{`Price: $${item.totalPrice}`}</Text>
      </View>
    ))}
    <Text style={styles.invoiceTotal}>{`Total: $${total}`}</Text>
  </View>
);

const ShoppingCart = () => {
  const { cartItems, setCartItems } = useCart();
  const navigation = useNavigation();
  const [printing, setPrinting] = useState(false);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0);
  };

  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems({ type: 'SET_CART_ITEMS', payload: updatedCart });
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === itemId) {
        const totalPrice = item.price * newQuantity;
        return { ...item, selectedQuantity: newQuantity, totalPrice };
      }
      return item;
    });
    setCartItems({ type: 'SET_CART_ITEMS', payload: updatedCart });
  };

  const navigateToProductDetails = (productId) => {
    navigation.navigate('Details', { productId });
  };

  const handleCheckout = () => {
    if (auth.currentUser) {
      setPrinting(true);
      setTimeout(() => {
        setPrinting(false);
        Alert.alert('Invoice Printed', 'Invoice has been printed successfully!');
      }, 2000);
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Shopping Cart</Text>
      </View>

      <ScrollView>
        {cartItems.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.cartItemContainer}
            onPress={() => navigateToProductDetails(item.id)}
          >
            {item.image && (
              <Image source={{ uri: item.image }} style={styles.productImage} />
            )}
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.totalPrice}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => updateQuantity(item.id, item.selectedQuantity - 1)}>
                  <MaterialIcons name="remove" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.selectedQuantity}</Text>
                <TouchableOpacity onPress={() => updateQuantity(item.id, item.selectedQuantity + 1)}>
                  <MaterialIcons name="add" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeItem(item.id)}>
                  <MaterialIcons name="delete" size={24} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.totalPrice}>Total Price: ${calculateTotalPrice()}</Text>

      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>Check-Out</Text>
      </TouchableOpacity>

      {printing && <Invoice cartItems={cartItems} total={calculateTotalPrice()} />}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginTop: 45,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginBottom: 40,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 90,
  },
  cartItemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  checkoutButton: {
    backgroundColor: 'green',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 80,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  invoiceContainer: {
    padding: 10,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  invoiceHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  invoiceItem: {
    marginBottom: 5,
  },
  invoiceTotal: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ShoppingCart;
