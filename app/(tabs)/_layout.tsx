import { Colors } from '@/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router"

const TabLayout = () => {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: Colors.light.tabIconSelected, headerShown: false }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: 'History',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="clock-o" color={color} />,
                }}
            />
        </Tabs>)
}
export default TabLayout