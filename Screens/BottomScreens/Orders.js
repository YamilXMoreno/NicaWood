import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Headline } from 'react-native-paper';
import OrderItem from '../../Components/OrderItem';

export const orders = [
  {
    _id: 1,
    shippingInfo: {
      address: '5 cuadras al lago',
      city: 'Managua',
      country: 'Nicaragua',
      pinCode: '12001',
    },
    createdAt: '12/1/2023T00:00:00',
    orderStatus: 'Processing',
    paymentMethod: 'Cash on Delivery',
    totalAmount: 2399,
  },
  {
    _id: 2,
    shippingInfo: {
      address: 'De Keiser University San Marcos, camine recto hasta llegar a la Pizza To Go, gire a la derecha y camine hasta el lugar llamado Aparicios Bar',
      city: 'Carazo',
      country: 'Nicaragua',
      pinCode: '11001',
    },
    createdAt: '12/1/2023T00:00:00',
    orderStatus: 'Canceled',
    paymentMethod: 'Payment Online',
    totalAmount: 5999,
  },
];

const Orders = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      
      <View style={{ marginBottom: 20, paddingTop: 70, alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Orders</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {orders.length > 0 ? (
          orders.map((item, index) => (
            <OrderItem
              key={item._id}
              index={index + 1} // Adding 1 to start index from 1
              id={item._id}
              price={item.totalAmount}
              status={item.orderStatus}
              paymentMethod={item.paymentMethod}
              orderOn={item.createdAt.split('T')[0]}
              address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country}, ${item.shippingInfo.pinCode}`}
            />
          ))
        ) : (
          <Headline style={{ textAlign: 'center' }}>No Orders Yet</Headline>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  titleContainer: {
    marginBottom: 20,
    paddingTop: 70,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  noOrdersText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
    color: '#888888',
  },
});

export default Orders;

