import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

function createWithLocalStorage(config, localStorageKey) {
  // to prevent a hydration error a initial dummy store needs to be used
  // after hydration switch to the persisted store
  const useInitialStore = create(config);
  const usePersistedStore = create(persist(config, { name: localStorageKey }));

  function useStore(selector, compare) {
    // use a state that switches to true after hydration
    const [hasHydrated, setHasHydrated] = useState(false);
    useEffect(() => setHasHydrated(true), []);

    const store = usePersistedStore(selector, compare);
    const initialStore = useInitialStore(selector, compare);

    return hasHydrated ? store : initialStore;
  }

  return useStore;
}
export default createWithLocalStorage;
