import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="/(tabs)" />
      <Stack.Screen name="/(tabs)/trips" />
      <Stack.Screen name="/(tabs)/stays" />
      <Stack.Screen name="/trips/[TripDetails]" />
      <Stack.Screen name="/stays/StayIndex" />
    </Stack>
  );
}

export const unstable_settings = {
  initialRouteName: "index",
};
