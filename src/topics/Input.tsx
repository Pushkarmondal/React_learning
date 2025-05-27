import { useState } from "react";

export function Input() {
    const [clear, setClear] = useState('');
    return (
        <div>
            <input 
            type="text" 
            value={clear} 
            onChange={(e) => setClear(e.target.value)} 
            placeholder="Enter your name"></input>
            <button onClick={() => setClear('')}>Submit</button>
        </div>
    )
}