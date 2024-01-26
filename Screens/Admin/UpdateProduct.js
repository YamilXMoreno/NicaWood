import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import CustomButton from '../../Components/CustomButton';
import CustomTextInput from '../../Components/CustomTextInput';
import { Products } from '../../Data/Products';

const UpdateProduct = ({ navigation, route }) => {
  const loading = false;

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [colors, setColors] = useState('');
  const [sizes, setSizes] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('Select a Category');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Get the product ID from the route params
    const { id, name, image, price, colors, sizes, stock, category } = route.params;
    setId(id);
    setName(name);
    setImage(image);
    setPrice(price);
    setColors(colors);
    setSizes(sizes);
    setStock(stock);
    setCategory(category);
  }, [route.params]);

  // Function to update an existing product by ID
  const updateProduct = (id, updatedProductData) => {
    const index = Products.findIndex((product) => product.id === id);

    if (index !== -1) {
      // Update the existing product with new data
      Products[index] = { ...Products[index], ...updatedProductData };

      console.log(`Product with ID ${id} updated:`, Products[index]);
      navigation.goBack(); // Navigate back after updating
    } else {
      console.warn(`Product with ID ${id} not found.`);
    }
  };

  const updateHandler = () => {
    // Prepare updated data
    const updatedData = {
      name: name,
      colors: colors,
      sizes: sizes,
      price: price,
      stock: stock,
      category: category,
      // Add other properties to update as needed
    };

    updateProduct(id, updatedData);
  };

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>Update Product</Text>
        </View>
        <ScrollView style={{ padding: 20, elevation: 10, borderRadius: 10, backgroundColor: colors.color3 }}>
          <View style={{ justifyContent: 'center', height: 650 }}>
            <View style={{ width: 80, height: 80, alignSelf: 'center', marginBottom: 20 }}>
              <Avatar.Image
                size={80}
                style={{ backgroundColor: colors.color1 }}
                source={{ uri: image ? image : null }}
              />
              <TouchableOpacity onPress={() => navigation.navigate('camera', { newProduct: true })}>
                <Avatar.Icon
                  icon={'camera'}
                  size={30}
                  color={colors.color3}
                  style={{ backgroundColor: colors.color2, position: 'absolute', bottom: 0, right: -5 }}
                />
              </TouchableOpacity>
            </View>

            <CustomTextInput
              {...inputOptions}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <CustomTextInput
              {...inputOptions}
              placeholder="Colors"
              value={colors}
              onChangeText={setColors}
            />
            <CustomTextInput
              {...inputOptions}
              placeholder="Size"
              value={sizes}
              onChangeText={setSizes}
            />
            <CustomTextInput
              {...inputOptions}
              placeholder="Price"
              value={price}
              keyboardType="number-pad"
              onChangeText={setPrice}
            />
            <CustomTextInput
              {...inputOptions}
              placeholder="Stock"
              value={stock}
              keyboardType="number-pad"
              onChangeText={setStock}
            />

            <TouchableOpacity
              style={{
                ...inputStyle,
                textAlign: 'center',
                borderRadius: 3,
                textAlignVertical: 'center',
                padding: 10,
                borderWidth: 1,
                borderColor: colors.color2,
                marginBottom: 10,
              }}
              onPress={() => setVisible(true)}
            >
              <Text>{category}</Text>
            </TouchableOpacity>

            <CustomButton
              onPress={updateHandler}
              loading={loading}
              disabled={loading}
              title="Update"
              bgColor={colors.color1}
              textColor={colors.color2}
              style={{ margin: 20, padding: 6 }}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default UpdateProduct;
