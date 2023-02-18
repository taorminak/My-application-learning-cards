import styles from './App.css';
import words from "./components/all-words.json";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card/>
      </header>
    </div>
  );
}

export default App;
