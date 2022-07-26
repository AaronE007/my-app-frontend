import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip';

const MealCard = ({meal, onDeleteClick, onUpdateMeal}) => {

  const {id, name, calories} = meal

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

  // function onCalChange(e) {
  //   e.preventDefault()
  //   if (e.key === 'Enter') {
  //     onUpdateMeal(id, e.target.value)
  //   }
  // }

  // const body = <div style={{margin: "auto", border: "solid", backgroundColor: "blue", height: 800, width: 800, color: "gold"}}>
  //   <button onClick={handleDeleteClick}>Delete</button>
  //   <h3>Name: {name}</h3>
  //   <br/>
  //   <h4>Calories: {calories}</h4>
  //   <label>Update Portion Size</label>
  //   <input onChange={onCalChange} type="number" name="caloriesForm" />
  //   <br/>
  //   <h4>Main Ingredient: {meal.mainIngredient}</h4>
  //   <br/>
  //   <h4>Country of Origin: {meal.countryOfOrigin}</h4>
  //   <br/>
  //   <h4>Eaten at: {meal.restaurant?.name}</h4>
  //   </div>
    
    


    //let isEditing = false

    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div style={{margin: "auto", border: "solid", backgroundColor: "blue", height: 800, width: 800, color: "gold"}}>
      <button onClick={handleDeleteClick}>Delete</button>
      <h3>Name: {name}</h3>
      <br/>
      <h4>Calories: {calories}</h4>
      <br/>
      <h4>Main Ingredient: {meal.main_ingredient}</h4>
      <br/>
      <h4>Country of Origin: {meal.country_of_origin}</h4>
      <br/>

      <br/>
         <button onClick={handleClick}>Click to Update Meal</button>
      </div>
  
        <div style={{margin: "auto", border: "solid", backgroundColor: "gold", height: 800, width: 800, color: "blue"}}>
         
          <button onClick={handleClick}>Click to Return to Updated Meal</button>
        </div>
      </ReactCardFlip>
    ) 
  }

export default MealCard
