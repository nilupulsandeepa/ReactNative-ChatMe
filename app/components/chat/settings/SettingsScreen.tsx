import { useContext } from "react";
import { Button, SafeAreaView, Text } from "react-native";
import AuthContext, { AuthContextType } from "../../../providers/AuthProvider";

const SettingsScreen = () => {
    const {logOutCurrentUser} = useContext<AuthContextType>(AuthContext);

    return (
        <SafeAreaView>
            <Text>Settings Screen</Text>
            <Button title="Log out" onPress={logOutCurrentUser} />
        </SafeAreaView>
    );
};

export default SettingsScreen;