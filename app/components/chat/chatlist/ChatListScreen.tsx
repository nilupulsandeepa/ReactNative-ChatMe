//---- Imports
import { useContext } from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";
import AuthContext, { AuthContextType } from "../../../providers/AuthProvider";
import { getBackgroundColors, getTextColors } from "../../../utils/ColorUtils";
import ThemeContext from "../../../providers/ThemeProvider";

//---- Component
const ChatListScreen = () => {
    const isDarkTheme: boolean = useContext(ThemeContext);
    const {logOutCurrentUser} = useContext<AuthContextType>(AuthContext);

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: getBackgroundColors(isDarkTheme)}]}>
            <Text style={[{fontSize: 24, color: getTextColors(isDarkTheme)}]}>Chat List Screen</Text>
            <Button title="Log out" onPress={logOutCurrentUser} />
        </SafeAreaView>
    );
};

//---- Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
})
export default ChatListScreen;