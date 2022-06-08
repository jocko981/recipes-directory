// styles
import "./Home.css";
// hooks
import { useCollection } from "../../hooks/useCollection";
// components
import RecipeList from "../../components/recipeList/RecipeList";

export default function Home() {
    const { documents, isPending, error } = useCollection("recipes")

    return (
        <div className="home">
            <h1>Recipes Directory</h1>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {documents && <RecipeList recipes={documents} />}
        </div>
    )
}
