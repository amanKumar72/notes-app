import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";

import React from "react";

import { useLocalSearchParams } from "expo-router";

import { getNoteById, Note } from "@/mock-data/notes";
import { useTheme } from "@/contexts/ThemeContext";

const Note = () => {
  const { id } = useLocalSearchParams();

  const note: Note | undefined = getNoteById(id as string);

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
      {/* Cover Image */}
      <Image
        source={
          note.image
            ? { uri: note.image }
            : require("@/assets/images/noImg.png")
        }
        style={styles.cover}
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
          {note.createdAt.toLocaleDateString()}
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
});