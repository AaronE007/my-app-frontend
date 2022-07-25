import React, {useState, useEffect} from "react";
import RestaurantList from '../components/RestaurantList';

const RestaurantContainer = () => {
  const [restaurants, setrestaurants] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/restaurants")
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
