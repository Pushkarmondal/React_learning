import { useState } from "react";

export function Checkbox() {
  const [skills, setSkills] = useState<string[]>([]);

  const onChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setSkills((prev) => [...prev, value]);
    } else {
      setSkills((prev1) => prev1.filter((skill) => skill !== value));
    }
  };

  return (
    <div>
      <h2>Checkbox</h2>

      <div>
        <input type="checkbox" value="TS" onChange={onChanged} />
        <label>TS</label>
      </div>

      <div>
        <input type="checkbox" value="JS" onChange={onChanged} />
        <label>JS</label>
      </div>

      <div>
        <input type="checkbox" value="React" onChange={onChanged} />
        <label>React</label>
      </div>
      <h3>Selected Skills:</h3>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
