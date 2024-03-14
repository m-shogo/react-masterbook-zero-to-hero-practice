import { useState } from "react";

const Form = () => {
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

  const handleInput = () => {};

  return (
    <form onSubmit={getMealData}>
      <input
        onChange={(e) => setMealName(e.target.value)}
        type="text"
        name="mealName"
        placeholder="料理名を英語で入力"
      ></input>
      <button>検索</button>
    </form>
  );
};

export default Form;
