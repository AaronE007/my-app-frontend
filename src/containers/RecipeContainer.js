import React, {useState, useEffect} from "react";
import RecipeList from '../components/RecipeList';


const MealContainer = () => {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/messages")
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
