import { useContext } from "react";
import { GlobalContext, type Recipe } from "../../context/GlobalContext";
import RecipeItem from "../../components/RecipeItem";

const Favorite = () => {
  const { favoriteRecipes } = useContext(GlobalContext)!;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-content-center gap-10">
      {favoriteRecipes && favoriteRecipes.length > 0
        ? favoriteRecipes.map((recipe) => {
            const recipeObj: Recipe = {
              publisher: recipe.publisher,
              title: recipe.title,
              source_url: recipe.source_url,
              recipe_id: recipe.recipe_id,
              image_url: recipe.image_url,
              social_rank: recipe.social_rank,
              publisher_url: recipe.publisher_url,
            };

            return (
              <RecipeItem
                recipe={recipeObj}
              />
            );
          })
        : null}
    </div>
  );
};

export default Favorite;
