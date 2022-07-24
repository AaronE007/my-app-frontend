import React, {useState, useEffect} from "react";
import MealList from '../components/MealList';


const MealContainer = () => {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/meals")
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
