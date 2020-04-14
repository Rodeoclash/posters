import styles from "./Content.module.css";

import Cart from "../../../components/Cart";
import Link from "next/link";

const Content = ({ children, header, breadcrumb }) => {
  const renderedBreadCrumb = (() => {
    if (breadcrumb) {
      return <li>{breadcrumb}</li>;
    } else {
      return null;
    }
  })();

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.branding}>
          <h1 className={styles.siteName}>Scientific Posters</h1>
          <ul className={styles.breadcrumbs}>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            {renderedBreadCrumb}
          </ul>
        </div>
        <div className={styles.cart}>
          <Cart />
        </div>
      </header>

      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Content;
