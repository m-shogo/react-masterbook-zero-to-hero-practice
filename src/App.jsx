import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Pokemon from "./components/Pokemon";
import "./styles/App.css";

const App = () => {
  const [pokemonName, setPokemonName] = useState();
  const [pokemonData, setPokemonData] = useState({
    id: "",
    name: "",
    jpname: "",
    instructions: "",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    source: "",
    area: "",
    category: "",
  });

  const getPokemonData = async (e) => {
    e.preventDefault();
    const responseJapan = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`
    );
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const jsonDataJapan = await responseJapan.json();
    const jsonData = await response.json();

    const nameInfo = jsonDataJapan.names.find(
      (names) => names.language.name === "ja-Hrkt"
    );
    let jpname = "日本語名が見つかりません。";
    if (nameInfo) {
      jpname = nameInfo.name;
    }
    setPokemonData({
      id: jsonData.id,
      name: jsonData.name,
      jpname: jpname,
      img: jsonData.sprites.front_default,
    });
    console.log(setPokemonData);
  };
  return (
    <div>
      <Header />
      <Form setPokemonName={setPokemonName} getPokemonData={getPokemonData} />
      <Pokemon pokemonData={pokemonData} />
    </div>
  );
};

export default App;
