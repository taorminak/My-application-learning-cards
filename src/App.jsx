import style from "./App.css";
import words from "./components/all-words.json";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "react-data-grid/lib/styles.css";
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
    <div className={style.App}>
      <Header />
      <DataGrid columns={columns} rows={words} />
      <Footer />
    </div>
  );
}

export default App;
