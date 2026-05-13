import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const EditNote = () => {
  const { id } = useLocalSearchParams<{ id: string }>()
  return (
    <View>
      <Text>EditNote {id}</Text>
    </View>
  )
}

export default EditNote

const styles = StyleSheet.create({})