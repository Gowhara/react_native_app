/*import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CompletedTodoScreen from "./screens/completedTodoScreen";
import HomeScreen from "./screens/homeScreen";
import TodoDetailsScreen from "./screens/TodoDetailsScreen";
import { store } from "./Store";
import { Provider } from 'react-redux'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TodoDetails" component={TodoDetailsScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="CompletedTodos" component={CompletedTodoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;*/
// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/homeScreen';
import CompletedTodosScreen from './screens/completedTodoScreen';
import TodoFormScreen from './screens/TodoFormScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="TodoForm" component={TodoFormScreen} />
  </Stack.Navigator>
);

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="CompletedTodos" component={CompletedTodosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;

