import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// styles
import "./Create.css";
// hooks
import { useFirestore } from "../../hooks/useFirestore";

export default function Create() {
    const { addDocument, response } = useFirestore("recipes")
    let navigate = useNavigate()
    // form fields
    const [title, setTitle] = useState("")
    const [method, setMethod] = useState("")
    const [cookingTime, setCookingTime] = useState("")
    const [newIngredient, setNewIngredient] = useState("")
    const [ingredients, setIngredients] = useState([])
    const ingredientInputRef = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newRecipe = {
            title,
            ingredients,
            method,
            cookingTime: cookingTime + " minutes"
        }

        await addDocument(newRecipe)
        if (!response.error) {
            navigate("/")
        }
    }

    const handleAddIngredient = (e) => {
        e.preventDefault()
        const ing = newIngredient.trim()

        if (ing && !ingredients.includes(ing)) {
            setIngredients(prevIngredients => [...prevIngredients, ing])
        }
        setNewIngredient("")
        ingredientInputRef.current.focus()
    }

    return (
        <div className="create">
            <h2 className="page-title">Add new Recipe</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe title:</span>
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </label>

                <label>
                    <span>Recipe ingredients:</span>
                    <div className="ingredients">
                        <input
                            type="text"
                            onChange={(e) => setNewIngredient(e.target.value)}
                            value={newIngredient}
                            ref={ingredientInputRef}
                        />
                        <button onClick={handleAddIngredient} className="btn">add</button>
                    </div>
                </label>
                <p>Current ingredients: {ingredients.map(ing => <em key={ing}>{ing}, </em>)}</p>

                <label>
                    <span>Recipe method:</span>
                    <textarea
                        type="text"
                        onChange={(e) => setMethod(e.target.value)}
                        value={method}
                        required
                    />
                </label>

                <label>
                    <span>Cooking time (minutes):</span>
                    <input
                        type="number"
                        onChange={(e) => setCookingTime(e.target.value)}
                        value={cookingTime}
                        required
                    />
                </label>
                {response.error && <p className="error">{response.error}</p>}
                {response.isPending ? <button className="btn" disabled>Pending...</button> : <button className="btn">Submit</button>}
            </form>
        </div>
    )
}
