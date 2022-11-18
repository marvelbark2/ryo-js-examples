import { useState } from 'preact/hooks';
// @ts-ignore
import { theCity } from '../lib/city';

const city = theCity();
export default function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>My App: {city.name}</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}