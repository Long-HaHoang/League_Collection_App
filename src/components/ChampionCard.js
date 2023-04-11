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
    <StyledListItems owned={isOwned.toString()}>
      <p>{champion.name}</p>

      <StyledImage
        src={championTileLocal}
        height={250}
        width={250}
        alt={`${champion.id} default tile`}
        isowned={isOwned.toString()}
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
  ${(props) =>
    props.owned === "true"
      ? css`
          border: solid gold;
        `
      : css`
          border: solid darkgray;
        `}
  position: relative;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border: solid gold;
  }

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

  button:focus {
    border: solid red;
  }
`;

const StyledImage = styled(Image)`
  ${(props) =>
    props.isowned === "false" &&
    css`
      filter: grayscale(100%);
    `}
`;
