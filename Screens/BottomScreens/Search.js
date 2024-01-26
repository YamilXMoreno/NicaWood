import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import { useDebounce } from 'use-debounce';
import { useNavigation } from '@react-navigation/native';
import { Products } from '../../Data/Products';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const filtered = Products.categories.flatMap(category =>
      category.data.filter(product =>
        product.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) &&
        (!selectedColor || (product.images && product.images[selectedColor]))
      )
    );
    setFilteredProducts(filtered);
  }, [debouncedSearchQuery, selectedColor]);

  const availableColors = getAllColors();

  function getAllColors() {
    return Array.from(
      new Set(
        Products.categories.flatMap(category =>
          category.data.flatMap(product =>
            product.images ? Object.keys(product.images) : []
          )
        )
      )
    );
  }

  const navigateToDetails = (productName) => {
    const selectedProduct = getProductDetails(productName);
    navigation.navigate('Details', { product: selectedProduct });
  };

  const getProductDetails = (productName) => {
    return Products.categories
      .flatMap(category => category.data)
      .find(product => product.name === productName) || {};
  };

  return (
    <ScrollView style={styles.searchScreen}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Search products"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      <View style={styles.resultsContainer}>
        <Text style={styles.headerTitle}>Search Results</Text>

        <FlatList
          data={availableColors}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.colorOptionsContainer}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
  
            <TouchableOpacity
              style={[styles.colorOption, selectedColor === item && styles.selectedColor]}
              onPress={() => setSelectedColor(item)}
            >
              <Text style={[styles.colorButtonText, selectedColor === item && { color: '#FFFFFF' }]}>{item}</Text>
            </TouchableOpacity>
          )}
        />

        {filteredProducts.map((product, index) => (
          <TouchableOpacity
            key={index}
            style={styles.productItem}
            onPress={() => navigateToDetails(product.name)}
          >
            {selectedColor && product.images && product.images[selectedColor] && product.images[selectedColor]['M'] && product.images[selectedColor]['M']['L'] && product.images[selectedColor]['M']['L'].uri ? (
              <Image source={{ uri: product.images[selectedColor]['M']['L'].uri }} style={styles.productImage} />
            ) : (
              <View style={styles.placeholderImage} />
            )}
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productCategory}>{selectedColor || ''}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({

  productItem: {
    marginBottom: 20,
  },
  productImage: {
    height: 120,
    width: 120,
    borderRadius: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  productCategory: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  resultsContainer: {
    paddingBottom: 20,
    paddingHorizontal: 20,
  },

  colorOptionsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  colorOption: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 10,
    borderColor: '#000',
  },
  selectedColor: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
  },
  colorButtonText: {
    color: '#000', 
  },

  colorPicker: {
    height: 50,
    width: 150,
    marginLeft: 10,
    color: '#000', 
  },

  searchScreen: {
    flex: 1,
    backgroundColor: '#fff',
  },

  searchContainer: {
    marginTop: 70,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 50,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    marginBottom: 10,
  },

  textInput: {
    height: 60,
    flex: 1,
    marginLeft: 10,
    color: '#000',
    fontWeight: '700'
  },

  headerTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
    marginBottom: 10,
    marginLeft: 15,
    marginTop: 14,
  },

});

export default Search;
