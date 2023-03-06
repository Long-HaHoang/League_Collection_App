import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/ChampionGallery.module.css";

export default function ChampionCart({ champion }) {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }
  return (
    <li className={styles.li}>
      <p>{champion.name}</p>
      {active ? (
        <Image
          src={`/tiles/${champion.id}_0.jpg`}
          height={250}
          width={250}
          alt={`${champion.name} default tile`}
        />
      ) : (
        <Image
          src={`/tiles/${champion.id}_0.jpg`}
          height={250}
          width={250}
          alt={`${champion.name} default tile`}
          style={{ filter: "grayscale(100%)" }}
        />
      )}
      <button type="button" onClick={handleClick}>
        {active ? "Remove" : "Collect"}
      </button>
    </li>
  );
}
