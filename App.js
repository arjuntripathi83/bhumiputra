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
import Fertilizersbrowser from './screens/Fertilizersbrowser';
import Seedsbrowser from './screens/Seedsbrowser';
import { IconButton } from 'react-native-paper';
import { UserProvider } from './context/UserContext';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

export default function App() {
  const Tab = createBottomTabNavigator();

  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Profile visible={profileOpen} setVisible={setProfileOpen} />
      
      <UserProvider>
        <NavigationContainer>
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
                }

                return <IonicIcon name={iconName} size={size} color={color} />;
              }
            })}
          >
            <Tab.Screen name="Home" options={{
              headerRight: (props) => (
                <IconButton></IconButton>
              )
            }} children={() => <Home />} />
            <Tab.Screen
              name="EquipmentBrowser"
              children={() => <Equipmentsbrowser />}
              options={{
                headerRight: (props) => (
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
                )
              }}
            />
            <Tab.Screen name="FertilizerBrowser" children={() => <Fertilizersbrowser />} />
            <Tab.Screen name="Seedsbrowser" children={() => <Seedsbrowser />} />
          </Tab.Navigator>
        </NavigationContainer>
      </UserProvider>
    </SafeAreaView>
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
