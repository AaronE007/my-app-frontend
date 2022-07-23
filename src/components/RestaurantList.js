import React from 'react'
import RestaurantCard from './RestaurantCard'

const RestaurantList = ({restaurants}) => {

  const renderRestaurants = restaurants.map(restaurant => <RestaurantCard key={restaurant.id} restaurant={restaurant})
  return (
    <div>

      
    </div>
  )
}

export default RestaurantList
