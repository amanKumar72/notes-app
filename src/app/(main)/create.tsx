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
  useWindowDimensions,
  View
} from "react-native";

import { useTheme } from "@/hooks/useTheme";
import { useNotes } from "@/hooks/useNotes";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { Note } from "@/types/notes";

export default function CreateNote() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [ mode, setMode ] = useState<"create" | "edit">(id ? "edit" : "create");
  const { addNote, editNote, getNoteById } = useNotes();
  const note = getNoteById(id);
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");
  const { theme } = useTheme();
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const {
    text: color,
    background: backgroundColor,
    border: borderColor,
  } = theme;
  
  const logoSize = Math.min(120, Math.max(90, windowWidth * 0.28));
  const formPadding = windowWidth < 380 ? 18 : 22;
  const textAreaHeight = windowHeight > 700 ? 170 : 150;

  const inputStyle = StyleSheet.compose(styles.textArea, {
    color,
  }); 
  
  const handleSubmit = () => {
    if (!title || !content) {
      alert("Please fill in all fields");
      return;
    }

    if (mode === "create") {
      addNote({
        id: Date.now().toString(),
        title,
        content,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    } else {
      editNote(id, {
        id,
        title,
        content,
        createdAt: note?.createdAt || new Date(),
        updatedAt: new Date(),
      });
    }

    setTitle("");
    setContent("");
    router.push("/");
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
        contentContainerStyle={[styles.scrollContent, { padding: formPadding }]}
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
                width: logoSize,
                height: logoSize,
                borderColor,
              },
            ]}
          />

          <Text style={[styles.title, { color }]}>
            {mode === "create" ? "Create Note" : "Edit Note"}
          </Text>

          <Text
            style={[
              styles.subtitle,
              {
                color: `${color}99`,
              },
            ]}
          >
            {mode === "create" ? "Capture your thoughts beautifully" : "Edit your note"}
          </Text>
        </View>

        {/* Form */}
        <View
          style={[
            styles.formContainer,
            {
              backgroundColor,
              borderColor,
              padding: formPadding,
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
                style={inputStyle as any}
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
                  height: textAreaHeight,
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
                style={inputStyle as any}
                onChangeText={setContent}
                value={content}
              />
            </View>
          </View>


          {/* Button */}
          <Pressable
            style={({ pressed }) => [
              styles.submitButton,
              {
                opacity: pressed ? 0.92 : 1,
                transform: [{ scale: pressed ? 0.98 : 1 }],
                backgroundColor,
                shadowColor: `${color}99`,
              },
            ]}
            onPress={handleSubmit}
          >
            <Text style={[styles.submitButtonText, { color }]}>
              {mode === "create" ? "Create Note" : "Update Note"}
            </Text>

            <FontAwesome
              name="arrow-right"
              size={18}
              color={color}
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
    borderRadius: 22,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 18,
    elevation: 8,
  },

  submitButtonText: {
    fontSize: 18,
    fontWeight: "700",
  },
});