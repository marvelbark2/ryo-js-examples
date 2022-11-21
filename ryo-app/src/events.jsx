import eventSignal from "ryo.js/event-signal";
import { useState, useEffect } from "react";

export default function Events() {
    const data = eventSignal("./event.ev")
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Events rendered');
    }, [])
    return (
        <div>
            <div>
                <span onClick={() => setCount((a) => a + 1)}>C: {count}</span>
            </div>
            <span>Receive From event stream: {data}</span>
        </div>
    )
}