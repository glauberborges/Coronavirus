import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from "./src/routes";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <Routes/>
        <StatusBar style="light" />
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
