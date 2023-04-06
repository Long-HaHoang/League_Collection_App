import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/ChampionGallery.module.css";

export default function ChampionCard({ champion }) {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }
  return (
    <li className={styles.li}>
      <p>{champion.name}</p>
      {active ? (
        <Image
          src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/${champion.key}/${champion.skins[0].id}.jpg`}
          height={250}
          width={250}
          alt={`${champion.id} default tile`}
        />
      ) : (
        <Image
          src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/${champion.key}/${champion.skins[0].id}.jpg`}
          height={250}
          width={250}
          alt={`${champion.id} default tile`}
          style={{ filter: "grayscale(100%)" }}
        />
      )}
      <button type="button" onClick={handleClick}>
        {active ? "Remove" : "Collect"}
      </button>
    </li>
  );
}
