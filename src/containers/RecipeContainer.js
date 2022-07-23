import React, {useState, useEffect} from "react";
import RecipeList from '../components/RecipeList';


const RecipeContainer = () => {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    fetch("Url")
      .then((r) => r.json())
      .then(setMeals);
  }, []);
  
  
  
  return (
    <div>
      <RecipeList meals={meals} />
    </div>
  )
}

export default RecipeContainer
