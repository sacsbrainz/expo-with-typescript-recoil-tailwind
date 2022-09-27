import React from "react";
// import { StyleSheet, Text, View } from 'react-native';
import { RecoilRoot } from "recoil";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <NavigationContainer>
          <Stack.Navigator>
            {/* screens will be below */}
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </RecoilRoot>
    </SafeAreaProvider>
  );
}
