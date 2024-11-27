import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface HistoryItem {
    word: string;
    date: string;
}

interface HistoryStore {
    historyItems: HistoryItem[];
    fetchHistory: () => Promise<void>;
    toggleWord: (word: string) => Promise<void>;
    clearHistory: () => Promise<void>;
}

export const useHistoryStore = create<HistoryStore>((set, get) => ({
    historyItems: [],
    fetchHistory: async () => {
        try {
            const storedData = await AsyncStorage.getItem("history");
            const data = storedData ? JSON.parse(storedData) : [];
            set({ historyItems: data });
        } catch (error) {
            console.error("Failed to fetch history:", error);
        }
    },
    toggleWord: async (word: string) => {
        try {
            const storedData = await AsyncStorage.getItem("history");
            const history = storedData ? JSON.parse(storedData) : [];
            const wordExists = history.some((item: HistoryItem) => item.word === word);

            let updatedHistory;
            if (wordExists) {
                updatedHistory = history.filter((item: HistoryItem) => item.word !== word);
            } else {
                updatedHistory = [
                    ...history,
                    { word, date: new Date().toString() },
                ];
            }

            await AsyncStorage.setItem("history", JSON.stringify(updatedHistory));
            set({ historyItems: updatedHistory });
        } catch (error) {
            console.error("Failed to toggle word:", error);
        }
    },
    clearHistory: async () => {
        try {
            await AsyncStorage.removeItem("history");
            set({ historyItems: [] });
        } catch (error) {
            console.error("Failed to clear history:", error);
        }
    }
}));
