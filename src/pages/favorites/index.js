import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native'

import { getFavorites } from '../../utils/storage'
import { FoodList } from '../../components/foodlist'

export function Favorites() {
  const [receipe, setreceipe] = useState([])
  const isFocused = useIsFocused()

  useEffect(() => {
    let isActive = true

    async function getReceipes(){

      const result = await getFavorites('@appreceitas')
      if(isActive){
        setreceipe(result)
      }
    }

    if(isActive){
      getReceipes();
    }

    return () => {
      isActive = false
    }
  }, [isFocused])

 return (
   <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Receitas Favoritas</Text>

    { receipe.length === 0 && (
      <Text>Você ainda não tem nenhuma receita salva.</Text>
    )}  

    <FlatList
      style={{ marginTop: 14 }}
      data={receipe}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <FoodList data={item} /> }
      showsVerticalScrollIndicator={false}
    />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f3f9ff',
      paddingStart: 14,
      paddingEnd:14,
      paddingTop: 36,
    },
    title:{
      color: '#000',
      fontWeight: 'bold',
      fontSize: 24,
    }
})