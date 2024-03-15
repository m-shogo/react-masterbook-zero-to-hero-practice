import { useState ,useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import Pokemonpage from "./pages/PokemonPage";
import "./styles/App.css";

const App = () => {
  const [pokemonName, setPokemonName] = useState(
    Math.floor(Math.random() * 1026)
  );
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
  const navigate = useNavigate();

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

    navigate(`/pokemon/${jsonData.id}`);
  };
  return (
    <div>
      <Routes>
        <Route
          element={
            <Layout
              setPokemonName={setPokemonName}
              getPokemonData={getPokemonData}
            />
          }
        >
          <Route index element={<Home />} />
          <Route
            path="/pokemon/:id"
            element={<Pokemonpage pokemonData={pokemonData} />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
