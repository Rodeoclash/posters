import styles from "./Content.module.css";

import Cart from "../../../components/Cart";

const Content = ({ children, header }) => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <h1 className={styles.siteName}>Scientific Posters</h1>
      <div className={styles.cart}>
        <Cart />
      </div>
    </header>

    <main className={styles.main}>{children}</main>
  </div>
);

export default Content;
