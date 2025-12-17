import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext, type SingleRecipe } from "../../context/GlobalContext";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const [singleRecipe, setSingleRecipe] = useState<SingleRecipe | null>(null);
  // const context = useContext(GlobalContext);
  // if (!context) throw new Error("GlobalContext must be used within GlobalState provider");
  const { addToFavorites, removeFromFavorites } = useContext(GlobalContext)!;

  useEffect(() => {
    async function fetchSingleRecipeData() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/get?rId=${id}`
        );
        const data = await response.json();
        if (data?.recipe) {
          setSingleRecipe(data.recipe);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchSingleRecipeData();
  }, [id]);

  console.log(singleRecipe);

  return (
    <div className="max-w-3xl mx-auto p-6">
      {!singleRecipe ? (
        <p className="text-center text-gray-600">Loading recipe...</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Image */}
          <img
            src={singleRecipe.image_url}
            alt={singleRecipe.title}
            className="w-full h-72 object-cover"
          />

          <div className="p-6">
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {singleRecipe.title}
            </h1>

            {/* Publisher */}
            <p className="text-gray-600 mb-4">
              By <span className="font-semibold">{singleRecipe.publisher}</span>
            </p>

            {/* Social Rank */}
            <p className="text-blue-600 font-semibold mb-6">
              ⭐ {Math.round(singleRecipe.social_rank)}
            </p>

            {/* Ingredients */}
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Ingredients
            </h2>

            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
              {singleRecipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {/* Footer Actions */}
            <div className="flex gap-4">
              <a
                href={singleRecipe.source_url}
                target="_blank"
                rel="noreferrer noopener"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                View Full Recipe
              </a>

              <a
                href={singleRecipe.publisher_url}
                target="_blank"
                rel="noreferrer noopener"
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
              >
                Publisher
              </a>

              <button
                onClick={() => addToFavorites(singleRecipe)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
              >
                Favorite
              </button>

              <button
                onClick={() => removeFromFavorites(singleRecipe.recipe_id)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
              >
                Remove Favorite
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
