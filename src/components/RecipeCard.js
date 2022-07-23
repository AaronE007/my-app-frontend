import React from 'react'

const RecipeCard = ({recipe}) => {
  return (
    <div>
      <h3>Name: {recipe.name}</h3>
      <h4>Calories: {recipe.calories}</h4>
      <h4>Main Ingredient: {recipe.main_ing}</h4>
      <h4>Country of Origin: {recipe.country}</h4>
      <h5>Eaten at: {recipe.restaurant.name}</h5>
    </div>
  )
}

export default RecipeCard
