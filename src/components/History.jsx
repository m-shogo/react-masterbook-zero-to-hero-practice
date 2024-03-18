import { useContext } from "react";
import { AppContext } from "../context";

const History = () => {
  const contextValues = useContext(AppContext);
  return (
    <>
      <button onClick={contextValues.handleDeleteHistory}>削除</button>
      <ul>
        {contextValues.imgUrl.map((url, index) => (
          <li key={index}>
            <div className="ball">
              <img src={url} alt="pokemon-image" />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default History;
