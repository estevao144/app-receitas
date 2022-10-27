export const requestAPIMeals = async (ingredient, name, firstLetter) => {
  if (ingredient !== null) {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const listMeals = await request.json();
    return listMeals;
  }
  if (name !== null) {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const listMeals = await request.json();
    return listMeals;
  }
  if (firstLetter !== null) {
    const request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
    const listMeals = await request.json();
    return listMeals;
  }
};

export const requestAPIDrinks = async (ingredient, name, firstLetter) => {
  if (ingredient !== null) {
    const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const listDrinks = await request.json();
    return listDrinks;
  }
  if (name !== null) {
    const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    const listDrinks = await request.json();
    return listDrinks;
  }
  if (firstLetter !== null) {
    const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`);
    const listDrinks = await request.json();
    return listDrinks;
  }
};
