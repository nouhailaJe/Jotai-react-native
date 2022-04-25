import { useEffect } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { Provider } from "jotai";
import Account from "./src/screens/Account";


export default function App() {
  return (
    <View style={styles.container}>
      <Provider>
        <Account />
      </Provider>
    </View>
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