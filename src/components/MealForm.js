import {useState} from "react"
import {useHistory} from "react-router-dom"
import React from 'react'

const MealForm = () => {
  const [meal, setMeal] = useState({
    name: "",
    calories: "",
    mainIngredient: "",
    countryOfOrigin: "",
    restaurant: ""
  })

  const history = useHistory()

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
      country_of_origin: meal.countryOfOrigin,
      restaurant: meal.restaurant
    }

    fetch("http://localhost:9292/meals", {
      method: "POST",
      headers: {
        "Content_Type": "application/json",
      },
        body: JSON.stringify(newMeal)
    })
      .then(() => history.push("/meals"))
  }



  return (
    <div>
    <h2>Add Menu Item Here</h2>
      <form onSubmit={handleSubmit} style={{margin: "auto", border: "solid", backgroundColor: "blue", height: 400, width: 400, color: "gold"}}>
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
          <br/>
          <br/>

          <label>Restaurant</label>
          <input onChange={handleChange} type="text" name="restaurant" value={meal.restaurant} required/>
          <br/>
          <input type="submit" value="Add a Meal!" />
      </form>
    </div>
  )
}

export default MealForm
