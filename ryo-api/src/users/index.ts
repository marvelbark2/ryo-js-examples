import { users } from "../../lib/users";


export function get({ params }: any) {
    return {
        users
    }
}