import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { CustomButton } from '../../Components/CustomButton';
import CustomTextInput from '../../Components/CustomTextInput';
import { Products } from '../../Data/Products';

const NewProduct = ({ navigation, route }) => {

    const generateUniqueId = () => {
        const timestamp = new Date().getTime();
        const random = Math.floor(Math.random() * 10000); // Adjust the range as needed
      
        return `${timestamp}-${random}`;
    };

  const loading = false;

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [colors, setColors] = useState('');
  const [sizes, setSizes] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('Select a Category');
  const [visible, setVisible] = useState(false);

  const submitHandler = () => {
    const newProductId = generateUniqueId(); // Replace with your own logic for generating a unique ID

    const newProduct = {
      id: newProductId,
      name: name,
      colors: colors,
      sizes: sizes,
      price: price,
      stock: stock,
      category: category,
      // Add other properties as needed
    };

    Products.push(newProduct);

    console.log('Updated Products:', Products);

    navigation.navigate('AdminPanel');
  };

  useEffect(() => {
    if (route.params?.image) setImage(route.params?.image);
  }, [route.params]);

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>New Product</Text>
        </View>

        {loading ? (
          <Loader />
        ) : (
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
                }}
                onPress={() => setVisible(true)}
              >
                <Text>{category}</Text>
              </TouchableOpacity>

              <CustomButton
                onPress={submitHandler}
                loading={loading}
                disabled={loading}
                title="Create"
                bgColor={colors.color1}
                textColor={colors.color2}
                style={{ margin: 20, padding: 6 }}
              />
            </View>
          </ScrollView>
        )}
      </View>
      <SelectComponent visible={visible} setVisible={setVisible} setCategory={setCategory} setCategoryID={setCategoryID} />
    </>
  );
};

export default NewProduct;


