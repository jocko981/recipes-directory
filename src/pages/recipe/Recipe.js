import { useParams } from "react-router-dom";
// style
import "./Recipe.css";
// hooks
import { useDocument } from "../../hooks/useDocument";
// context
import { useThemeContext } from "../../hooks/useThemeContext";

export default function Recipe() {
    const { id } = useParams()
    const { document: recipe, isPending, error } = useDocument("recipes", id)
    const { mode } = useThemeContext()

    return (
        <article className={`recipe ${mode}`}>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {recipe && (
                <>
                    <h2 className="page-title">{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to make.</p>
                    <ul>
                        {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                    </ul>
                    <p className="method">{recipe.method}</p>
                </>
            )}
        </article>
    )
}
