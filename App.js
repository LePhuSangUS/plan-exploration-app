// import 'react-native-gesture-handler';
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigationContainer from "./app/navigations";

const networkDebugger = () => {
  //Enable Default Debuggerr
  //  NativeModules.DevSettings.setIsDebuggingRemotely(true);




  //Enable Inspect Network
  global.XMLHttpRequest = global.originalXMLHttpRequest
    ? global.originalXMLHttpRequest
    : global.XMLHttpRequest;
  global.FormData = global.originalFormData
    ? global.originalFormData
    : global.FormData;

  fetch; // Ensure to get the lazy property

  if (window.__FETCH_SUPPORT__) {
    // it's RNDebugger only to have
    window.__FETCH_SUPPORT__.blob = false;
  } else {
    /*
     * Set __FETCH_SUPPORT__ to false is just work for `fetch`.
     * If you're using another way you can just use the native Blob and remove the `else` statement
     */
    global.Blob = global.originalBlob ? global.originalBlob : global.Blob;
    global.FileReader = global.originalFileReader
      ? global.originalFileReader
      : global.FileReader;
  }
}
const Stack = createNativeStackNavigator();
// __DEV__?networkDebugger():null
// NativeModules.DevMenu.show();

const App = () => {
  return <AppNavigationContainer></AppNavigationContainer>
}

export default () => {
  return <App />
}