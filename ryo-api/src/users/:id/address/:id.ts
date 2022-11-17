
import { users } from "../../../../lib/users";

export const get = ({ params }: any) => {
    const { id, id1: addr } = params;

    const user = users.find((user) => user.id === id);
    if (user) {
        const address = user.addresses.find((address) => address.id === addr);
        if (address) {
            return {
                body: {
                    address
                }
            };
        } else {
            return {
                status: 404,
                body: {
                    message: `Address not found`
                }
            };
        }
    } else {
        return {
            status: 404,
            body: {
                message: 'Not found',
            },
        };
    }
}