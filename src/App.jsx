import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Recipe from "./components/Recipe";
import "./styles/App.css";

const App = () => {
  const [mealName, setMealName] = useState();
  const [mealData, setMealData] = useState({
    id: "",
    name: "",
    instructions: "",
    img: "",
    source: "",
    area: "",
    category: "",
  });

  const getMealData = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
    );
    const jsonData = await response.json();
    setMealData({
      id: jsonData.meals[0].idMeal,
      name: jsonData.meals[0].strMeal,
      instructions: jsonData.meals[0].strInstructions,
      img: jsonData.meals[0].strMealThumb,
      source: jsonData.meals[0].strYoutube,
      area: jsonData.meals[0].strArea,
      category: jsonData.meals[0].strCategory,
    });
  };

  return (
    <div>
      <Header />
      <Form setMealName={setMealName} getMealData={getMealData} />
      <Recipe />
    </div>
  );
};

export default App;
