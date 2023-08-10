import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomAppbar from './src/components/CustomAppbar';

function App() {
  return (
    <View style={styles.container}>
      <CustomAppbar title='MI APP'/>
    </View>
  );
}

export default function Main() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
