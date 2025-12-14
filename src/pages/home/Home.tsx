import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Home = () => {

  const {isLoading, recipes} = useContext(GlobalContext);

  return (
    <div>
      <h2>Yello from home</h2>
    </div>
  )
}

export default Home;
