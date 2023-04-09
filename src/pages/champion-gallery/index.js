import ChampionCard from "@/components/ChampionCard";
import Head from "next/head";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "@/components/Header";
import useStore from "@/hooks/useStore";
import staticVersions from "@/../../public/versions.json";
import staticChampion from "@/../../public/champion.json";
import { sortChampion } from "@/helper/sortChampion";

export default function ChampionGalleryPage() {
  const [counterChampion] = useStore((state) => [state.counterChampion]);
  const [versions, setVersions] = useState(staticVersions);
  const [sortedChampions, setSortedChampions] = useState(
    sortChampion(staticChampion)
  );

  useEffect(() => {
    setVersions(staticVersions);
    setSortedChampions(sortChampion(staticChampion));
  }, []);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       // Fetch data from url1
  //       const responseVersion = await fetch(
  //         "https://ddragon.leagueoflegends.com/api/versions.json"
  //       );
  //       if (!responseVersion.ok) {
  //         throw new Error(`HTTP error! status: ${responseVersion.status}`);
  //       }
  //       const versions = await responseVersion.json();

  //       setVersions(versions);

  //       // Fetch data from url2 using data from url1
  //       const responseChampionFull = await fetch(
  //         `http://ddragon.leagueoflegends.com/cdn/${versions[0]}/data/en_US/championFull.json`
  //       );
  //       if (!responseChampionFull.ok) {
  //         throw new Error(`HTTP error! status: ${responseChampionFull.status}`);
  //       }
  //       const championFullData = await responseChampionFull.json();

  //       try {
  //         setSortedChampions(sortChampion(championFullData));
  //       } catch (error) {
  //         console.error("Error handling JSON:", error);
  //         // handle the error here, e.g. show an error message to the user
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       // handle the error here, e.g. show an error message to the user
  //     }
  //   }

  //   fetchData();
  // }, []);

  return (
    <>
      <Head>
        <title>Champion Gallery</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>Champion Gallery</Header>
      <StyledMain>
        <h2>Champions</h2>
        <h3>Version: {versions[0]}</h3>
        <div>
          <p>{`${counterChampion} of ${sortedChampions.length}`}</p>
        </div>
        <ul>
          {sortedChampions.map((champion) => {
            return <ChampionCard key={champion.id} champion={champion} />;
          })}
        </ul>
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h2 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  div {
    border: solid rgb(var(--foreground-rgb));
    padding: 0.5rem;
  }

  ul {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }
`;
