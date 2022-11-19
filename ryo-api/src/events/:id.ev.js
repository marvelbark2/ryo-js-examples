export default {
    invalidate: 1000,
    runner: async ({ params }) => {
        console.log(params)
        return { message: "I'm the user: " + params.id };
    }
}