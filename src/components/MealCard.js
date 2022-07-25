import React from 'react'

const MealCard = ({meal, onDeleteClick, onUpdateMeal}) => {

  const {id, name, calories, mainIngredient, countryOfOrigin} = meal

  function handleDeleteClick() {
    
    onDeleteClick(id);
  }

  function handleUpdateClick(e) {
    e.preventDefault()
    if (e.key === 'Enter') {
      onUpdateMeal(id, e.target.value)
    }
  }


  return (
    <div style={{margin: "auto", border: "solid", backgroundColor: "blue", height: 800, width: 800, color: "gold"}}>
      <button onClick={handleDeleteClick}>Delete</button>
      <h3>Name: {name}</h3>
      <br/>
      <h4>Calories: {calories}</h4>
      <label>Update Portion Size</label>
      <input onKeyDown={handleUpdateClick} type="number" name="caloriesForm" />
      <br/>
      <h4>Main Ingredient: {mainIngredient}</h4>
      <br/>
      <h4>Country of Origin: {countryOfOrigin}</h4>
      <br/>
      <h4>Eaten at: {meal.restaurant?.name}</h4>
    </div>
  )
}

export default MealCard


