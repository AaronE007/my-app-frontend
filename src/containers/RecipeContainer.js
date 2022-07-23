import React from 'react'

const RecipeContainer = () => {
  const [meals, setmeals] = useState([])

  useEffect(() => {
    fetch("Url")
      .then((r) => r.json())
      .then(setRecipes);
  }, []);
  
  
  
  return (
    <div>

      
    </div>
  )
}

export default RecipeContainer
