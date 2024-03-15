import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Form from "../components/Form";

const Layout = (props) => {
  return (
    <div>
      <div>
        <Header />
        <Form
          setPokemonName={props.setPokemonName}
          getPokemonData={props.getPokemonData}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
