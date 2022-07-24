import React, {useState, useEffect} from "react";
import MealList from '../components/MealList';


const MealContainer = () => {
  const [meals, setMeals] = useState([])

  function handleDeleteClick(id) {
    fetch(`Url`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const updatedMeals = meals.filter((meal) => meal.id !== id);
        setMeals(updatedMeals);
      });
  }

  
  


  return (
    <div>
      <MealList meals={meals} handleDeleteClick={handleDeleteClick} />
    </div>
  )
}

export default MealContainer