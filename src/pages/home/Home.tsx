import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import RecipeItem from "../../components/RecipeItem";

const Home = () => {

  const {isLoading, recipes} = useContext(GlobalContext)!;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-content-center gap-10">
      {recipes && recipes.length > 0 ? recipes.map((item) => <RecipeItem recipe={item}/>) : null}
    </div>
  )
}

export default Home;
