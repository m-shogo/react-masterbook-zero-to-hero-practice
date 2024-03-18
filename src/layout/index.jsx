import { Outlet } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
import Header from "../components/Header";
import Form from "../components/Form";
import History from "../components/History";

const Layout = () => {
  const [theme, handleThemeSwitch] = useDarkMode();

  return (
    <div
      className="mode-body"
      data-theme={theme === "light" ? "light" : "dark"}
    >
      <div className="container">
        <Header />
        <button onClick={handleThemeSwitch}>モード</button>
        <Form />
        <History />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
