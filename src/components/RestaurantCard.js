import React from 'react'

const RestaurantCard = ({restaurant}) => {
  return (
    <div style={{margin: "auto", border: "solid", backgroundColor: "blue", height: 300, width: 300, color: "gold"}}>
      <h3>Name: {restaurant.name}</h3>
      <br/>
      <h4>Slogan {restaurant.slogan}</h4>
    </div>
  )
}

export default RestaurantCard
