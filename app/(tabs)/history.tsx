import { Colors } from "@/constants/Colors";
import { useHistoryStore } from "@/hooks/useHistory";
import { capitalize } from "@/utils/capitalize";
import { formatDateIso } from "@/utils/format-date";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFocusEffect } from "expo-router";
import { Center } from "native-base";
import { useCallback } from "react";
import { Pressable, ScrollView, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";

const History = () => {
  const { height, width } = useWindowDimensions();
  const { historyItems, toggleWord, fetchHistory, clearHistory } = useHistoryStore();

  useFocusEffect(
    useCallback(() => {
      fetchHistory(); // Fetch history when the screen loads
    }, [])
  );

  return (
    <View className="flex-1">
      {/* Header */}
      <View
        style={{ backgroundColor: Colors.light.tabIconSelected, height: height * 0.08 }}
        className="flex items-center justify-center w-full"
      >
        <Text className="text-center text-2xl font-semibold text-white">History</Text>
      </View>

      {/* History List */}
      <ScrollView>
        <View className="pt-6 pb-4 px-6 gap-4">
          {historyItems && historyItems.length > 0 ? (
            historyItems.map((item, i) => (
              <View key={i} className="bg-white flex-row justify-between items-center p-4 rounded-lg">
                <View className="gap-1">
                  <Text className="text-xl font-medium">{capitalize(item.word)}</Text>
                  <Text className="text-sm font-light">{formatDateIso(item.date)}</Text>
                </View>
                <Pressable onPress={() => toggleWord(item.word)}>
                  <Ionicons
                    style={{ color: Colors.light.tabIconSelected }}
                    name={"bookmark"}
                    size={20}
                  />
                </Pressable>
              </View>
            ))
          ) : (
            <Center>You don't have any bookmarked words!</Center>
          )}
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
        onPress={clearHistory}
        style={{
          position: "absolute",
          bottom: 20,
          left: width * 0.5 - (width * 0.15) / 2,
          backgroundColor: Colors.light.tabIconSelected,
          borderRadius: 50,
          width: 60,
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Ionicons name="trash" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default History;
