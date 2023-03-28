import styles from "./Footer.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default function Footer() {
  return (
    <ul className={styles.Footer}>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/mystudysets'>My study sets</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li>Dark mode</li>
    </ul>
  )
}

