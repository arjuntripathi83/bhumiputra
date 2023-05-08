import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';

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
            <Tab.Screen name="Login" children={ () => <Login /> } />
            <Tab.Screen name="Flexbox" children={ () => <Flexbox /> } />
            <Tab.Screen name="Register" children={ () => <Register /> } />
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
