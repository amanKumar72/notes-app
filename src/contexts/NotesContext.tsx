import { Note } from '@/types/notes';
import React, { createContext, useState, ReactNode } from 'react'

export const NotesContext = createContext<{ notes: Note[], addNote: (note: Note) => void, deleteNote: (id: string) => void, editNote: (id: string, note: Note) => void, getNoteById: (id: string) => Note | undefined } | undefined>(undefined);
interface NotesProviderProps {
  children: ReactNode;
}

export const NotesProvider: React.FC<NotesProviderProps> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (note: Note) => {
    setNotes([...notes, note]);
  };

  const editNote = (id: string, note: Note) => {
    setNotes(notes.map(n => n.id === id ? { ...n, ...note } : n));
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const getNoteById = (id: string) => {
    return notes.find(note => note.id === id);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, editNote, getNoteById }}>
      {children}
    </NotesContext.Provider>
  );
};
