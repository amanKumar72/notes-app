import { FlatList, StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import { useTheme } from '@/contexts/ThemeContext'
import { notes } from '@/mock-data/notes'
import type { Note } from '@/mock-data/notes'
import { AntDesign, FontAwesome } from '@expo/vector-icons'



const Notes = () => {
  const [filteredNotes, setFilteredNotes] = useState<Note[]>(notes);
  const { theme } = useTheme();
  const { text: color, background: backgroundColor, border: borderColor } = theme;
  const handleChangeText = (text: string) => {
    setFilteredNotes(notes.filter(note => note.title.toLowerCase().includes(text.toLowerCase())));
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View>
        <TextInput style={[styles.input, { color, backgroundColor, borderColor }]} placeholder='Search' placeholderTextColor={color} onChangeText={handleChangeText}/>
        <FlatList
          data={filteredNotes}
          keyExtractor={note => note.id}
          renderItem={({ item }) => (
            <Pressable style={[styles.card, { backgroundColor, borderColor }]} onPress={()=>router.push({ pathname: '/(main)/note/[id]', params: { id: item.id } })}>
              <Image style={styles.image} source={item.image ? { uri: item.image } : require('@/assets/images/noImg.png')} alt="Note image" />
              <Text style={[styles.title, { color }]}>{item.title}</Text>
              <Text style={[styles.date, { color }]}>{item.createdAt.toLocaleDateString()}</Text>
            </Pressable>
          )}
        />
      </View>
      <Pressable style={[styles.createButton, { backgroundColor, borderColor }]} onPress={() => router.push('/(main)/create')}>
        <Text style={[styles.createButtonText, { color }]}><AntDesign name="plus" size={28} color={color} /></Text>
      </Pressable>
    </View>
  )
}

export default Notes

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 24,
    height: 24,
    borderRadius: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
  },
  input: {
    height: 48,
    borderRadius: 16,
    paddingHorizontal: 16,
    marginVertical: 12,
    marginHorizontal: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  createButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    height: 56,
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  createButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})