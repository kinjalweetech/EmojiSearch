import { createSlice } from '@reduxjs/toolkit';

// // Emoji list data
// const emojis = [
//   { symbol: '😀', name: 'grinning face' },
//   { symbol: '😃', name: 'smiling face with open mouth' },
//   { symbol: '😄', name: 'smiling face with open mouth & smiling eyes' },
//   { symbol: '😁', name: 'grinning face with smiling eyes' },
//   { symbol: '😆', name: 'laughing' },
//   // Add more emojis here
// ];

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: '',
    selectedEmoji: '',
    // emojis,
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedEmoji: (state, action) => {
      state.selectedEmoji = action.payload;
    },
  },
});

export const { setSearchTerm, setSelectedEmoji } = searchSlice.actions;

export default searchSlice.reducer;
