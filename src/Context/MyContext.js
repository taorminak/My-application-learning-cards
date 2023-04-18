import React, { createContext, useState, useEffect} from 'react';


export const WordContext = createContext();


export const WordContextProvider = ({children}) => {
  const [words, setWords] = useState([]);


  useEffect(() => {
    async function getWords() {
        const response = await fetch("http://itgirlschool.justmakeit.ru/api/words")
        const listWords = await response.json()
        setWords(listWords);
    }
    getWords()
  }, []);


  if(!words) {
    return <h1>Loading...</h1>
  }

  let value={ words, setWords }
   return (
    <WordContext.Provider value={value}>
      {children}
    </WordContext.Provider>
  );
}





