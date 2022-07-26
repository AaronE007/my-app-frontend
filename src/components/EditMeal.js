import React, { useState } from "react";

function EditMeal({ id, body, handleUpdateMeal }) {
  const [mealBody, setMealBody] = useState(body);

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/meals/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: mealBody,
      }),
    })
      .then((r) => r.json())
      .then((updatedMeal) => handleUpdateMeal(updatedMeal));
  }

  return (
    <form className="edit-meal" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="body"
        autoComplete="off"
        value={mealBody}
        onChange={(e) => setMealBody(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditMeal;
