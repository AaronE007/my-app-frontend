import React from 'react'
import React, {useState, useEffect} from "react";

const RestaurantContainer = () => {
  const [restaurants, setrestaurants] = useState([])

  useEffect(() => {
    fetch("Url")
      .then((r) => r.json())
      .then(setrestaurants);
  }, []);
  
  
  
  return (
    <div>
      <RestaurantList restaurants={restaurants} />
      
    </div>
  )
}
export default RestaurantContainer
