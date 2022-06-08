import "./Navbar.css";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../hooks/useThemeContext";

export default function Navbar() {
    const { color } = useThemeContext()

    return (
        <div className="navbar" style={{ background: color }}>
            <nav>
                <Link to="/" className="brand">
                    <h5>Go Home</h5>
                </Link>
                <Link to="/create">
                    <h5>Create Recipe</h5>
                </Link>
            </nav>
        </div>
    )
}
