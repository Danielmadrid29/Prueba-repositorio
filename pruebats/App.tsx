
import { StyleSheet, Text, View } from 'react-native';
import { JuegoProvider } from './Components/JuegoContext';
import { SafeAreaView } from 'react-native';
import { JuegoBoard } from './Components/JuegoBoard';
import { JuegoHistory } from './Components/JuegoHistory';


export default function App() {
  return (
    <JuegoProvider>
     
     <SafeAreaView>
      <JuegoBoard />
      <JuegoHistory />


     </SafeAreaView>


    </JuegoProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
