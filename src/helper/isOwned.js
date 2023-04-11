export default function isOwned(_ownedChampion, _currentChampion) {
  return _ownedChampion.find((element) => element.id === _currentChampion.id);
}
