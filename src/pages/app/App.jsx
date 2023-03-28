import styles from "./App.css";
import Header from "../..//components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {Home, About, StudySets, Error} from '../index'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function App() {

  return (
    <Router>
    <div className={styles.App}>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/mystudysets' element={<StudySets/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='*' element={<Error/>}></Route>
      </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
