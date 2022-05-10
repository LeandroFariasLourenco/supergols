import { createContext, ReactNode } from 'react';
import { useObserver } from 'mobx-react-lite';

const globalStore = {};

export const GlobalContext = createContext(globalStore);

interface IGlobalProviderProps {
  children: ReactNode | ReactNode[];
}

const GlobalProvider = ({
  children,
}: IGlobalProviderProps) => {
  const globalStoreObserver = useObserver(() => globalStore);

  return (
    <GlobalContext.Provider value={globalStoreObserver}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
