//---- Imports
import { createContext, useEffect, useState } from "react";
import { Appearance } from "react-native";

//---- Provider
const ThemeContext = createContext(false);

export const ThemeProvider = ({children}) => {
    //Step 1: Get initial theme
    const [isDarkTheme, setIsDarkTheme] = useState(Appearance.getColorScheme() === 'dark');

    //Step 2: useEffect to add theme listener on component mount
    useEffect(() => {
        //Step 3: Listener callback to handle theme change
        const themeSubscription = Appearance.addChangeListener(({colorScheme}) => {
            setIsDarkTheme(colorScheme === 'dark')
            console.log("Theme Provider: isDark -> " + (colorScheme === 'dark'));
        });

        //Step 5: Remove the listener when the component unmount
        return () => themeSubscription.remove();
    }, []); //Empty array ensures this runs only once on component mount/unmount

    return (
        <ThemeContext.Provider value={isDarkTheme}>
            {children}
        </ThemeContext.Provider>
    )
};

//---- Export
export default ThemeContext;