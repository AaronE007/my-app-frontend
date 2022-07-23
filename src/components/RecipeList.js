import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeList = ({meals}) => {

  const renderMeals = meals.map(meals => <RecipeCard key={meals.id} meal={meal}/>)
  return (
    <div>
      {renderMeals}
    </div>
  )
}

export default RecipeList
