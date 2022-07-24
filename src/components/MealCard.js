import React from 'react'

const MealCard = ({meal, onDeleteClick, onUpdateClick}) => {

  function handleDeleteClick() {
    onDeleteClick(id);
  }

  function handleUpdateClick() {
    onUpdateClick(id);
  }

  return (
    <div style={{margin: "auto", border: "solid", backgroundColor: "blue", height: 800, width: 800, color: "gold"}}>
      <h3>Name: {meal.name}</h3>
      <br/>
      <h4>Calories: {meal.calories}</h4>
      <br/>
      <h4>Main Ingredient: {meal.mainIngredient}</h4>
      <br/>
      <h4>Country of Origin: {meal.countryOfOrigin}</h4>
      <br/>
      <h5>Eaten at: {meal.restaurant.name}</h5>
      <br/>
      <button onClick={handleDeleteClick}>Delete</button>
      <br/>
      <button onClick={handleUpdateClick}>Update</button>
    </div>
  )
}

export default MealCard


