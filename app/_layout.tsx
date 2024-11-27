import { Stack } from "expo-router";
import "../global.css"
import { NativeBaseProvider, Box } from "native-base";

export default function RootLayout() {
  return <NativeBaseProvider>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  </NativeBaseProvider>;
}
