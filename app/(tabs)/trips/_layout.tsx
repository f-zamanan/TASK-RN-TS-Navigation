import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const tripsLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="trips/[TripDetails]" />
    </Stack>
  );
};

export default tripsLayout;

const styles = StyleSheet.create({});
