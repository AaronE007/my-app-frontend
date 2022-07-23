import React from 'react'

const RestaurantForm = () => {
  return (
    <div>
      <h2>Add Restaurant Here</h2>
      <form>
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
