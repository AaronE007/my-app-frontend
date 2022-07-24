import {useState} from "react"
import {useHistory} from "react-router-dom"

import React from 'react'

const MealForm = () => {
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
      [e.target.name]: e.target.value
    })

  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const newMeal = {
      name: meal.name,
      calories: meal.calories,
      main_ingredient: meal.mainIngredient,
      country_of_origin: meal.countryOfOrigin
    }

    fetch("url", {
      method: "Post",
      headers: {
        "Content_Type": "app"
      },
        body: JSON.stringify(newMeal)
    })
      .then(() => history.push("/meals"))
  }



  return (
    <div>
    <h2>Add Menu Item Here</h2>
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input onChange={handleChange} type="text" name="name" value={meal.name} required/>
        <br/>
        <br/>

        <label>Calories</label>
        <input onChange={handleChange} type="number" name="calories" value={meal.calories} required/>
        <br/>
        <br/>

        <label>Main Ingredient</label>
        <input onChange={handleChange} type="text" name="mainIngredient" value={meal.mainIngredient} required/>
        <br/>
        <br/>

        <label>Country of Origin</label>
        <input onChange={handleChange} type="text" name="countryOfOrigin" value={meal.countryOfOrigin} required/>
    </form>
      
    </div>
  )
}

export default MealForm
