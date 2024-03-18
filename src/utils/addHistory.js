export const addHistory = (pokemonImgUrl) => {
  const urlArray = localStorage.getItem("history");
  const parsedArray = urlArray ? JSON.parse(urlArray) : [];
  const addedArray = [...parsedArray, pokemonImgUrl];
  const removedArray = [...new Set(addedArray)];

  if (removedArray.length > 5) {
    const reducedArray = removedArray.slice(1);
    localStorage.setItem("history", JSON.stringify(reducedArray));
  } else {
    localStorage.setItem("history", JSON.stringify(removedArray));
  }
};
