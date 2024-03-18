import { useContext } from "react";
import { AppContext } from "../context";
import SearchIcon from "../assets/search-icon.svg";
import DarkmodeIcon from "../assets/darkmode-icon.svg";
import DeleteIcon from "../assets/delete-icon.svg";

const SingleButton = (props) => {
  return (
    <button onClick={props.handler}>
      <img src={props.icon} alt="icon-image" />
    </button>
  );
};

const Button = (props) => {
  const contextValues = useContext(AppContext);
  switch (props.type) {
    case "search":
      return <SingleButton icon={SearchIcon} />;
    case "darkmode":
      return (
        <SingleButton
          handler={contextValues.handleThemeSwitch}
          icon={DarkmodeIcon}
        />
      );
    case "delete":
      return (
        <SingleButton
          handler={contextValues.handleDeleteHistory}
          icon={DeleteIcon}
        />
      );
    default:
      return null;
  }
};
export default Button;
