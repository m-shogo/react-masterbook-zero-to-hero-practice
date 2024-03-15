import Pokemon from "../components/Pokemon";

const PokemonPage = (props) => {
  return (
    <>
      <Pokemon pokemonData={props.pokemonData} />
    </>
  );
};

export default PokemonPage;
