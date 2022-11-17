import { userById } from "../lib/users";

export function get() {
    const user = userById('1');
    return user;
}