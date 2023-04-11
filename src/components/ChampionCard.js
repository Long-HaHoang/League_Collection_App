import Image from "next/image";
import styled, { css } from "styled-components";
import useStore from "@/hooks/useStore";

export default function ChampionCard({ champion }) {
  const [
    isOwned,
    increaseCounter,
    decreaseCounter,
    updateOwnedChampion,
    removeOwnedChampion,
  ] = useStore((state) => [
    state.isOwned(champion),
    state.increaseCounter,
    state.decreaseCounter,
    state.updateOwnedChampion,
    state.removeOwnedChampion,
  ]);

  const championTileURL = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/${champion.key}/${champion.skins[0].id}.jpg`;
  const championTileLocal = `/champion-tiles/${champion.key}/${champion.key}000.jpg`;

  function handleAddChampion() {
    increaseCounter();
    updateOwnedChampion(champion);
  }

  function handleRemoveChampion() {
    decreaseCounter();
    removeOwnedChampion(champion);
  }

  return (
    <StyledListItems>
      <p>{champion.name}</p>

      <StyledImage
        src={championTileURL}
        height={250}
        width={250}
        alt={`${champion.id} default tile`}
        isOwned={isOwned}
        priority
      />

      <button
        type="button"
        onClick={isOwned ? handleRemoveChampion : handleAddChampion}
      >
        {isOwned ? "Remove" : "Collect"}
      </button>
    </StyledListItems>
  );
}

const StyledListItems = styled.li`
  position: relative;
  border: solid red;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  p {
    width: 100%;
    text-align: center;
    background-color: #00000080;
    font-size: 1.3rem;
    position: absolute;
    top: 0;
    z-index: 2;
  }

  button {
    position: absolute;
    bottom: 1em;
    width: 60%;
    height: 10%;
    z-index: 2;
  }
`;

const StyledImage = styled(Image)`
  ${(props) =>
    !props.isOwned &&
    css`
      filter: grayscale(100%);
    `}
`;
