import React, {useState, useEffect} from "react";
import MealList from '../components/MealList';


const MealContainer = () => {
  const [meals, setMeals] = useState([])

  

  
  
  return (
    <div>
      <MealList meals={meals} />
    </div>
  )
}

export default MealContainer
