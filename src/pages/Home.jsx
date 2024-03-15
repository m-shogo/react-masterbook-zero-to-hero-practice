import { useContext } from "react";
import { AppContext } from "../context";
import Loading from "../components/Loading";

const Home = () => {
  const contextValues = useContext(AppContext);
  return (
    <>
      <h1>テキストテキストテキスト</h1>
      {contextValues.loading && <Loading />}
    </>
  );
};

export default Home;
