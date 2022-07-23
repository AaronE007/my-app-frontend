import React from 'react'

const RecipeForm = () => {
  return (
    <div>
    <h2>Add Menu Item Here</h2>
    <form>
        <label>Name</label>
        <input onChange={handleChange} type="text" name="name" value={recipe.name} required/>
        <br/>
        <label>Calories</label>
        <input onChange={handleChange} type="number" name="calories" value={recipe.calories} required/>
        <br/>
        <label>Main Ingredient</label>
        <input onChange={handleChange} type="text" name="mainIngredient" value={recipe.mainIngredient} required/>
        <br/>
        <label>Country of Origin</label>
        <input onChange={handleChange} type="text" name="countryOfOrigin" value={recipe.countryOfOrigin} required/>
    </form>
      
    </div>
  )
}

export default RecipeForm
