//@ts-ignore
import Router from "ryo.js/router";

export default function index() {
    const router = Router();

    if (router.isLoading && router.params) return <div>Loading...</div>

    return (
        <div>
            Blog id: <b>{router.params.id}</b>
        </div>
    )
}