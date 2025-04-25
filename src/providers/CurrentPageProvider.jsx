import { useState } from "react";
import { CurrentPageContext } from "./CurrentPageContext";

export default function CurrentPageProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <CurrentPageContext value={{ currentPage, setCurrentPage }}>
      {children}
    </CurrentPageContext>
  );
}
