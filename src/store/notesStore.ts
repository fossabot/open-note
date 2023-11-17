import { create } from "zustand";

export const useNotesStore = create<NotesState>((set) => ({
  notesNames: [],
  currentNote: null,
  status: null,
  setNoteName: (name) =>
    set((state) => ({ notesNames: [...state.notesNames, name] })),
  setNotesNames: (names) => set({ notesNames: names }),
  setCurrentNote: (note) => set({ currentNote: note }),
  removeNote: (name) =>
    set((state) => ({
      notesNames: state.notesNames.filter((note) => note !== name),
    })),
  setStatus: (status) => set({ status }),
}));
