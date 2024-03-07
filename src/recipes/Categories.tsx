import { useState, useEffect } from "react";
import { getCategories } from "../services/apiFacade";
import { Link } from "react-router-dom";
import { useAuth } from "../security/AuthProvider";

export const Categories = () => {
  const [categories, setCategories] = useState<Array<string>>();
  useEffect(() => {
    getCategories().then((res) => setCategories(res));
  }, []);
  const auth = useAuth();

  return (
    <>
      <h2>Categories</h2>
      <p>Browse recipes by category.</p>

      <ul>
        {categories?.map((category) => (
          <li key={category}>
            <Link to={`/recipes?category=${category}`}>{category}</Link>
            {auth.isLoggedIn() && (
          <p>
            <Link className="recipe-btn" to="/addCategory" state={category}>Edit </Link>
          </p>
          )}
          </li>
        ))}
      </ul>
    </>
  );
};

export const Desktops = () => <h3>Desktop PC Page</h3>;
export const Laptops = () => <h3>Laptops Page</h3>;
