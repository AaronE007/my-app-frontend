// import React, { useState } from "react";

// function EditMeal({ id, handleUpdateMeal }) {
//   const [mealBody, setMealBody] = useState({
//     name: "",
//     calories: "",
//     mainIngredient: "",
//     countryOfOrigin: "",
//     restaurant: ""
//   });

//   function handleFormSubmit(e) {
//     e.preventDefault();

//     fetch(`http://localhost:9292/meals/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         body: mealBody,
//       }),
//     })
//       .then((r) => r.json())
//       .then((updatedMeal) => handleUpdateMeal(updatedMeal));
//   }

//   return (
//     <form onSubmit={handleFormSubmit}>
//           <label>Name</label>
//           <input onChange={(e) => setMealBody(e.target.value)} type="text" name="name" value={meal.name} required/>
//           <br/>
//           <br/>

//           <label>Calories</label>
//           <input onChange={(e) => setMealBody(e.target.value)} type="number" name="calories" value={meal.calories} required/>
//           <br/>
//           <br/>

//           <label>Main Ingredient</label>
//           <input onChange={(e) => setMealBody(e.target.value)} type="text" name="mainIngredient" value={meal.mainIngredient} required/>
//           <br/>
//           <br/>

//           <label>Country of Origin</label>
//           <input onChange={(e) => setMealBody(e.target.value)} type="text" name="countryOfOrigin" value={meal.countryOfOrigin} required/>
//           <br/>
//           <br/>

//           <label>Restaurant</label>
//           <input onChange={(e) => setMealBody(e.target.value)} type="text" name="restaurant" value={meal.restaurant} required/>
//           <br/>
//           <input type="submit" value="Add a Meal!" />
//    </form>
//   );
// }

// export default EditMeal;
