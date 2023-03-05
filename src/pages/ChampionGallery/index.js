import Link from "next/link";
import Footer from "@/components/Footer";

import data from "@/lib/champion.json";

export default function ChampionGalleryPage() {
  console.log(data.data.Aatrox);

  return (
    <>
      <header>
        <h1>Champion Gallery</h1>
        <Link href={"/"}>&larr; Home</Link>
      </header>
      <main>
        <h2>champion gallery goes here</h2>
      </main>
      <Footer />
    </>
  );
}
