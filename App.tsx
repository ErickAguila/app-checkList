import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, Button, PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomAppbar from './src/components/CustomAppbar';
import CustomInput from './src/components/CustomInput';
import { useState } from 'react';
import CardTask from './src/components/CardTask';

type ItemList = {
  name: string;
  isChecked: boolean;
}

const list = [
  {
    name: 'tarea 1',
    isChecked: false
  },
  {
    name: 'tarea 2',
    isChecked: true
  },
  {
    name: 'tarea 3',
    isChecked: false
  },];

function App() {
  const [taskString, setTaskString] = useState<string>('');
  const [tasksList, setTaskList] = useState<ItemList[]>(list);

  const handleOnPress = (itemId: string) => {
    alert(itemId);
  }

  return (
    <View style={styles.container}>
      <CustomAppbar title='Check List'/>
      <CustomInput label={'Agregar tarea'} onChangeText={(text) => setTaskString(text)} />
      {list.map(function(item, index) {
        return <CardTask key={`item-${index}`} name={item.name} isChecked={item.isChecked} onPress={() => handleOnPress(`item ${index}`)} />
      })}
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
