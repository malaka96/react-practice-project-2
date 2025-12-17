import React, { useState, type ReactNode } from "react";
import { GlobalContext, type SingleRecipe, type Recipe } from "./GlobalContext";

interface Props {
  children: ReactNode;
}

const GlobalState = ({ children }: Props) => {
  const [searchParam, setSearchParam] = useState("");
  const [isLoading, setLoding] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState<SingleRecipe[]>([]);

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

  console.log(isLoading, recipes);

  function addToFavorites(singleRecipe: SingleRecipe) {
    setFavoriteRecipes(prev =>
      prev.some((f) => f.recipe_id === singleRecipe.recipe_id)
        ? prev
        : [...prev, singleRecipe]
    );
    console.log(favoriteRecipes[1].title + "favorite list");
    
  }

  function removeFromFavorites(id : string){
    setFavoriteRecipes(prev => prev.filter(f => f.recipe_id !== id));
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        isLoading,
        recipes,
        favoriteRecipes,
        addToFavorites,
        removeFromFavorites
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
