export function get({ params }) {
    const { id } = params;
    return {
        body: `Hello ${id}`
    };
}