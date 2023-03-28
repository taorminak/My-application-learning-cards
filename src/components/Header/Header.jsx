import styles from "./Header.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default function Header() {
  return (
    <ul className={styles.Header}>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/mystudysets'>My study sets</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li>Dark mode</li>
    </ul>
  );
}
