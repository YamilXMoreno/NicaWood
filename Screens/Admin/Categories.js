import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Button, TextInput } from 'react-native-paper';
import Header from '../../Components/Header';
import { Products } from '../../Data/Products'; // Import categories from products.js

const colors = {
  color1: '#FF0000',
  color2: '#00FF00',
  color3: '#0000FF',
  color5: '#FFFFFF', // You can add more color properties as needed
};

const Categories = () => {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState(Products.categories); // Initialize with the categories from products.js

  const deleteHandler = (categoryId) => {
    // Implement logic to delete the category and its associated products
    const updatedCategories = categories.filter(category => category.category !== categoryId);
    setCategories(updatedCategories);
  };

  const submitHandler = () => {
    if (category.trim() === '') {
      // Display an error message or take appropriate action for an empty category
      return;
    }

    // Check if the category already exists
    const categoryExists = categories.some(categoryItem => categoryItem.category === category.trim());

    if (categoryExists) {
      // Display an error message or take appropriate action for a duplicate category
      return;
    }

    // Add the new category to the state
    const newCategory = {
      category: category.trim(),
      data: [], // You can initialize the data array as empty or with default values
    };

    setCategories([...categories, newCategory]);
    setCategory(''); // Clear the input field after adding a new category
  };

  const loading = false;

  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
      <Header back={true} />
      {/* Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Categories</Text>
      </View>

      <ScrollView style={{ marginBottom: 20 }}>
        <View style={{ backgroundColor: colors.color2, padding: 20, minHeight: 400 }}>
          {categories.map((item) => (
            <CategoryCard
              name={item.category}
              id={item.category} // Assuming category can be used as an ID
              key={item.category} // Assuming category can be used as a unique key
              deleteHandler={deleteHandler}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.container}>
        <TextInput
          placeholder='Category'
          value={category}
          onChangeText={setCategory}
          style={styles.input}
        />

        <Button
          textColor={colors.color2}
          style={styles.addButton}
          disabled={!category}
          onPress={submitHandler}
          loading={loading}
        >
          Add
        </Button>
      </View>
    </View>
  );
};

const CategoryCard = ({ name, id, deleteHandler }) => (
  <View style={styles.cardContainer}>
    <Text style={styles.cardText}>{name}</Text>
    <TouchableOpacity activeOpacity={0.9} onPress={() => deleteHandler(id)}>
      <Avatar.Icon
        icon={'delete'}
        size={30}
        style={{ backgroundColor: colors.color1 }}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: colors.color3,
  },
  input: {
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: colors.color1,
    margin: 20,
    padding: 6,
  },
  cardContainer: {
    backgroundColor: colors.color2,
    elevation: 5,
    margin: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  cardText: {
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default Categories;
