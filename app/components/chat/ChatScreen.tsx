import { useContext } from "react";
import { Button, SafeAreaView, Text } from "react-native";
import AuthContext, { AuthContextType } from "../../providers/AuthProvider";
import { createBottomTabNavigator, SceneStyleInterpolators } from "@react-navigation/bottom-tabs";
import ChatListScreen from "./chatlist/ChatListScreen";
import SettingsScreen from "./settings/SettingsScreen";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { getSecondaryBackgroundColors } from "../../utils/ColorUtils";
import ThemeContext from "../../providers/ThemeProvider";

const ChatScreen = () => {
    const Tab = createBottomTabNavigator();
    const isDarkTheme: boolean = useContext(ThemeContext);

    return (
        <Tab.Navigator 
            screenOptions={
                {
                    headerShown: false, 
                    animation: 'shift', 
                    tabBarStyle: {
                        backgroundColor: getSecondaryBackgroundColors(isDarkTheme),
                        borderColor: getSecondaryBackgroundColors(isDarkTheme)
                    }
                }
            }
        >
            <Tab.Screen name="Chat List" component={ChatListScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
    // const {logOutCurrentUser} = useContext<AuthContextType>(AuthContext);

    // return (
    //     <SafeAreaView>
    //         <Text>Chat Screen</Text>
    //         <Button title="Log out" onPress={logOutCurrentUser} />
    //     </SafeAreaView>
    // );
};

export default ChatScreen;