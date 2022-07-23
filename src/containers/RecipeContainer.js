import React from 'react'
import React, {useState, useEffect} from "react";


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
