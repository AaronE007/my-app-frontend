import React from 'react'

const MealCard = ({recipe}) => {
  return (
    <div>
      <h3>Name: {meal.name}</h3>
      <br/>
      <h4>Calories: {meal.calories}</h4>
      <br/>
      <h4>Main Ingredient: {meal.mainIngredient}</h4>
      <br/>
      <h4>Country of Origin: {meal.countryOfOrigin}</h4>
      <br/>
      <h5>Eaten at: {meal.restaurant.name}</h5>
    </div>
  )
}

export default MealCard
