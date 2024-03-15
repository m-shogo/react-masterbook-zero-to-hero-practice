const Form = (props) => {
  return (
    <form onSubmit={props.getPokemonData}>
      <input
        onChange={(e) => props.setPokemonName(e.target.value)}
        type="text"
        name="pokemonName"
        placeholder="pokemonを英語で入力"
      ></input>
      <button>検索</button>
    </form>
  );
};

export default Form;
