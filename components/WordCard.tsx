import { Pressable, Text, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';



import Ionicons from "@expo/vector-icons/Ionicons";
import { useCallback, useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { capitalize } from "@/utils/capitalize";
import { useFocusEffect } from "expo-router";
import { useHistoryStore } from "@/hooks/useHistory";
interface WordCardProps {
    recommendedWords: string[];
}
const WordCard = ({ recommendedWords }: WordCardProps) => {

    const { historyItems, toggleWord, fetchHistory } = useHistoryStore();

    useEffect(() => {
        fetchHistory(); // Fetch history on mount
    }, []);


    return (
        <View className="gap-4 mt-6">
            <Text className="text-3xl font-bold">Recommended Words</Text>
            <View className="gap-4">
                {recommendedWords.map((word, i) => (
                    <View key={i} className="bg-white flex-row justify-between items-center p-4 rounded-lg">
                        <Text className="text-xl font-medium">{capitalize(word)}</Text>
                        <Pressable onPress={() => toggleWord(word)}>
                            <Ionicons style={{ color: Colors.light.tabIconSelected }} name={historyItems.some((item) => item.word === word) ? 'bookmark' : `bookmark-outline`} size={20} />
                        </Pressable>
                    </View>
                ))}
            </View>
        </View>
    )
}
export default WordCard