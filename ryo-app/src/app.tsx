import { useState } from 'preact/hooks';
// @ts-ignore

import { theCity } from '../lib/city';
export function data() {
    const city = theCity();
    return city
}
export default function App({ data: city }: { data: { name: string } }) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>My App: {city.name}</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}