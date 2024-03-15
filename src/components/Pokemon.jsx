import { useContext } from "react";
import { AppContext } from "../context";

const Pokemon = () => {
  const contextValues = useContext(AppContext);
  return (
    <>
      <div className="recipe">
        {contextValues.pokemonData.jpname && (
          <h1>{contextValues.pokemonData.jpname}</h1>
        )}
        <h2>{contextValues.pokemonData.name}</h2>
        {contextValues.pokemonData.img && (
          <img src={contextValues.pokemonData.img} alt="Pokemon" />
        )}
        {contextValues.pokemonData.text && (
          <p>{contextValues.pokemonData.text}</p>
        )}
      </div>
    </>
  );
};
export default Pokemon;
