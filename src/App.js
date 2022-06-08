import { Routes, Route, BrowserRouter } from "react-router-dom";
// style
import "./App.css";
// pages
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";
// components
import Navbar from "./components/navbar/Navbar";
import ThemeSelector from "./components/themeSelector/ThemeSelector";
// context
import { useThemeContext } from "./hooks/useThemeContext";

function App() {
  const { mode } = useThemeContext()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="*" element={<h1>404 route</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
