import styles from "./Content.module.css";

import Cart from "../../../components/Cart";

const Content = ({ children, header }) => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <h1>Scientific Posters</h1>
      <Cart />
    </header>

    <main className={styles.main}>{children}</main>
  </div>
);

export default Content;
