import styles from "./App.css";
import words from "./components/all-words.json";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import style from "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";

const columns = [
  { key: "id", name: "ID" },
  { key: "deutsch", name: "Deutsch" },
  { key: "artikel", name: "Artikel" },
  { key: "bedeutung", name: "Bedeutung" },
  { key: "russisch", name: "Russisch" },
  { key: "beispiele", name: "Beispiele" },
];



function App() {
  return (
    <div className={styles.App}>
      <Header />
      <DataGrid className={style} columns={columns} rows={words.map((word, id) => (
  <Card
    key={id}
    deutsch={word.deutsch}
    artikel={word.artikel}
    bedeutung={word.bedeutung}
    russisch={word.russisch}
    beispiele={word.beispiele}
  />
))}/>
      <Footer />
    </div>
  );
}

export default App;
