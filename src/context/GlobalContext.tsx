import { createContext } from "react";

interface GlobalContextType{
    searchParam : string;
    setSearchParam: (value : string) => void;
}

export const GlobalContext = createContext<GlobalContextType | null>(null);
