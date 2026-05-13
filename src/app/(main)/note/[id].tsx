import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  useWindowDimensions,
  Pressable,
} from "react-native";

import React from "react";

import { useLocalSearchParams, useRouter } from "expo-router";

import { Note as NoteType } from "@/types/notes";
import { useTheme } from "@/hooks/useTheme";
import { useNotes } from "@/hooks/useNotes";
import { AntDesign } from "@expo/vector-icons";

const Note = () => {
  const { id } = useLocalSearchParams();
  const { getNoteById } = useNotes();
  const router = useRouter();

  const note: NoteType | undefined = getNoteById(id as string);
  const { width: windowWidth } = useWindowDimensions();

  const { theme } = useTheme();

  const {
    text: color,
    background: backgroundColor,
    border: borderColor,
  } = theme;

  if (!note) {
    return (
      <View
        style={[
          styles.center,
          {
            backgroundColor,
          },
        ]}
      >
        <Text style={{ color }}>
          Note not found
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={[
        styles.container,
        {
          backgroundColor,
        },
      ]}
      contentContainerStyle={{
        paddingBottom: 120,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => router.back()}>
          <Text style={{ color }}><AntDesign name="arrow-left" size={24} color={color} /></Text>
        </Pressable>
        <Pressable onPress={() => router.push({ pathname: '/(main)/create', params: { id } })}>
          <Text style={{ color }}><AntDesign name="edit" size={24} color={color} /></Text>
        </Pressable>
      </View>
      {/* Cover Image */}
      <Image
        source={
          note.image
            ? { uri: note.image }
            : require("@/assets/images/noImg.png")
        }
        style={[styles.cover, { height: Math.min(340, windowWidth * 0.55) }]}
      />

      {/* Content Card */}
      <View
        style={[
          styles.card,
          {
            backgroundColor,
            borderColor,
          },
        ]}
      >
        <Text style={[styles.title, { color }]}>
          {note.title}
        </Text>

        <Text
          style={[
            styles.date,
            { color: `${color}80` },
          ]}
        >
          Created on{" "}
          {note.createdAt?.toLocaleDateString() || "N/A"}
        </Text>
        <Text
          style={[
            styles.date,
            { color: `${color}80` },
          ]}
        >
          Updated on{" "}
          {note.updatedAt?.toLocaleDateString() || "N/A"}
        </Text>

        <View
          style={[
            styles.divider,
            {
              backgroundColor: borderColor,
            },
          ]}
        />

        <Text
          style={[
            styles.content,
            { color: `${color}DD` },
          ]}
        >
          {note.content}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Note;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  cover: {
    width: "100%",
    height: 260,
  },

  card: {
    marginTop: -30,
    marginHorizontal: 16,
    borderRadius: 30,
    padding: 24,
    borderWidth: 1,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 38,
  },

  date: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "500",
  },

  divider: {
    height: 1,
    marginVertical: 20,
  },

  content: {
    fontSize: 17,
    lineHeight: 30,
    letterSpacing: 0.3,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  editLink: {
    color: "#007AFF",
  },
  backLink: {
    color: "#007AFF",
  },
});