import styles from "./Header.css";

export default function Header() {
  return (
    <div className={styles.Header}>
      <div>Home</div>
      <div>My study sets</div>
      <div>Dark mode</div>
    </div>
  );
}
