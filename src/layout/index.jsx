import { useContext } from "react";
import { AppContext } from "../context";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Form from "../components/Form";
import History from "../components/History";
import Button from "../components/Button";

const Layout = () => {
  const contextValues = useContext(AppContext);

  return (
    <div
      className="mode-body"
      data-theme={contextValues.theme === "light" ? "light" : "dark"}
    >
      <div className="container">
        <Header />
        <Button type="darkmode" />
        <Button type="delete" />
        <Form />
        <History />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
