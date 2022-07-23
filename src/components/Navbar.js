import React from 'react'
import { Link } from 'react-router-dom'


const style = {
  width: "100%",
  magrin:"25px 100px 25px",
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
      <Link style={style}  to="/recipes">Recipes</Link>
      <Link style={style} to="/recipes/new">Add Recipes Form</Link>
      <Link style={style}  to="/restaurants">Recipes</Link>
      <Link style={style} to="/restaurant/new">Add Restaurant Card Form</Link>
    </nav>
  )
}

export default Navbar