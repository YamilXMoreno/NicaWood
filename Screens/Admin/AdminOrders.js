import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import OrderItem from '../../Components/OrderItem';
import { Headline } from 'react-native-paper';
import { Orders } from '../../Data/Orders';

const AdminOrders = () => {
  const updateHandler = () => {};
  const loading = false;
  const processOrderLoading = false;
  return (
    <View
      style={{
        ...defaultStyle,
        backgroundColor: colors.color5,
      }}
    >
      <Header back={true} />
      {/* Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>All Orders</Text>
      </View>

      
        <View style={{ padding: 10, flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {Orders.length > 0 ? (
              Orders.map((item, index) => (
                <OrderItem
                  key={item._id}
                  index={index}
                  id={item._id}
                  price={item.totalAmount}
                  status={item.orderStatus}
                  paymentMethod={item.paymentMethod}
                  orderOn={item.createdAt.split('T')[0]}
                  address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country}, ${item.shippingInfo.pinCode}`}
                  admin={true}
                  updateHandler={updateHandler}
                  loading={processOrderLoading}
                />
              ))
            ) : (
              <Headline style={{ textAlign: 'center' }}>No Order Yet</Headline>
            )}
          </ScrollView>
        </View>
    </View>
  );
};

export default AdminOrders;
