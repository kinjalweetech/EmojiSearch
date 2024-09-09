
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedEmoji: null,
  // emojiList: [
  //   { unicode: '✌🏽', set: 'apple', size: 24, quality: 128 },
  //   { unicode: '🥸', set: 'facebook', size: 24, quality: 128 },
  //   { unicode: '👀', set: 'twitter', size: 24, quality: 256 },
  // ],
  // settings: {
  //   set: 'apple',
  //   emojiSize: 24,
  //   emojiSpacing: 8,
  //   emojiVersion: 12.0,
  //   styles: {
  //     backgroundColor: "#2e4960",
  //     indicatorColor: "#b04c2d",
  //     fontColor: "lightgrey",
  //     searchBackgroundColor: "#263d51",
  //     tabsFontColor: "#8cdce4",
  //     searchFontColor: "lightgrey",
  //     skinTonePickerBackgroundColor: "#284155",
  //   },
  // },
};

const emojiSlice = createSlice({
  name: 'emoji',
  initialState,
  reducers: {
    setEmoji: (state, action) => {
      state.selectedEmoji = action.payload;
    },
    addEmoji: (state, action) => {
      state.emojiList.push(action.payload);
    },
    setSettings: (state, action) => {
      state.settings = { ...state.settings, ...action.payload };
    },
  },
});

export const { setEmoji, addEmoji, setSettings } = emojiSlice.actions;
export default emojiSlice.reducer;
