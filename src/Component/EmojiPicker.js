import React from 'react';
import { EmojiPicker as EmojiSearch } from "react-emoji-search"; // Assuming you're using this package
import { useDispatch, useSelector } from 'react-redux';
import { setEmoji } from '../Component/Redux/SearchSlice';
import '../Component/CSS/Emoji.css';

const EmojiPicker = () => {
  const dispatch = useDispatch();
  const selectedEmoji = useSelector((state) => state.emoji.selectedEmoji);
  
  // console.log(selectedEmoji);
  
  const handleEmojiClick = (emoji) => {
    if (selectedEmoji !== emoji) {
      console.log(emoji);
    dispatch(setEmoji(emoji)); // Dispatch the selected emoji to the Redux store
    }
  };


  return (
    <div className="emoji-container">
      <h1>Emoji Picker</h1>

      {/* Display selected emoji */}
      {selectedEmoji && (
        <div className="selected-emoji">
          <h2>Selected Emoji: {selectedEmoji}</h2>
        </div>
      )}

      {/* Emoji Picker */}
      <EmojiSearch
        set="apple"
        emojiSize={24}
        emojiSpacing={8}
        emojiVersion={12.0}
        onEmojiClick={handleEmojiClick} // Event handler for emoji click
        styles={{//style for an emojis
          backgroundColor: "#2e4960",
          indicatorColor: "#b04c2d",
          fontColor: "lightgrey",
          searchBackgroundColor: "#263d51",
          tabsFontColor: "#8cdce4",
          searchFontColor: "lightgrey",
          skinTonePickerBackgroundColor: "#284155",
        }}
      />
    </div>
  );
};

export default EmojiPicker;
