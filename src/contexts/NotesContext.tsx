import { Note, notes as mockNotes } from '@/mock-data/notes';
import React, { createContext, useContext, useState, ReactNode } from 'react'

const NotesContext = createContext<{ notes: Note[], addNote: (note: Note) => void, deleteNote: (id: string) => void, getNoteById: (id: string) => Note | undefined } | undefined>(undefined);

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};

interface NotesProviderProps {
  children: ReactNode;
}

export const NotesProvider: React.FC<NotesProviderProps> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (note: Note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const getNoteById = (id: string) => {
    return notes.find(note => note.id === id);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, getNoteById }}>
      {children}
    </NotesContext.Provider>
  );
};
