import { View } from "native-base"
import Ionicons from "@expo/vector-icons/Ionicons"
import { TextInput, useWindowDimensions } from "react-native"

interface SearchbarProps {
    searchText: (text: string) => void;
}
const Searchbar = ({ searchText }: SearchbarProps) => {
    const {height} = useWindowDimensions()
    return (
        <View style={{}} className="flex-row h-1/2 items-center gap-x-1 bg-white w-full px-4 rounded-lg">
            <Ionicons name="search" size={22} style={{ color: "grey" }} className="text-slate-700" />
            <TextInput
                style={{ fontFamily: "Inter_400Regular" }}
                className="text-lg h-full"
                placeholder="Search for words.."
                onChangeText={text => searchText(text)}
            />
        </View>)
}
export default Searchbar