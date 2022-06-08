// styles
import "./ThemeSelector.css";
// hooks
import { useThemeContext } from "../../hooks/useThemeContext";
// assets
import modeIcon from "../../assets/brightness_6_icon.svg";

const themeColors = ["#860dd3", "#249c6b", "#b70233"]

export default function ThemeSelector() {
    const { changeThemeColor, changeThemeMode, mode } = useThemeContext()

    const toggleMode = () => {
        changeThemeMode(mode === "light" ? "dark" : "light")
        console.log(mode);
    }

    return (
        <div className="theme-selector">
            <div className="mode-toggle">
                <img
                    src={modeIcon}
                    alt="dark-mode toggle icon"
                    onClick={toggleMode}
                    style={{ filter: mode === "light" ? "invert(20%)" : "invert(100%)" }}
                />
            </div>
            <div className="theme-buttons">
                {themeColors.map(color => (
                    <div
                        key={color}
                        onClick={() => changeThemeColor(color)}
                        style={{ background: color }}
                    />
                ))}
            </div>
        </div>
    )
}
