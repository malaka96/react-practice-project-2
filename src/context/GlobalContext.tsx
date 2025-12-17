import { createContext } from "react";

export interface Recipe {
  publisher: string;
  title: string;
  source_url: string;
  recipe_id: string;
  image_url: string;
  social_rank: number;
  publisher_url: string;
}

export interface SingleRecipe {
  publisher: string;
  ingredients: string[];
  source_url: string;
  recipe_id: string;
  image_url: string;
  social_rank: number;
  publisher_url: string;
  title: string;
}

interface GlobalContextType {
  searchParam: string;
  setSearchParam: (value: string) => void;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  isLoading: boolean;
  recipes: Recipe[];
  favoriteRecipes: SingleRecipe[];
  addToFavorites: (singleRecipe: SingleRecipe) => void;
  removeFromFavorites: (id: string) => void;
}

export const GlobalContext = createContext<GlobalContextType | null>(null);
