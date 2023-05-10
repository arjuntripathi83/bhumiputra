import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Home from './screens/Home';
import Equipmentsbrowser from './screens/Equipmentsbrowser';
import Profile from './screens/Profile';

import AntIcon from 'react-native-vector-icons/AntDesign';
import IonicIcon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, size }) => {
                let iconName;
                let color;
                color = focused ? 'gray' : 'black';
                size = focused ? 32 : 24;
                if(route.name === 'Home'){
                  iconName = focused ? 'home' : 'home-outline';
                }else if(route.name === 'Browser'){
                  iconName = focused ? 'cart-sharp' :'cart-outline' ;
                }else if(route.name === 'Flexbox'){
                  iconName = focused ? 'dribbble' : 'dribbble-square';
                }else if(route.name === 'Register'){
                  iconName = 'user';
                }

                return <IonicIcon name={iconName} size={size} color={color} />;
              }
            })}
          >
            <Tab.Screen name="Home" children={ () => <Home /> } />
            <Tab.Screen name="Browser" children={ () => <Equipmentsbrowser /> } />
            <Tab.Screen name="Profile" children={ () => <Profile /> } />
          </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
