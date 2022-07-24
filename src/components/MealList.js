import React from 'react'
import MealCard from './MealCard'

const MealList = ({meals, onDeleteClick, onUpdateMeal}) => {


  const renderMeals = meals.map(meal => <MealCard key={meals.id} meal={meal} onUpdateMeal={onUpdateMeal} onDeleteClick={onDeleteClick}/>)
  return (
    <div>
      {renderMeals}
    </div>
  )
}

export default MealList
