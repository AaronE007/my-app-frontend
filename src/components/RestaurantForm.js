import {useState} from "react"
import {useHistory} from "react-router-dom"
import React from 'react'

const RestaurantForm = () => {
  const [restaurant, setRestaurant] = useState({
    name: "",
    slogan: "",
  })

  const history = useHistory()

  const handleChange = (e) =>{
    setRestaurant({
      ...restaurant, 
      [e.target.name]: e.target.value
    })

  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const newRestaurant = {
      name: restaurant.name,
      slogan: restaurant.slogan,
    }

    fetch("http://localhost:9292/restaurants", {
      method: "POST",
      headers: {
        "Content_Type": "application/json",
      },
        body: JSON.stringify(newRestaurant)
    })
      .then(() => history.push("/restaurants"))
  }



  return (
    <div>
    <h2>Add Restaurant Here</h2>
      <form onSubmit={handleSubmit} style={{margin: "auto", border: "solid", backgroundColor: "blue", height: 300, width: 400, color: "gold"}}>
          <label>Name</label>
          <input onChange={handleChange} type="text" name="name" value={restaurant.name} required/>
          <br/>
          <br/>
          <label>Slogan</label>
          <input onChange={handleChange} type="text" name="slogan" value={restaurant.slogan} required/>
          <br/>
          <br/>
          <input type="submit" value="Add Restaurant!" />
      </form>
    </div>
  )
}

export default RestaurantForm
