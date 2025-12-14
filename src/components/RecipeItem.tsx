import type { Recipe } from "../context/GlobalContext"


const RecipeItem = (recipe : Recipe) => {
  return (
    <div className="bg-white border shadow-sm rounded-lg p-4 w-72 hover:shadow-md transition">
      
      {/* Image */}
      <img
        src={recipe.image_url}
        alt={recipe.title}
        className="w-full h-40 object-cover rounded-md mb-3"
      />

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
        {recipe.title}
      </h2>

      {/* Publisher */}
      <p className="text-sm text-gray-600 mb-2">
        By <span className="font-medium">{recipe.publisher}</span>
      </p>

      {/* Social Rank */}
      <p className="text-sm text-blue-600 font-semibold mb-4">
        ⭐ {Math.round(recipe.social_rank)}
      </p>

      {/* Footer Actions */}
      <div className="flex justify-between items-center">
        <a
          href={recipe.source_url}
          target="_blank"
          className="text-sm text-blue-600 hover:underline"
        >
          View Recipe
        </a>

        <a
          href={recipe.publisher_url}
          target="_blank"
          className="text-sm text-gray-700 hover:text-blue-600 transition"
        >
          Publisher
        </a>
      </div>
    </div>
  );
}

export default RecipeItem
