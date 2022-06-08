import { createContext, useReducer } from "react";

export const ThemeContext = createContext()

const themeContextReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_THEME_COLOR":
            return { ...state, color: action.payload }
        case "CHANGE_THEME_MODE":
            return { ...state, mode: action.payload }

        default:
            return state
    }

}

export function ThemeContextProvider({ children }) {
    const [state, dispatch] = useReducer(themeContextReducer, {
        color: "#860dd3",
        mode: "light"
    })

    // actions
    const changeThemeColor = (color) => {
        dispatch({ type: "CHANGE_THEME_COLOR", payload: color })
    }
    const changeThemeMode = (mode) => {
        dispatch({ type: "CHANGE_THEME_MODE", payload: mode })
    }

    return (
        <ThemeContext.Provider value={{ ...state, changeThemeColor, changeThemeMode }}>
            {children}
        </ThemeContext.Provider>
    )
}