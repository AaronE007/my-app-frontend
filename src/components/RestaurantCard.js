import React from 'react'

const RestaurantCard = ({restaurant}) => {
  return (
    <div>
      <h3>Name: {restaurant.name}</h3>
      <h4>Slogan {restaurant.slogan}</h4>
    </div>
  )
}

export default RestaurantCard
