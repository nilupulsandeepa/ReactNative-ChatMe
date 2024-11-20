//---- Imports
import { NavigationContainer } from "@react-navigation/native"
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { useContext } from "react";

import AuthContext, { AuthContextType } from "../../providers/AuthProvider";
import LoginScreen from "../auth/LoginScreen";
import ChatScreen from "../chat/ChatScreen";

//---- Component
const AppScreen = () => {
    const Stack = createStackNavigator();
    const {isUserLoggedIn} = useContext<AuthContextType>(AuthContext);
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
                {isUserLoggedIn ? (
                    <Stack.Screen name="Chat" component={ChatScreen} />
                ) : (
                    <Stack.Screen name="Login" component={LoginScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

//---- Exports
export default AppScreen;