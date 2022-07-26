import React, {useState, useEffect} from "react";
import MealList from '../components/MealList';


const MealContainer = () => {
  const [meals, setMeals] = useState([])

  function onDeleteClick(id) {
    const updatedMeals = meals.filter((meal) => meal.id !== id);
    setMeals(updatedMeals);
  }

  function handleUpdatemeal(updatedMeal) {
    const updatedMeal = messages.map((message) => {
      if (message.id === updatedMessageObj.id) {
        return updatedMessageObj;
      } else {
        return message;
      }
    });
    setMessages(updatedMessages);
  }

  useEffect(() => {
    fetch("http://localhost:9292/meals")
    .then((r) => r.json())
    .then(setMeals);
  }, []);
      


  return (
    <div>
      <MealList meals={meals} onDeleteClick={onDeleteClick}  onUpdateMeal={onUpdateMeal}/>
    </div>
  )
}

export default MealContainer
