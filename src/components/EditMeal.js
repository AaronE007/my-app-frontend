import React, { useState } from "react";

function EditMeal({ id, onUpdateMeal }) {
  const [meal, setMeal] = useState({
    name: "",
    calories: "",
    mainIngredient: "",
    countryOfOrigin: "",
    restaurant: ""
  });

  const handleChange = (e) =>{
    setMeal({
      ...meal, 
      [e.target.name]: e.target.value
    })

  }

  const newMeal = {
    name: meal.name,
    calories: meal.calories,
    main_ingredient: meal.mainIngredient,
    country_of_origin: meal.countryOfOrigin,
    restaurant: meal.restaurant
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/meals/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMeal),
    })
      .then((r) => r.json())
      .then((updatedMeal) => onUpdateMeal(updatedMeal));
  }

  return (
    <form onSubmit={handleFormSubmit}>
          <label>Name</label>
          <input onChange={handleChange} type="text" name="name" value={meal.name} required/>
          <br/>
          <br/>

          <label>Calories</label>
          <input onChange={handleChange} type="number" name="calories" value={meal.calories} required/>
          <br/>
          <br/>

          <label>Main Ingredient</label>
          <input onChange={(handleChange)} type="text" name="mainIngredient" value={meal.mainIngredient} required/>
          <br/>
          <br/>

          <label>Country of Origin</label>
          <input onChange={handleChange} type="text" name="countryOfOrigin" value={meal.countryOfOrigin} required/>
          <br/>
          <br/>

          <label>Restaurant</label>
          <input onChange={handleChange} type="text" name="restaurant" value={meal.restaurant} required/>
          <br/>
          <input type="submit" value="Change Meal Data" />
   </form>
  );
}

export default EditMeal;
