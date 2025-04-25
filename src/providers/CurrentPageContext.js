import { createContext, useContext } from "react";

export const CurrentPageContext = createContext("");
export const useCurrentPage = () => useContext(CurrentPageContext);
