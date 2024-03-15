import { useContext } from "react";
import { AppContext } from "../context";
import Loading from "../components/Loading";
import Pokemon from "../components/Pokemon";

const PokemonPage = () => {
  const contextValues = useContext(AppContext);
  return <>{contextValues.loading ? <Loading /> : <Pokemon />}</>;
};

export default PokemonPage;
