import React from 'react'
import { Link } from 'react-router-dom'


const style = {
  width: "100%",
  magrin:"25px 50px 25px",
  padding: "1em",
  color: "black",
  backgroundColor: "Gold",
  fontWeight: "600",
  verticalAlign: "center"
}

const Navbar = () => {

  return (
    <nav>
      <Link style={style} to="/">Home</Link>
      <Link style={style} to="/about">About</Link>
      <Link style={style}  to="/recipes">Recipes</Link>
      <Link style={style} to="/RecipeForm">Add Recipes Form</Link>
    </nav>
  )
}

export default Navbar