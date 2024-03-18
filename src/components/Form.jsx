import { useContext } from "react";
import { AppContext } from "../context";
import Button from "./Button";

const Form = () => {
  const contextValues = useContext(AppContext);
  return (
    <form onSubmit={contextValues.getPokemonData}>
      <input
        onChange={(e) => contextValues.setPokemonName(e.target.value)}
        type="text"
        name="pokemonName"
        placeholder="pokemonを英語で入力"
        value={contextValues.pokemonName}
      ></input>
      <Button type="search" />
    </form>
  );
};

export default Form;
