const Pokemon = (props) => {
  return (
    <>
      {props.pokemonData.jpname && <h1>{props.pokemonData.jpname}</h1>}
      <h2>{props.pokemonData.name}</h2>
      {props.pokemonData.img && (
        <img src={props.pokemonData.img} alt="Pokemon" />
      )}
    </>
  );
};
export default Pokemon;
