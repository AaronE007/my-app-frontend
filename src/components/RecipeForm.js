import {useState} from "react"
import {useHistory} from "react-router-dom"

import React from 'react'

const RecipeForm = () => {
  const history = useHistory()
  const [meal, setMeal] = useState({
    name: "",
    calories: "",
    mainIngredient: "",
    countryOfOrigin: ""
  })

  const handleChange = (e) =>{
    setMeal({
      ...meal, 
    })

  }
  

  return (
    <div>
    <h2>Add Menu Item Here</h2>
    <form>
        <label>Name</label>
        <input onChange={handleChange} type="text" name="name" value={meal.name} required/>
        <br/>
        <label>Calories</label>
        <input onChange={handleChange} type="number" name="calories" value={meal.calories} required/>
        <br/>
        <label>Main Ingredient</label>
        <input onChange={handleChange} type="text" name="mainIngredient" value={meal.mainIngredient} required/>
        <br/>
        <label>Country of Origin</label>
        <input onChange={handleChange} type="text" name="countryOfOrigin" value={meal.countryOfOrigin} required/>
    </form>
      
    </div>
  )
}

export default RecipeForm
