import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { emojiDictionary } from "./EmojiDictionary";

import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [emojiMeaning, setEmojiMeaning] = useState("");

  const inputHandler = (e) => {
    const emoji = e.target.value;
    setInput(emoji);
    const meaning = emojiDictionary[emoji];

    if (meaning) {
      setEmojiMeaning(meaning);
    } else {
      setEmojiMeaning("Error 404!!! emoji not found");
    }
  };

  const clickHandler = (emoji) => {
    const meaning = emojiDictionary[emoji];
    setEmojiMeaning(meaning);
  };

  return (
    <div className="App">
      <header>
        <h1 className="heading">
          Emoji<span> Interpreter</span>
        </h1>
        <input
          type="text"
          placeholder="enter the emoji.."
          value={input}
          onChange={inputHandler}
        />
      </header>
      <h1 className="emoji-meaning">
        <span className="inverted-comma">"</span>
        {emojiMeaning}
        <span className="inverted-comma">"</span>
      </h1>
      <div className="emojis">
        {Object.keys(emojiDictionary).map((emoji) => (
          <span
            className="emoji"
            key={uuidv4()}
            onClick={() => clickHandler(emoji)}
          >
            {emoji}
          </span>
        ))}
      </div>

      <footer>
        <p>Made using React.</p>
      </footer>
    </div>
  );
}
