import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const staysLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="stays/[Staydetails]" />
    </Stack>
  );
};

export default staysLayout;

const styles = StyleSheet.create({});
