import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
import { addHistory } from "../utils/addHistory";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const [imgUrl, setImgUrl] = useState([]);
  const [loading, setLoading] = useState(false);
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

  const [theme, handleThemeSwitch] = useDarkMode();
  const navigate = useNavigate();

  const getPokemonData = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const responseJapan = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`
      );
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const jsonDataJapan = await responseJapan.json();
      const jsonData = await response.json();

      const japanNameInfo = jsonDataJapan.names.find(
        (names) => names.language.name === "ja-Hrkt"
      );
      let jpname = "日本語名が見つかりません。";
      if (japanNameInfo) {
        jpname = japanNameInfo.name;
      }

      const japanTextInfo = jsonDataJapan.flavor_text_entries.find(
        (flavor_text_entries) => flavor_text_entries.language.name === "ja-Hrkt"
      );
      let jptext = "日本語説明が見つかりません。";
      if (japanTextInfo) {
        jptext = japanTextInfo.flavor_text;
      }

      setPokemonData({
        id: jsonData.id,
        name: jsonData.name,
        jpname: jpname,
        img: jsonData.sprites.front_default,
        text: jptext,
      });
      setLoading(false);
      addHistory(jsonData.sprites.front_default);
      navigate(`/pokemon/${jsonData.id}`);
    } catch (err) {
      alert("エラーが起きました。再読み込みしてください");
    }
  };
  
  useEffect(() => {
    const savedUrl = JSON.parse(localStorage.getItem("history"));
    savedUrl && setImgUrl(savedUrl);
  }, [pokemonData]);

  const handleDeleteHistory = () => {
    localStorage.removeItem("history");
    setImgUrl([]);
  };

  const contextValues = {
    imgUrl: imgUrl,
    loading: loading,
    pokemonName: pokemonName,
    pokemonData: pokemonData,
    theme: theme,
    setPokemonName: setPokemonName,
    getPokemonData: getPokemonData,
    handleThemeSwitch: handleThemeSwitch,
    handleDeleteHistory: handleDeleteHistory,
  };

  return (
    <AppContext.Provider value={contextValues}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
