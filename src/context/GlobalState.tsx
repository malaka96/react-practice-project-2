import { useState, type ReactNode } from "react";
import { GlobalContext } from "./GlobalContext";


interface Props{
    children: ReactNode;
}

const GlobalState = ({children}:Props) => {

    const [searchParam, setSearchParam] = useState("");

    return <GlobalContext.Provider value={{searchParam, setSearchParam}}>{children}</GlobalContext.Provider>;
}

export default GlobalState;