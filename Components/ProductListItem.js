import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Modal from '../Components/Modal';

const ProductListItem = ({
  navigate,
  deleteHandler,
  index,
  price,
  id,
  stock,
  name,
  category,
  imgSrc,
}) => {
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onLongPress={() => setOpenModal((prev) => !prev)}
        onPress={() => navigate.navigate('productdetails', { id })}
      >
        <View
          style={{
            ...styles.container,
            backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#FF0000',
          }}
        >
          <Image
            source={{
              uri: imgSrc,
            }}
            style={{
              width: 40,
              height: 40,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              width: 60,
              color: '#000000',
            }}
            numberOfLines={1}
          >
            ${price}
          </Text>
          <Text
            style={{
              maxWidth: 120,
              color: '#000000',
            }}
            numberOfLines={1}
          >
            {name}
          </Text>
          <Text
            style={{
              width: 60,
              color: '#000000',
            }}
            numberOfLines={1}
          >
            {category}
          </Text>
          <Text
            style={{
              width: 40,
              color: '#000000',
            }}
            numberOfLines={1}
          >
            {stock}
          </Text>
        </View>
      </TouchableOpacity>
      {openModal && (
        <Modal
          id={id}
          deleteHandler={deleteHandler}
          navigate={navigate}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default ProductListItem;
