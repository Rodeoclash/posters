import Link from "next/link";

const Breadcrumbs = ({ children, header }) => (
  <Link href="/">
    <a>Home</a>
  </Link>
);

export default Breadcrumbs;
