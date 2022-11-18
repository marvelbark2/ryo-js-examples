
import { users } from "@lib/users";

export const get = ({ params }: any) => {
    const { id } = params;
    const user = users.find((user) => user.id === id);
    if (user) {
        return {
            body: user,
        };
    } else {
        return {
            status: 404,
            body: {
                message: 'Not found',
            },
        };
    }
}