let i = 0;
export default {
    invalidate: 1000,
    runner: async () => {
        return { message: "Hello World, I'm response n: " + (++i) };
    }
}