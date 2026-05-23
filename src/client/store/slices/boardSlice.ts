import { createSlice } from "@reduxjs/toolkit";
import { type PayloadAction } from "@reduxjs/toolkit";
import { type EntrySlotIndexes } from "@client/pages/Index/Main/Board/Board.interface";

interface BoardState {
  name: string;
  selected: number | null;
  editable: { entry: number | null; slot: number | null };
  entries: Array<Array<string>>;
};

const initialState: BoardState = {
  name: "BaseTest",
  selected: null,
  editable: { entry: null, slot: null },
  entries: [["1", "Lesson", "202"], ["2", "Lesson_2", "203"]]
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addEntry: (state, action: PayloadAction<Array<string> | undefined>) => {
      const entry = action.payload;
      
      if (entry) {
        state.entries.push(entry);
      } else {
        const lastEntry = state.entries[state.entries.length - 1];
        
        if (lastEntry && lastEntry.length > 0) {
          const emptyEntry = new Array(lastEntry.length).fill("");
          state.entries.push(emptyEntry);
        } else {
          state.entries.push([""]);
        }
      }
    },
    deleteEntry: (state) => {
      state.entries = state.entries.filter((_, i) => i !== state.selected); // deleting fixing
      console.log("Filtered:", state.entries.filter((_, i) => i !== state.selected));
    },
    setSelectedEntry: (state, action: PayloadAction<number>) => {
      if (action.payload < 0 || action.payload >= state.entries.length || action.payload === state.selected) return;

      state.selected = action.payload ?? null;
      console.log("Selected:", state.selected);
    },
    setEditable: (state, action: PayloadAction<EntrySlotIndexes>) => {
      const { slotIndex, entryIndex } = action.payload;
      state.editable.entry = entryIndex;
      state.editable.slot = slotIndex;
    }
  }
});


export const { addEntry, deleteEntry, setSelectedEntry, setEditable } = boardSlice.actions;
export default boardSlice.reducer;