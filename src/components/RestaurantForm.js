import React from 'react'
import {useState} from "react"
import {useHistory} from "react-router-dom"


const RestaurantForm = () => {
  const history = useHistory()
  const [restaurant, setRestaurant] = useState({
    name: "",
    slogan: "",
  })

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

    fetch("url", {
      method: "Post",
      headers: {
        "Content_Type": "app"
      },
      body: JSON.stringify(newRestaurant)
    })
      .then(() => history.push("/restaurants"))
  }

  return (
    <div>
      <h2>Add Restaurant Here</h2>
      <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input onChange={handleChange} type="text" name="name" value={restaurant.name} required/>
          <br/>
          <label>Slogan</label>
          <input onChange={handleChange} type="text" name="slogan" value={restaurant.slogan} required/>
      </form>
    </div>
  )
}

export default RestaurantForm
