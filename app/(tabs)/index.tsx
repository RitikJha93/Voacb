import Searchbar from "@/components/Searchbar"
import { Colors } from "@/constants/Colors"
import { useEffect, useState } from "react"
import { ActivityIndicator, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from "react-native"
import axios from "axios"
import { Center } from "native-base"
import WordDay from "@/components/WordDay"
import WordCard from "@/components/WordCard"
import { Meanings } from "@/models/words"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Ionicons from "@expo/vector-icons/Ionicons"
const Index = () => {

    const { height, width } = useWindowDimensions()
    const [isLoading, setIsLoading] = useState(false)
    const [wordDay, setWordDay] = useState<string>("")
    const [recommendWords, setRecommendWords] = useState<string[]>([])
    const [meanings, setMeanings] = useState<Meanings[]>([])

    const handleSearch = (searchText: string) => {
        console.log(searchText)
    }

    const fetchWordOfday = async () => {
        setIsLoading(true)
        try {
            const { data } = await axios.get(`${process.env.EXPO_PUBLIC_RANDOM_WORD_API}?words=${1}`)
            setWordDay(data[0])
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }
    const fetchRecommedWords = async () => {
        setIsLoading(true)
        try {
            const { data } = await axios.get(`${process.env.EXPO_PUBLIC_RANDOM_WORD_API}?words=${10}`)
            setRecommendWords(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    const getWordDefinition = async (word: string) => {
        setIsLoading(true)
        try {
            const { data } = await axios.get(`${process.env.EXPO_PUBLIC_WORDAPI}/${word}`)
            if (data.length > 0) {
                setMeanings(data[0].meanings)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchWordOfday()
        fetchRecommedWords()
    }, [])

    useEffect(() => {
        if (wordDay) {
            getWordDefinition(wordDay)
        }
    }, [wordDay])

    return (
        <View className="flex-1 bg-white ">
            <StatusBar backgroundColor={Colors.light.tabIconSelected} barStyle={"light-content"} />
            <View
                style={{ height: height / 6, backgroundColor: Colors.light.tabIconSelected }}
                className="px-6 py-6 flex items-center gap-4 "
            >
                <Text className="text-center text-2xl font-semibold text-white">Home</Text>
                <Searchbar searchText={handleSearch} />
            </View>

            <View className="pt-8 pb-4 px-6 flex-1" style={{ backgroundColor: Colors.light.background }}>
                {
                    isLoading ? <Center>
                        <ActivityIndicator />
                    </Center> :
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <WordDay wordOfDay={wordDay} meanings={meanings} />
                            <WordCard recommendedWords={recommendWords} />
                        </ScrollView>
                }
            </View>

            <TouchableOpacity
                onPress={() => fetchWordOfday()}
                style={{
                    position: "absolute",
                    bottom: 20,
                    left: width * 0.5 - (width * 0.3) / 2,
                    backgroundColor: Colors.light.tabIconSelected,
                    borderRadius: 20,
                    width: width * 0.3,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                }}
            >
                <Text className="text-white text-center font-semibold">New Word</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Index