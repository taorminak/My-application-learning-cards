import React, { useRef, useContext, useEffect }  from "react";
import Card from "../../components/Card/Card";
import styles from "./StudySets.css";
import { WordContext } from "../../Context/MyContext";

export default function StudySets() {
  const studiedCount = useRef(0);

  const { words, setWords } = useContext(WordContext);
console.log(words)

const addWord = (newWord) => {
  setWords([...words, newWord]);
}




  return (
    <div>
      <div className={styles.StudiedCount}>
        Studied words: {studiedCount.current}
      </div>
      <div className={styles.Card}>
        {words.map((word) => (
          <Card
            key={word.id}
            english={word.english}
            transcription={word.transcription}
            russian={word.russian}
            studiedCount={studiedCount}
            deleteWord={word.deleteWord}
            updateWord={word.updateWord}
          />
        ))}
        <button className={styles.Button} onClick={() => addWord()}>Add new word</button>

      </div>
    </div>
  );
}
