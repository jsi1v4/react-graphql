import React, { createContext, useContext } from "react";

import { useApi } from "../lib/apollo";
import { HomeService } from "./service";

export const HomeContext = createContext<HomeService>(null as never);

export const useHomeContext = () => useContext(HomeContext);

export const HomeProvider = ({ children }) => {
  const api = useApi();
  return (
    <HomeContext.Provider value={new HomeService(api)}>
      {children}
    </HomeContext.Provider>
  );
};
