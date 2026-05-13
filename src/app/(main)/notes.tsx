import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import { useTheme } from "@/hooks/useTheme";
import type { Note } from "@/types/notes";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNotes } from "@/hooks/useNotes";

const Notes = () => {
  const { notes, deleteNote } = useNotes();
  const [filteredNotes, setFilteredNotes] = useState<Note[]>(notes);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [deleting, setDeleting] = useState(false);
  const { width: windowWidth } = useWindowDimensions();
  const isWide = windowWidth >= 720;
  const { theme } = useTheme();
  useEffect(()=>{
    setFilteredNotes(notes)
  },[notes])

  const {
    text: color,
    background: backgroundColor,
    border: borderColor,
  } = theme;
  const handleChangeText = (text: string) => {
    setFilteredNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  };
  const handleDeleteNote = (id: string) => {
    setDeleting(true);
    deleteNote(id);
    setShowDeleteModal(false);
    setDeleting(false);
  };
  const handleOpenModal = (note: Note) => {
    setSelectedNote(note);
    setShowDeleteModal(true);
  };
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View>
        <TextInput
          style={[
            styles.input,
            {
              color,
              backgroundColor,
              borderColor,
              width: isWide ? 420 : "100%",
            },
          ]}
          placeholder="Search"
          placeholderTextColor={color}
          onChangeText={handleChangeText}
        />
        <FlatList
          data={filteredNotes}
          keyExtractor={(note) => note.id}
          renderItem={({ item }) => (
            <Pressable
              style={[
                styles.card,
                { width: isWide ? 420 : "100%", backgroundColor, borderColor },
              ]}
              onPress={() =>
                router.push({
                  pathname: "/(main)/note/[id]",
                  params: { id: item.id },
                })
              }
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                  flex: 1,
                }}
              >
                <Image
                  style={styles.image}
                  source={
                    item.image
                      ? { uri: item.image }
                      : require("@/assets/images/noImg.png")
                  }
                  alt="Note image"
                />
                <Text style={[styles.title, { color }]}>{item.title}</Text>
                <Text style={[styles.date, { color }]}>
                  {item.createdAt?.toLocaleDateString() || "N/A"}
                </Text>
              </View>
              <Pressable hitSlop={30} onPress={() => handleOpenModal(item)}>
                <AntDesign name="delete" size={16} color={color} />
              </Pressable>
            </Pressable>
          )}
        />
      </View>
      <Pressable
        style={[styles.createButton, { backgroundColor, borderColor }]}
        onPress={() => router.push("/(main)/create")}
      >
        <Text style={[styles.createButtonText, { color }]}>
          <AntDesign name="plus" size={28} color={color} />
        </Text>
      </Pressable>
      {showDeleteModal && (
        <View style={styles.modalOverlay}>
          <View
            style={[
              styles.modalContainer,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
          >
            {/* Icon */}
            <View
              style={[
                styles.iconContainer,
                {
                  backgroundColor: `${theme.accent}20`,
                },
              ]}
            >
              <FontAwesome name="trash" size={28} color={theme.accent} />
            </View>

            {/* Title */}
            <Text
              style={[
                styles.modalTitle,
                {
                  color: theme.text,
                },
              ]}
            >
              Delete Note
            </Text>

            {/* Description */}
            <Text
              style={[
                styles.modalDescription,
                {
                  color: theme.subtext,
                },
              ]}
            >
              Are you sure you want to permanently delete this note?
            </Text>

            {/* Actions */}
            <View style={styles.modalActions}>
              <Pressable
                onPress={() => setShowDeleteModal(false)}
                style={[
                  styles.cancelButton,
                  {
                    borderColor: theme.border,
                    backgroundColor: theme.background,
                  },
                ]}
              >
                <Text
                  style={{
                    color: theme.text,
                    fontWeight: "600",
                  }}
                >
                  Cancel
                </Text>
              </Pressable>

              <Pressable
                disabled={deleting}
                onPress={() => handleDeleteNote(selectedNote?.id || "")}
                style={[
                  styles.deleteButton,
                  {
                    backgroundColor: "#ff4d4f",
                    opacity: deleting ? 0.6 : 1,
                  },
                ]}
              >
                <Text style={styles.deleteButtonText}>
                  {deleting ? "Deleting..." : "Delete"}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    alignSelf: "center",
    shadowColor: "#000",
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
    fontWeight: "bold",
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
    alignSelf: "center",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  createButton: {
    position: "absolute",
    bottom: 40,
    right: 20,
    height: 56,
    width: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 28,
    borderWidth: 1,
    shadowColor: "#000",
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
    fontWeight: "bold",
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.45)",

    justifyContent: "center",
    alignItems: "center",

    paddingHorizontal: 24,

    zIndex: 999,
  },

  modalContainer: {
    width: "100%",
    borderRadius: 28,
    padding: 28,

    borderWidth: 1,

    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },

  iconContainer: {
    width: 72,
    height: 72,
    borderRadius: 999,

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 20,
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 10,
  },

  modalDescription: {
    fontSize: 15,
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 28,
  },

  modalActions: {
    flexDirection: "row",
    gap: 14,
    width: "100%",
  },

  cancelButton: {
    flex: 1,
    height: 54,

    borderRadius: 18,
    borderWidth: 1,

    justifyContent: "center",
    alignItems: "center",
  },

  deleteButton: {
    flex: 1,
    height: 54,

    borderRadius: 18,

    justifyContent: "center",
    alignItems: "center",
  },

  deleteButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
