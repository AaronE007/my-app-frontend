import React, {useState, useEffect} from "react";
import RecipeList from '../components/RecipeList';


const MealContainer = () => {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    fetch("Url")
      .then((r) => r.json())
      .then(setMeals);
  }, []);
  
  
  
  return (
    <div>
      <MealList meals={meals} />
    </div>
  )
}

export default MealContainer
