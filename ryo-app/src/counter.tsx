import { useState, useEffect } from 'preact/hooks';

let count = 0;
export const data = {
    invalidate: 1,
    shouldUpdate: (_old: number, newValue: number) => newValue > 10,
    runner: async (stop: () => void) => {
        if (count === 60) {
            stop();
        }
        return count++;
    }
}
export function Parent({ children }: any) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Parent Mounted');
    }, [])
    return (
        <div>
            <h1 onClick={() => setCount(c => c + 1)}>Parent: {count}</h1>
            {children}
        </div>
    )
}
const Alert = ({ count }: { count: number }) => {
    return (
        <div
            className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-rose-500"
        >
            <span className="inline-block align-middle mr-8">
                {
                    count > 0 ? (
                        <span><b className="capitalize">{count}!</b> This count loaded from ws.</span>
                    ) : (
                        <span><b className="capitalize">Loading...</b></span>
                    )
                }
            </span>
        </div>
    );
};
export default function index({ data }: { data: number }) {
    return (
        <Alert count={data} />
    )
}