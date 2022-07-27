import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import EditMeal from './EditMeal';

const MealCard = ({meal, onDeleteClick, onUpdateMeal}) => {

  const {id} = meal

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:9292/meals/${id}`, {
      method: "DELETE",
    });

    onDeleteClick(id);
  }

    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div style={{margin: "auto", border: "solid", backgroundColor: "blue", height: 800, width: 800, color: "gold"}}>
      <button onClick={handleDeleteClick}>Delete</button>
      <h3>Name: {meal.name}</h3>
      <br/>
      <h4>Calories: {meal.calories}</h4>
      <br/>
      <h4>Main Ingredient: {meal.main_ingredient}</h4>
      <br/>
      <h4>Country of Origin: {meal.country_of_origin}</h4>
      <br/>
      <h4>Eaten at: {meal.restaurant?.name}</h4>
      <br/>
         <button onClick={handleClick}>Click to Update Meal</button>
      </div>
  
        <div style={{margin: "auto", border: "solid", backgroundColor: "gold", height: 800, width: 800, color: "blue"}}>
        <div>
          <EditMeal id={id}  meal={meal} onUpdateMeal={onUpdateMeal}/>
        </div>
        <br/>
          <button onClick={handleClick}>Click to Return to Updated Meal</button>
        </div>
      </ReactCardFlip>
    ) 
  }

export default MealCard
