import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  AppRegistry,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
// import { initializeApp } from "firebase/app";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontIcon from 'react-native-vector-icons/FontAwesome';
import Home from "./screens/Home";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import { UserProvider } from "./context/UserContext";


export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, size }) => {
                let iconName;
                let color;
                color = focused ? 'red' : 'black';
                size = focused ? 32 : 24;
                if(route.name === 'StateHandler'){
                  iconName = 'dingding';
                }else if(route.name === 'Login'){
                  iconName = 'form';
                }else if(route.name === 'Flexbox'){
                  iconName = focused ? 'dribbble' : 'dribbble-square';
                }else if(route.name === 'Register'){
                  iconName = 'user';
                }

                return <AntIcon name={iconName} size={size} color={color} />;
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
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 50,
  },
});
