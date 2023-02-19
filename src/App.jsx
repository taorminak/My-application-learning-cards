import styles from "./App.css";
import words from "./components/all-words.json";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
//import 'react-data-grid/lib/styles.css';
//import DataGrid from 'react-data-grid';

//const columns = [
//  { key: 'id', name: 'ID' },
//  { key: 'deutsch', name: 'Deutsch' },
/*  { key: 'artikel', name: 'Artikel' },
  { key: 'bedeutung', name: 'Bedeutung' },
  { key: 'russisch', name: 'Russisch' },
  { key: 'beispiele', name: 'Beispiele' }
];
 

const rows = words.map((word, index) => (
  <Card key={index}
  deutsch={word.deutsch}
  artikel={word.artikel}
  bedeutung={word.bedeutung}
  russisch={word.russisch}
  beispiele={word.beispiele}
/>
));
<DataGrid columns={columns} rows={rows} />
*/

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.WordsContainer}>
        {words.map((word, index) => (
          <Card
            key={index}
            deutsch={word.deutsch}
            artikel={word.artikel}
            bedeutung={word.bedeutung}
            russisch={word.russisch}
            beispiele={word.beispiele}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
