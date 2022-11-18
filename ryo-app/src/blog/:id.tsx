//@ts-ignore
import Router from "ryo.js/router";

export default function index() {
    const router = Router();
    console.log({ router })
    if (router.isLoading && router.params) return <div>Loading...</div>
    return (
        <div>
            Blog id: {JSON.stringify(router.query)}

            <span>
                {router.params.id}
            </span>
        </div>
    )
}