export function data() {
    return {
        title: "My Site",
        description: "A simple"
    }
}
export default function App({ data }) {
    return (
        <div>
            <h1>My App {data.title}</h1>
        </div>
    );
}