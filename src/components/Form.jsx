import { useContext } from "react";
import { AppContext } from "../context";

const Form = () => {
  const contextValues = useContext(AppContext);
  return (
    <form onSubmit={contextValues.getPokemonData}>
      <input
        onChange={(e) => contextValues.setPokemonName(e.target.value)}
        type="text"
        name="pokemonName"
        placeholder="pokemonを英語で入力"
      ></input>
      <button>検索</button>
    </form>
  );
};

export default Form;
