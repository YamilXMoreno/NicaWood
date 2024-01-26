import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../../Components/CartContext';
import { Picker } from '@react-native-picker/picker';
import { ScrollView, FlatList } from 'react-native';
import { Products } from '../../Data/Products';

const Details = ({ route }) => {
  const navigation = useNavigation();
  const { product } = route.params;

  // Check if 'product' is available
  if (!product) {
    // Handle the case where 'product' is undefined or null
    return <Text>Product not found</Text>;
  }

  const { addToCart } = useCart();
  const [isFavourite, setIsFavourite] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'DefaultSize');
  const [selectedColor, setSelectedColor] = useState(Object.keys(product.images)?.[0]);
  const [stock, setStock] = useState(product.stock);
  const [options, setOptions] = useState(() => {
    const arr = [];
    for (let elem = 1; elem <= stock; ++elem) {
      arr.push(elem);
    }
    return arr;
  });

  const [selectedQuantity, setSelectedQuantity] = useState(options[1]); // Default quantity
  const [totalPrice, setTotalPrice] = useState(product.price);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const handleQuantitySelection = (quantity) => {
    setSelectedQuantity(quantity);
    // Update total price based on the selected quantity
    setTotalPrice(product.price * quantity);
  };

  const handleAddToCart = () => {
    // Implement the logic to add the selected product to the cart
    addToCart({
      ...product,
      selectedSize,
      selectedColor,
      selectedQuantity,
      totalPrice,
    });
    console.log('Product added to cart:', {
      ...product,
      selectedSize,
      selectedColor,
      selectedQuantity,
      totalPrice,
    });

    // Navigate to the shopping cart screen after adding the product
    navigation.navigate('ShoppingCart');
  };

  // Use the selectedSize and selectedColor to dynamically get the image source
  const selectedImage =
    product.images?.[selectedSize]?.[selectedColor] ||
    product.images?.[selectedColor]?.[selectedSize] ||
    product.images?.[product.colors?.[0]]?.[product.sizes?.[0]];

  const renderColorOption = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.colorButton,
        selectedColor === item && styles.selectedColorButton,
      ]}
      onPress={() => handleColorSelection(item)}
    >
      <Text
        style={[
          styles.colorButtonText,
          selectedColor === item && styles.colorButtonTextSelected,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ flex: 1, backgroundColor: '#CCCCCC' }}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="keyboard-arrow-left" size={24} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
            {isFavourite ? (
              <Ionicons name="md-heart-sharp" size={24} color="#FF0000" />
            ) : (
              <Ionicons name="md-heart-outline" size={24} color="#000000" />
            )}
          </TouchableOpacity>
        </View>

        {/* Product Image */}
        <Image source={selectedImage} style={styles.productImage} />

        {/* Product Details */}
        <ScrollView style={styles.productDetailsContainer}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productMaterial}>{product.material}</Text>

          {/* Select Size */}
          <View style={styles.sizeSelectionContainer}>
            <Text style={styles.selectionLabel}>Select Size</Text>
            <View style={styles.sizeButtonsContainer}>
              {product.sizes?.map((size) => (
                <TouchableOpacity
                  key={size}
                  style={[
                    styles.checkboxContainer,
                    selectedSize === size && styles.selectedCheckbox,
                  ]}
                  onPress={() => handleSizeSelection(size)}
                >
                  <Text
                    style={[
                      styles.checkboxText,
                      selectedSize === size && styles.checkboxTextSelected,
                    ]}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Select Colors */}
          <View style={styles.colorSelectionContainer}>
            <Text style={styles.selectionLabel}>Select Color</Text>
            <FlatList
              data={Object.keys(product.images)}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.colorButtonsContainer}
              keyExtractor={(item) => item}
              renderItem={renderColorOption}
            />
          </View>

          {/* Select Quantity */}
          <View style={styles.quantitySelectionContainer}>
            <Text style={styles.selectionLabel}>Select Quantity</Text>
            {options.length > 0 ? (
              <Picker
                selectedValue={selectedQuantity}
                style={styles.quantityPicker}
                onValueChange={(itemValue) => {
                  setSelectedQuantity(itemValue);
                  setTotalPrice(product.price * itemValue);
                }}
              >
                {options.map((value, index) => (
                  <Picker.Item
                    color='#000000'
                    key={index}
                    label={value}
                    value={value}
                  />
                ))}
              </Picker>
            ) : (
              <Text>No options available</Text>
            )}
          </View>

          {/* Total Price */}
          <Text style={styles.totalPrice}>Total Price: ${totalPrice}</Text>

          {/* Add to Bag Button */}
          <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
            <Feather name="shopping-bag" size={24} color="#FFFFFF" />
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  header: {
    marginHorizontal: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    width: '90%',
    top: 22,
    zIndex: 999,
  },
  productImage: {
    resizeMode: 'cover',
    width: '100%',
    height: '44%',
    alignSelf: 'center',
  },
  productDetailsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 22,
    paddingVertical: 25,
    position: 'relative',
    width: '100%',
    bottom: 1,
  },
  productName: {
    fontSize: 20,
    fontWeight: '700',
  },
  productMaterial: {
    fontSize: 16,
  },
  sizeSelectionContainer: {
    marginVertical: 15,
  },
  selectionLabel: {
    fontSize: 18,
    fontWeight: '700',
  },
  sizeButtonsContainer: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  checkboxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#999999',
    backgroundColor: '#999999',
    marginRight: 12,
  },
  selectedCheckbox: {
    backgroundColor: '#000000',
  },
  checkboxText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  checkboxTextSelected: {
    color: '#FFFFFF',
  },
  colorSelectionContainer: {
    marginVertical: 2,
  },
  colorButtonsContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  colorButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: 85,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#999999',
    marginRight: 12,
  },
  selectedColorButton: {
    backgroundColor: '#000000',
    borderColor: '#000000',
  },
  colorButtonText: {
    color: '#999999',
    fontSize: 12,
  },
  colorButtonTextSelected: {
    color: '#FFFFFF',
  },
  quantitySelectionContainer: {
    marginVertical: 22,
  },
  quantityPicker: {
    height: 50,
    width: '100%',
    color: '#000000',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 12,
  },
  addToCartButton: {
    marginTop: 12,
    height: 60,
    width: '90%',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    marginBottom: 60,
  },
  addToCartButtonText: {
    fontSize: 17,
    color: '#FFFFFF',
    marginLeft: 12,
    fontWeight: '800',
  },
  colorButtonsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },

  colorButton: {
    marginRight: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000000',
  },

  selectedColorButton: {
    backgroundColor: '#000000',
  },

  colorButtonText: {
    color: '#000000',
  },

  colorButtonTextSelected: {
    color: '#FFFFFF',
  },
});

export default Details;
