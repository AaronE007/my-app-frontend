import React from 'react'
import MealCard from './MealCard'

const MealList = ({meals}) => {

  const renderMeals = meals.map(meal => <MealCard key={meals.id} meal={meal}/>)
  return (
    <div>
      {renderMeals}
    </div>
  )
}

export default MealList
