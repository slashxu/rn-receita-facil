import { View, Text, StyleSheet } from 'react-native';

export function Detail() {
 return (
   <View style={styles.container}>
    <Text>Pagina Detalhes !!!</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    }
})