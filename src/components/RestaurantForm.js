import React from 'react'

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
