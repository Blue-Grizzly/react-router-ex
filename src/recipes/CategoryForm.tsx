import "./RecipeForm.css";
import { useState } from "react";
import { Category, addCategory, deleteCategory } from "../services/apiFacade";
import { useLocation } from "react-router-dom";



export default function CategoryForm() {
  const categoryToEdit = useLocation().state || null;
  const [formData, setFormData] = useState<string>(categoryToEdit || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value)
  };
  // const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   if (formData) {
  //     deleteCategory(formData);
  //     setFormData("");
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("test")
    const category: Category = {
      name: formData
    }
    const newCategory = await addCategory(category);
    alert("New category added")
    console.info("New/Edited category", newCategory);
  };

  return (
    <>
      <h2>Category Add/Edit/Delete</h2>
      <form id="recipeForm" onSubmit={(e)=>handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData}
            onChange={handleChange}
            required
          />
        </div>
      <button type="submit" className="recipe-form-btn">
        Submit
      </button>
      <button
        className="recipe-form-btn"
        onClick={() => {
          setFormData("");
        }}
        >
        Cancel
      </button>
        </form>
      {/* {formData.id && (
        <>
          <button className="recipe-form-btn" onClick={handleDelete}>
            Delete
          </button>
        </>
      )} */}

      <p>{JSON.stringify(formData)}</p>
    </>
  );
}
