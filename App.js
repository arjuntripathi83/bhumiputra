import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { AppRegistry, Button, SafeAreaView, StatusBar, StyleSheet, Text, View, Image } from 'react-native';
// import { initializeApp } from "firebase/app";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntIcon from 'react-native-vector-icons/AntDesign';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Equipmentsbrowser from './screens/Equipmentsbrowser';
import Profile from './screens/Profile';
import Seedsbrowser from './screens/Seedsbrowser';
import { IconButton } from 'react-native-paper';
import { UserProvider } from './context/UserContext';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import useProductContext, { ProductProvider } from './context/ProductContext';
import CartPage from './screens/CartPage';
import FertilizersBrowser from './screens/FertilizerBrowser';
import RentalEquipmentPage from './screens/RentalEquipmentPage';
import ColdStoragePage from './screens/ColdStoragePage';
import Login from './screens/Login';
import Signup from './screens/Signup';
import BadgeIconButton from './screens/BadgeIconButton';
import Checkout from './screens/Checkout';
import Cash from './screens/Cash';

export default function App() {
  const Tab = createBottomTabNavigator();

  const [profileOpen, setProfileOpen] = useState(false);

  const [LoginOpen, setLoginOpen] = useState(false);

  const [signupOpen, setSignupOpen] = useState(false);

  const [cartOpen, setCartOpen] = useState(false);

  const [checkoutOpen, setCheckoutOpen] = useState(false);


  const { userData, setUserData } = useState(false);

  return (
    <ProductProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Profile visible={profileOpen} setVisible={setProfileOpen} />
        <CartPage visible={cartOpen} setVisible={setCartOpen} setCheckoutOpen={setCheckoutOpen} />
        {/* <Checkout visible={checkoutOpen} setVisible={setCheckoutOpen} /> */}

        <UserProvider>
          <NavigationContainer>
        <Cash visible={checkoutOpen} setVisible={setCheckoutOpen} setCartOpen={setCartOpen} />
            {LoginOpen && <Login visible={LoginOpen} setVisible={setLoginOpen} setSignupOpen={setSignupOpen} />}
            {signupOpen && <Signup visible={signupOpen} setVisible={setSignupOpen} setLoginOpen={setLoginOpen} />}

            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size }) => {
                  let iconName;
                  let color;
                  color = focused ? 'gray' : 'black';
                  size = focused ? 32 : 24;
                  if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                  } else if (route.name === 'EquipmentBrowser') {
                    return <Image source={require('./assets/icons/equipment.png')} style={{ width: 24, height: 24 }} />;
                    iconName = focused ? 'cart-sharp' : 'cart-outline';
                  } else if (route.name === 'FertilizerBrowser') {
                    iconName = focused ? 'cart-sharp' : 'cart-outline';
                  } else if (route.name === 'Seedsbrowser') {
                    iconName = focused ? 'nutrition' : 'nutrition-outline';
                    // return <Image source={require('./assets/icons/equipment.png')} style={{width: 24, height: 24}} />
                  } else if (route.name === 'Register') {
                    iconName = 'user';
                  } else if (route.name === 'ColdStorage') {
                    iconName = focused ? 'archive' : 'archive-outline';
                  }

                  return <IonicIcon name={iconName} size={size} color={color} />;
                }
              })}
            >
              <Tab.Screen
                name="Home"
                options={{
                  headerRight: (props) => (
                    <TouchableOpacity onPress={(e) => setLoginOpen(true)}>
                      <Image style={{ width: 40, height: 40 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/256/3135/3135715.png' }} />
                    </TouchableOpacity>
                  )
                }}
                children={(props) => <Home profileOpen={profileOpen} setProfileOpen={setProfileOpen} />}
              />
              <Tab.Screen
                name="EquipmentBrowser"
                children={() => <Equipmentsbrowser setCartOpen={setCartOpen} />}
                options={{
                  headerRight: (props) => (
                    <View style={{flexDirection: 'row'}}>
                      <BadgeIconButton
                        icon="cart"
                        badgeContent={0}
                        size={20}
                        onPress={() => {
                          setCartOpen(true);
                        }}
                      />
                      <TouchableOpacity onPress={(e) => setProfileOpen(true)}>
                        <Image
                          on
                          style={{
                            height: 40,
                            width: 40,
                            borderRadius: 20,
                            marginRight: 10
                          }}
                          source={{ uri: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7911322/avatar-icon-sm.png' }}
                        />
                      </TouchableOpacity>
                    </View>
                  )
                }}
              />
              <Tab.Screen name="FertilizerBrowser" children={() => <FertilizersBrowser setCartOpen={setCartOpen} />} options={{
                  headerRight: (props) => (
                    <View style={{flexDirection: 'row'}}>
                      <BadgeIconButton
                        icon="cart"
                        badgeContent={0}
                        size={20}
                        onPress={() => {
                          setCartOpen(true);
                        }}
                      />
                      <TouchableOpacity onPress={(e) => setProfileOpen(true)}>
                        <Image
                          on
                          style={{
                            height: 40,
                            width: 40,
                            borderRadius: 20,
                            marginRight: 10
                          }}
                          source={{ uri: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7911322/avatar-icon-sm.png' }}
                        />
                      </TouchableOpacity>
                    </View>
                  )
                }} />
              <Tab.Screen name="Seedsbrowser" children={() => <Seedsbrowser setCartOpen={setCartOpen} />} options={{
                  headerRight: (props) => (
                    <View style={{flexDirection: 'row'}}>
                      <BadgeIconButton
                        icon="cart"
                        badgeContent={0}
                        size={20}
                        onPress={() => {
                          setCartOpen(true);
                        }}
                      />
                      <TouchableOpacity onPress={(e) => setProfileOpen(true)}>
                        <Image
                          on
                          style={{
                            height: 40,
                            width: 40,
                            borderRadius: 20,
                            marginRight: 10
                          }}
                          source={{ uri: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7911322/avatar-icon-sm.png' }}
                        />
                      </TouchableOpacity>
                    </View>
                  )
                }} />
              <Tab.Screen name="ColdStorage" children={() => <ColdStoragePage setCartOpen={setCartOpen} />} options={{
                  headerRight: (props) => (
                    <View style={{flexDirection: 'row'}}>
                      <BadgeIconButton
                        icon="cart"
                        badgeContent={0}
                        size={20}
                        onPress={() => {
                          setCartOpen(true);
                        }}
                      />
                      <TouchableOpacity onPress={(e) => setProfileOpen(true)}>
                        <Image
                          on
                          style={{
                            height: 40,
                            width: 40,
                            borderRadius: 20,
                            marginRight: 10
                          }}
                          source={{ uri: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/7911322/avatar-icon-sm.png' }}
                        />
                      </TouchableOpacity>
                    </View>
                  )
                }} />
            </Tab.Navigator>
          </NavigationContainer>
        </UserProvider>
      </SafeAreaView>
    </ProductProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 50,
  }
});
