import { useState } from "react";

export function Counter() {
  const[count, setCount] = useState(0);
  return (
    <>
    <h1>Total clicked of button is &gt; {count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}
export default function Counter1() {
    const[count, setCount] = useState(0);
    return (
        <>
        <h1>Total clicked of button is &gt; {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}

export function App1(props: {a: number, b: number}) {
  return (
    <>
    <h1>{props.a + props.b}</h1>
    </>
  )
}