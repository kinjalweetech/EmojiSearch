import React from 'react';
import { useSelector } from 'react-redux';

const EmojiList = () => {
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const emojis = useSelector((state) => state.search.emojis);
  const selectedEmoji = useSelector((state) => state.search.selectedEmoji);

  // Filter emojis based on the search term
  const filteredEmojis = emojis.filter((emoji) =>
    emoji.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Selected Emoji: {selectedEmoji ? selectedEmoji : 'None'}</h2>
      {filteredEmojis.length > 0 ? (
        filteredEmojis.map((emoji, index) => (
          <div key={index} style={{ fontSize: '24px', margin: '10px' }}>
            {emoji.symbol} - {emoji.name}
          </div>
        ))
      ) : (
        <p>No emojis found</p>
      )}
    </div>
  );
};

export default EmojiList;
