import Link from "next/link";

export default function Header({ children }) {
  return (
    <header>
      <h1>{children}</h1>
      <Link href={"/"}>&larr; Home</Link>
    </header>
  );
}
