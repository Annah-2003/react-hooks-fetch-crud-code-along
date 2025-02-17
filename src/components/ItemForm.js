import React, { useState } from "react";

function ItemForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("name:", name);
    console.log("category:", category);
  }
  return (
    <form className="NewItem"> <form className="NewItem" onSubmit={handleSubmit}>
    {/** ...form inputs here */}
  </form>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
