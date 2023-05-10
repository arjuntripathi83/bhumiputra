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
    <UserProvider>
    <NavigationContainer style={styles.container} >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            size = focused ? 25 : 20;
            if (route.name === "Profile") {
              iconName = focused ? "user-circle" : "user-circle-o";
            } else if (route.name === "ListPost") {
              iconName = focused ? "list-alt" : "list-alt";
            } else if (route.name === "AddPost") {
              iconName = focused ? "address-book" : "address-book-o";
            }else if (route.name === "ListPost") {
              iconName = focused ? "post" : "post-outline";
            }
    
            // You can return any component that you like here!
            return <FontIcon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Profile" children={()=><Profile/>} />
        <Tab.Screen name="Home" children={()=><Home />} />
        <Tab.Screen name="Login" children={()=><Login />} />
      </Tab.Navigator>
    </NavigationContainer>
     {/* <View style={styles.container}>
       <StatusBar style="light" />
       <Todo />
       <AddContact app={app} />
       <ListContact app={app} />
       <Register app={app} visible={true} setVisible={() => {}} />
     </View> */}
    </UserProvider>
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
