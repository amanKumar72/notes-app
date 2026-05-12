import Notes from "./notes";

import { StyleSheet, View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";

export default function Index() {
  const { theme } = useTheme();
  return <View style={[styles.container, { backgroundColor: theme.background }]}><Notes /></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});