import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";

import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

import { useTheme } from "@/contexts/ThemeContext";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");

  const { theme } = useTheme();

  const {
    text: color,
    background: backgroundColor,
    border: borderColor,
  } = theme;

  const handleSubmit = () => {
    if (!title || !content || !date) {
      alert("Please fill in all fields");
      return;
    }

    alert("Note created successfully!");

    setTitle("");
    setContent("");
    setDate("");
    setImage("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[
        styles.container,
        {
          backgroundColor,
        },
      ]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Hero */}
        <View style={styles.heroContainer}>
          <Image
            source={{
              uri: "https://www.masterji.co/images/home-page/ai-evaluator-mark.webp",
            }}
            style={[
              styles.logo,
              {
                borderColor,
              },
            ]}
          />

          <Text style={[styles.title, { color }]}>
            Create Note
          </Text>

          <Text
            style={[
              styles.subtitle,
              {
                color: `${color}99`,
              },
            ]}
          >
            Capture your thoughts beautifully
          </Text>
        </View>

        {/* Form */}
        <View
          style={[
            styles.formContainer,
            {
              backgroundColor,
              borderColor,
            },
          ]}
        >
          {/* Title */}
          <View style={styles.inputContainer}>
            <Text
              style={[
                styles.inputLabel,
                {
                  color,
                },
              ]}
            >
              Title
            </Text>

            <View
              style={[
                styles.inputWrapper,
                {
                  backgroundColor,
                  borderColor,
                },
              ]}
            >
              <FontAwesome
                name="sticky-note"
                size={18}
                color={`${color}99`}
                style={styles.icon}
              />

              <TextInput
                placeholder="Enter note title"
                placeholderTextColor={`${color}88`}
                style={[
                  styles.input,
                  {
                    color,
                  },
                ]}
                onChangeText={setTitle}
                value={title}
              />
            </View>
          </View>

          {/* Content */}
          <View style={styles.inputContainer}>
            <Text
              style={[
                styles.inputLabel,
                {
                  color,
                },
              ]}
            >
              Content
            </Text>

            <View
              style={[
                styles.inputWrapper,
                styles.textAreaWrapper,
                {
                  backgroundColor,
                  borderColor,
                },
              ]}
            >
              <FontAwesome
                name="pencil"
                size={18}
                color={`${color}99`}
                style={styles.iconTop}
              />

              <TextInput
                placeholder="Write your note..."
                placeholderTextColor={`${color}88`}
                multiline
                textAlignVertical="top"
                style={[
                  styles.textArea,
                  {
                    color,
                  },
                ]}
                onChangeText={setContent}
                value={content}
              />
            </View>
          </View>

          {/* Date */}
          <View style={styles.inputContainer}>
            <Text
              style={[
                styles.inputLabel,
                {
                  color,
                },
              ]}
            >
              Date
            </Text>

            <View
              style={[
                styles.inputWrapper,
                {
                  backgroundColor,
                  borderColor,
                },
              ]}
            >
              <FontAwesome
                name="calendar"
                size={18}
                color={`${color}99`}
                style={styles.icon}
              />

              <TextInput
                placeholder="DD/MM/YYYY"
                placeholderTextColor={`${color}88`}
                style={[
                  styles.input,
                  {
                    color,
                  },
                ]}
                onChangeText={setDate}
                value={date}
              />
            </View>
          </View>

          {/* Image */}
          <View style={styles.inputContainer}>
            <Text
              style={[
                styles.inputLabel,
                {
                  color,
                },
              ]}
            >
              Image URL
            </Text>

            <View
              style={[
                styles.inputWrapper,
                {
                  backgroundColor,
                  borderColor,
                },
              ]}
            >
              <FontAwesome
                name="image"
                size={18}
                color={`${color}99`}
                style={styles.icon}
              />

              <TextInput
                placeholder="Paste image URL"
                placeholderTextColor={`${color}88`}
                style={[
                  styles.input,
                  {
                    color,
                  },
                ]}
                onChangeText={setImage}
                value={image}
              />
            </View>
          </View>

          {/* Preview */}
          {image ? (
            <Image
              source={{ uri: image }}
              style={[
                styles.previewImage,
                {
                  borderColor,
                },
              ]}
            />
          ) : null}

          {/* Button */}
          <Pressable
            style={({ pressed }) => [
              styles.submitButton,
              {
                opacity: pressed ? 0.92 : 1,
                transform: [{ scale: pressed ? 0.98 : 1 }],
              },
            ]}
            onPress={handleSubmit}
          >
            <Text style={styles.submitButtonText}>
              Create Note
            </Text>

            <FontAwesome
              name="arrow-right"
              size={18}
              color="#fff"
            />
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 120,
  },

  heroContainer: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },

  logo: {
    width: 110,
    height: 110,
    borderRadius: 28,
    marginBottom: 20,
    borderWidth: 2,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    letterSpacing: -1,
  },

  subtitle: {
    fontSize: 15,
    marginTop: 8,
  },

  formContainer: {
    borderRadius: 32,
    padding: 22,
    borderWidth: 1,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 8,
  },

  inputContainer: {
    marginBottom: 22,
  },

  inputLabel: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 10,
    marginLeft: 4,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 14,
    height: 58,
  },

  textAreaWrapper: {
    alignItems: "flex-start",
    height: 160,
    paddingTop: 16,
  },

  icon: {
    marginRight: 12,
  },

  iconTop: {
    marginRight: 12,
    marginTop: 4,
  },

  input: {
    flex: 1,
    fontSize: 16,
  },

  textArea: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },

  previewImage: {
    width: "100%",
    height: 220,
    borderRadius: 24,
    marginBottom: 24,
    marginTop: 8,
    borderWidth: 1,
  },

  submitButton: {
    height: 60,
    backgroundColor: "#6d5dfc",
    borderRadius: 22,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,

    shadowColor: "#6d5dfc",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 18,
    elevation: 8,
  },

  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});