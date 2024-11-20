/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

//---- Imports
import AppScreen from './app/components/app/AppScreen';
import { AuthProvider } from './app/providers/AuthProvider';
import { ThemeProvider } from './app/providers/ThemeProvider';

//---- Component
function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppScreen />
      </AuthProvider>
    </ThemeProvider>
  );
}

//---- Exports
export default App;
