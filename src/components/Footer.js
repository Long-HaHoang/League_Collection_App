import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p>
        &copy; 2023{" "}
        <Link href={"https://github.com/Long-HaHoang"}>
          long ha hoang <sup>(*)</sup>
        </Link>
      </p>
      <div>
        <Link href={"/"}>Home</Link>
        <Link href={"/Imprint"}>Imprint (Impressum)</Link>
        <Link href={"/DataPrivacy"}>Data Privacy (Datenschutz)</Link>
        <Link href={"https://www.riotgames.com/en/legal"}>
          Riot Legal Jibber Jabber <sup>(*)</sup>
        </Link>
      </div>
      <p>(*): External link</p>
    </footer>
  );
}
