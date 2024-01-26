import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../../Components/Header';
import ProductListHeading from '../../Components/ProductListHeading';
import { Products } from '../../Data/Products';
import ProductListItem from '../../Components/ProductListItem';
import Chart from '../../Components/Chart';
import CustomButton from '../../Components/CustomButton';

const colors = {
  color3: '#0000FF', // Replace with your color values
  // Add more color properties as needed
};

const AdminPanel = ({ navigation }) => {
  const loading = false;

  const navigationHandler = (text) => {
    switch (text) {
      case 'Category':
        navigation.navigate('Categories');
        break;
      case 'All Orders':
        navigation.navigate('AdminOrders');
        break;
      case 'Product':
        navigation.navigate('NewProduct');
        break;
      default:
        navigation.navigate('Categories');
        break;
    }
  };

  const deleteProductHandler = (id) => {
    console.log('deleteProductHandler', id);
  };

  return (
    <View style={styles.container}>
      <Header back={true} />
      {/* Heading */}
      <View style={styles.headingContainer}>
        <Text style={styles.formHeading}>Admin Panel</Text>
      </View>
      <>
        <View style={styles.chartContainer}>
          {/* Chart.js */}
          <Chart inStock={129} outOfStock={64} />
        </View>

        <View>
          <View style={styles.buttonContainer}>
            <CustomButton
              icon={'plus'}
              text={'Product'}
              handler={navigationHandler}
            />
            <CustomButton
              icon={'format-list-bulleted-square'}
              text={'All Orders'}
              handler={navigationHandler}
              reverse={true}
            />
            <CustomButton
              icon={'plus'}
              text={'Category'}
              handler={navigationHandler}
            />
          </View>
        </View>

        <ProductListHeading />

        <ScrollView showsVerticalScrollIndicator={true}>
          <View>
            {Products.categories.flatMap((category) =>
              category.data.map((item, index) => (
                <ProductListItem
                  navigate={navigation}
                  deleteHandler={deleteProductHandler}
                  key={item.id}
                  id={item.id}
                  index={index}
                  price={item.price}
                  stock={item.quantity}
                  name={item.name}
                  category={category.category}
                  imgSrc={item.images[Object.keys(item.images)[0]].M} // Assuming M size is used
                />
              ))
            )}
          </View>
        </ScrollView>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color3,
  },
  headingContainer: {
    marginBottom: 20,
    paddingTop: 70,
  },
  formHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  chartContainer: {
    backgroundColor: colors.color3,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
  },
});

export default AdminPanel;
