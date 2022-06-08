import { Link } from "react-router-dom";
// style
import "./RecipeList.css";
// assets
import deleteForeverIcon from "../../assets/delete_forever_icon.svg";
// hooks
import { useThemeContext } from "../../hooks/useThemeContext";
import { useFirestore } from "../../hooks/useFirestore";

export default function RecipeList({ recipes }) {
    const { mode } = useThemeContext()
    const { deleteDocument } = useFirestore("recipes")

    if (recipes.lenght === 0) {
        return <div className="error">No recipes...</div>
    }

    return (
        <div className="recipe-list">
            {recipes.map(recipe => (
                <div className={`card ${mode}`} key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make.</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                    <img
                        className="delete"
                        src={deleteForeverIcon}
                        alt="delete forever icon"
                        onClick={() => deleteDocument(recipe.id)}
                    />
                </div>
            ))}
        </div>
    )
}
