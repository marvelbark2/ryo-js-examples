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
export default function index({ data }: { data: number }) {
    return (
        <div>
            <p>
                COUNTING... {data}
            </p>
        </div>
    )
}