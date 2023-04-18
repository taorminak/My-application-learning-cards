import styles from "./Card.css";
import { useState, useEffect, useRef, useContext } from "react";
import { WordContext } from "../../Context/MyContext";

export default function Card(props) {
const {words, setWords}=useContext(WordContext)
console.log(words)
  const [isEdited, setIsEdited] = useState(true);
  const [flag, setFlag] = useState(true);
  const translationRef = useRef(null);

  useEffect(() => {
    translationRef.current.focus();
  }, []);


  function getTranslated() {
    setFlag(false);
    props.studiedCount.current += 1;

  }

  function getEdited() {
    setIsEdited(false);
  }
  function getSaved() {
    setIsEdited(true);
  }

  const deleteWord = () => {
    const filteredWords = words.filter((word) => word.id !== props.id);
    setWords(filteredWords);
  }

  const updateWord = (id, updatedWord) => {
    const updatedWords = words.map((word) => {
      if (word.id === id) {
        return { ...word, ...updatedWord };
      }
      return word;
    });
    setWords(updatedWords);
  }



  return (
    <div className={styles.Card}>
      {isEdited ? (
        <div>
          <div className={styles.Deutsch}>{props.english}</div>
          <div className={styles.Artikel}>{props.transcription}</div>
          <div className={styles.Bedeutung}>{props.russian}</div>
          <div className={styles.Beispiele}>{props.id}</div>
          <div>
            {" "}
            {flag ? (
              <button  ref={translationRef} onClick={getTranslated} className={styles.Button}>
                Translate
              </button>
            ) : (
              <div className={styles.Translation}>{props.russian}</div>
            )}
            <button className={styles.Button+" "+styles.GetEdited} onClick={updateWord}>
              Edit card
            </button>
            <button className={styles.Button+" "+styles.GetEdited} onClick={deleteWord}>
              Delete card
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.Inputs}>
          <input
            type="text"
            className={styles.Deutsch + " " + styles.Input}
            defaultValue={props.english}
          />
          <input
            type="text"
            className={styles.Artikel + " " + styles.Input}
            defaultValue={props.transcription}
          />
          <input
            type="text"
            className={styles.Bedeutung + " " + styles.Input}
            defaultValue={props.russian}
          />
          <input
            type="text"
            className={styles.Beispiele + " " + styles.Input}
            defaultValue={props.id}
          />
          <input
            type="text"
            className={styles.Russisch + " " + styles.Input}
            defaultValue={props.russisch}
          />
          <button className={styles.Button} onClick={getSaved}>
            Save
          </button>
        </div>
      )}
    </div>
  );
}
