import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';
//리덕스 store에 있는 데이터를 해당 컴포넌트에 Provide 해준다고 생각
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import app from './firebase'
import Toast from 'react-native-toast-message';
export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <>
    <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen}/>
          <Stack.Screen options={{ headerShown: false }} name="Main" component={MainScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>    
    <Toast />
    </>

    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <Text>This is SSG first RN App!</Text>
    //   <Text>This is SSG first RN App!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
