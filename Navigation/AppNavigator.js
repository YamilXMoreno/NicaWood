import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from '../Components/CartContext';
import Login from '../Screens/Login'; 
import SignUp from '../Screens/SignUp';
import HomePage from '../Screens/HomePage';
import ShoppingCart from '../Screens/BottomScreens/ShoppingCart';
import Profile from '../Screens/BottomScreens/Profile';
import Home from '../Screens/BottomScreens/Home';
import Search from '../Screens/BottomScreens/Search';
import Details from '../Screens/BottomScreens/Details';
import Settings from '../Screens/BottomScreens/Settings';
import EditProfile from '../Screens/BottomScreens/EditProfile';
import AdminOrders from '../Screens/Admin/AdminOrders';
import AdminPanel from '../Screens/Admin/AdminPanel';
import Categories from '../Screens/Admin/Categories';
import NewProduct from '../Screens/Admin/NewProduct';
import UpdateProduct from '../Screens/Admin/UpdateProduct';
import Orders from '../Screens/BottomScreens/Orders';
import ForgotPassword from '../Screens/ForgotPassword';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <CartProvider>
    <NavigationContainer>
      <Stack.Navigator>  
        <Stack.Screen options={{ headerShown: false }} name="HomePage" component={HomePage} initialRouteName={'HomePage'}/>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
        <Stack.Screen options={{ headerShown: false }} name="ShoppingCart" component={ShoppingCart} />
        <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: false }} name="Search" component={Search} />
        <Stack.Screen options={{ headerShown: false }} name="Details" component={Details} />
        <Stack.Screen options={{ headerShown: false }} name="Settings" component={Settings} />
        <Stack.Screen options={{ headerShown: false }} name="EditProfile" component={EditProfile} />
        <Stack.Screen options={{ headerShown: false }} name="AdminPanel" component={AdminPanel} />
        <Stack.Screen options={{ headerShown: false }} name="AdminOrders" component={AdminOrders} />
        <Stack.Screen options={{ headerShown: false }} name="Categories" component={Categories} />
        <Stack.Screen options={{ headerShown: false }} name="NewProduct" component={NewProduct} />
        <Stack.Screen options={{ headerShown: false }} name="UpdateProduct" component={UpdateProduct} />
        <Stack.Screen options={{ headerShown: false }} name="Orders" component={Orders} />
        <Stack.Screen options={{ headerShown: false }} name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
}
  
export default AppNavigator;

