import { Routes, Route } from "react-router-dom";
import ContextProvider from "./context";
import Layout from "./layout";
import Home from "./pages/Home";
import Pokemonpage from "./pages/PokemonPage";
import "./styles/App.css";

const App = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/pokemon/:id" element={<Pokemonpage />} />
          <Route
            path="*"
            element={<h1>Not Found ヘッダーロゴをクリックしてください</h1>}
          />
        </Route>
      </Routes>
    </ContextProvider>
  );
};

export default App;
