import { Meanings } from "@/models/words";
import { Text, View } from "react-native"

function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.substring(1);
}
interface WordDayProps {
    wordOfDay: string;
    meanings: Meanings[];
}

const WordDay = ({ wordOfDay, meanings }: WordDayProps) => {
    return (
        <View className="gap-4">
            <Text className="text-3xl font-bold">Word of the day</Text>
            <View className="bg-white rounded-lg p-6 shadow-md">
                <Text className="text-2xl font-semibold">{capitalize(wordOfDay)}</Text>
                <View className="flex gap-y-1 mt-4">
                    {
                        meanings.length > 0 && meanings[0].definitions.map((item, i) => (
                            <Text key={i}>{i + 1}. {item.definition}</Text>
                        ))
                    }
                </View>
            </View>
        </View>
    )
}
export default WordDay