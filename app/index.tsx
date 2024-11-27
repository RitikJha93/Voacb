import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "native-base";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Navigate to /(tabs) after 2 seconds
    const timer = setTimeout(() => {
      router.replace("/(tabs)");
    }, 2000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.light.tabIconSelected, // Example background color (you can customize it)
      }}
    >
      <StatusBar backgroundColor={Colors.light.tabIconSelected} barStyle={"light-content"} />

      <Text
        style={{
          color: "#FFFFFF", // White text
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Vocab
      </Text>
    </View>
  );
}
