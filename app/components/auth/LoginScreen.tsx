//---- Imports
import { useContext } from "react";
import { ActivityIndicator, Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

import ThemeContext from "../../providers/ThemeProvider";
import { getBackgroundColors, getOtherColors, getTextColors } from "../../utils/ColorUtils";
import AuthContext, { AuthContextType } from "../../providers/AuthProvider";

//---- Components
const LoginScreen = () => {
    const isDarkTheme: boolean = useContext(ThemeContext);
    const {isSignInInProgress, startGoogleSignIn} = useContext<AuthContextType>(AuthContext);

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: getBackgroundColors(isDarkTheme)}]}>
            <Image style={[styles.appIconView]} source={require('./assets/chat.png')} />
            <Text style={[styles.title, {color: getTextColors(isDarkTheme)}]}>Welcome {isDarkTheme}</Text>
            <Text style={[styles.subtitleView, styles.subtitle, {color: getTextColors(isDarkTheme)}]}>Continue to ChatMe</Text>
            <TouchableOpacity
                style={[styles.signInButtonContainer, {borderColor: getOtherColors(isDarkTheme)}]}
                activeOpacity={0.5}
                onPress={startGoogleSignIn}
                disabled={isSignInInProgress}
            >
                <Image style={[styles.imageView]} source={require('./assets/google.png')} />
                <Text style={[styles.buttonText, {color: getTextColors(isDarkTheme)}]}>SignIn with Google</Text>
            </TouchableOpacity>

            <ActivityIndicator style={[styles.activityIndicatorView, {opacity: isSignInInProgress ? 1.0 : 0.0}]} size="small" color={getOtherColors(isDarkTheme)} />
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
    appIconView: {
        width: 50,
        height: 50
    },
    title: {
        fontSize: 28,
        fontWeight: '500',
        marginTop: 8
    },
    subtitleView: {
        marginTop: 38
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '300'
    },
    signInButtonContainer: {
        marginTop: 18,
        paddingVertical: 7.5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderRadius: 18
    },
    buttonText: {
        marginStart: 10,
        fontSize: 18,
        fontWeight: '500'
    },
    imageView: {
        width: 36,
        height: 36,
        padding: 5,
    },
    activityIndicatorView: {
        marginTop: 18
    }
});

//---- Exports
export default LoginScreen;