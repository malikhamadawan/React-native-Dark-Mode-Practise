import * as React from 'react';
import {View, Text, Switch} from 'react-native';
import {
  DarkTheme,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dummy from './src/screen/Dummy';
import {ThemeProvider} from './src/theme/themeProvider';
import login from './src/screen/login';
import forgotPassword from './src/screen/forgotPassword';
import Dashboard from './src/screen/Dashboard';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Login"
            component={login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{orientation: 'landscape', headerShown: false}}
          />
          <Stack.Screen
            name="Dummy"
            component={Dummy}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="forgotPassword"
            component={forgotPassword}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
