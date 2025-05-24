import { useState } from "react";

export function Toggle() {
    const [display, setDisplay] = useState(true);
    const [darkTheme, setDarkTheme] = useState(false);

    const containerStyle = {
        backgroundColor: darkTheme ? "#121212" : "#ffffff",
        color: darkTheme ? "#ffffff" : "#000000",
        minHeight: "100vh",
        padding: "20px",
        transition: "all 0.4s ease"
    };

    return (
        <div style={containerStyle}>
            <button onClick={() => setDisplay(!display)} style={{ marginRight: "10px" }}>Toggle</button>
            {
                display ? <h1>Pushkar Mondal</h1> : <h1>No name present!</h1>
            }
            <button onClick={() => setDarkTheme(!darkTheme)} style={{ marginTop: "10px" }}>Toggle Theme</button>
        </div>
    )
}