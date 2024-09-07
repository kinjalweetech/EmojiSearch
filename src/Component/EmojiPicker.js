import React from 'react';
import { useDispatch } from 'react-redux';
import EmojiPicker from 'emoji-picker-react';
import { setSelectedEmoji } from '../features/searchSlice';

const EmojiPickerComponent = () => {
  const dispatch = useDispatch();

  const handleEmojiClick = (event, emojiObject) => {
    dispatch(setSelectedEmoji(emojiObject.emoji));
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <EmojiPicker onEmojiClick={handleEmojiClick} />
    </div>
  );
};

export default EmojiPickerComponent;
