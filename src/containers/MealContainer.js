import React, {useState, useEffect} from "react";
import MealList from '../components/MealList';


const MealContainer = () => {
  const [meals, setMeals] = useState([])

  function handleDeleteClick(id) {
    fetch(`http://localhost:9292`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const updatedMeals = meals.filter((meal) => meal.id !== id);
        setMeals(updatedMeals);
      });
  }

  function onUpdateMeal(id, correctedValue){
    fetch(`http://localhost:9292/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correctedValue }),
    })
    .then((r) => r.json())
    .then((updatedMeal) => {
      const updatedMeals = meals.map((meal) => {
        if (meal.id === updatedMeal.id) return updatedMeal;
        return meal;
      });
      setMeals(updatedMeals);
    });
  }

  useEffect(() => {
    fetch("http://localhost:9292/meals")
    .then((r) => r.json())
    .then(setMeals);
  }, []);
      


  return (
    <div>
      <MealList meals={meals} handleDeleteClick={handleDeleteClick}  onUpdateMeal={onUpdateMeal}/>
    </div>
  )
}

export default MealContainer
