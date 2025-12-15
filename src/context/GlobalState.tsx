import React, { useState, type ReactNode } from "react";
import { GlobalContext, type Recipe } from "./GlobalContext";

interface Props {
  children: ReactNode;
}



const GlobalState = ({ children }: Props) => {
  const [searchParam, setSearchParam] = useState("");
  const [isLoading, setLoding] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  console.log(searchParam);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoding(true);

    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/search?q=${searchParam}`
      );
      const data = await response.json();
      if (data?.recipes) {
        setRecipes(data.recipes);
        setLoding(false);
        setSearchParam("");
      }
      console.log(data);
    } catch (e) {
      console.log(e);
      setLoding(false);
      setSearchParam("");
    }
  }

  console.log(isLoading, recipes)

  return (
    <GlobalContext.Provider
      value={{ searchParam, setSearchParam, handleSubmit , isLoading, recipes }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
