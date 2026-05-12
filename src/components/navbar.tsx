import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Toggle from './toggle'
import { useTheme } from '@/contexts/ThemeContext'

const Navbar = () => {
  const { theme, setIsDark, isDark } = useTheme()
  console.log("navbar theme", theme)
  return (
    <View style={[styles.container, { backgroundColor: theme.card }]}>
      <Text style={[styles.title, { color: theme.text }]}>Notes App</Text>
      <Toggle isDark={isDark} setIsDark={setIsDark} />
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
})