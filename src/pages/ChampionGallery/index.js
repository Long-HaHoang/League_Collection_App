import Link from "next/link";
import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";

import { data } from "@/lib/champion.json";

export default function ChampionGalleryPage() {
  const champions = Object.values(data);
  const sortedChampions = champions.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  console.table(sortedChampions);
  return (
    <>
      <Head>
        <title>Champion Gallery</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>Champion Gallery</h1>
        <Link href={"/"}>&larr; Home</Link>
      </header>
      <main>
        <h2>Champions</h2>
        <ul>
          {sortedChampions.map((champion) => {
            return (
              <li key={champion.id} className="championCard">
                {champion.name}
                <Image
                  src={`/tiles/${champion.id}_0.jpg`}
                  height={250}
                  width={250}
                  alt={`${champion.name} default tile`}
                />
              </li>
            );
          })}
        </ul>
      </main>
      <Footer />
    </>
  );
}
