import { useState } from "react";

export function Radiobutton() {
    const [gender, setGender] = useState<string>('');
    const [state, setState] = useState<string>('');
    return (
        <div>
            <h1>Radiobutton</h1>
            <input type="radio" name="gender" id="male" value={"male"} onChange={(e) => setGender(e.target.value)} />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value={"female"} onChange={(e) => setGender(e.target.value)} />
            <label htmlFor="female">Female</label>
            <h2>Gender: {gender}</h2>
            <button onClick={() => setGender('')}>Reset</button>
            <br />
            <h1>Select State</h1>
            <select onChange={(e) => setState(e.target.value)}>
                <option value="">Select State</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Maharashtra">Bhopal</option>
                <option value="Tamil Nadu">Chennai</option>
            </select>
            <h3>Selected State: {state}</h3>
            <button onClick={() => setState('')}>Reset</button>
        </div>
    )
}