interface Address {
    id: string;
    street: string;
    city: string;
}
export interface User {
    id: string;
    name: string;
    addresses: Address[];
}

export const users: User[] = [
    {
        id: '1',
        name: 'Ryo',
        addresses: [
            {
                id: '1',
                street: '123 Main St',
                city: 'New York',
            },
            {
                id: '2',
                street: '456 Main St',
                city: 'New York',
            }
        ]
    },
    {
        id: '2',
        name: 'Ryo2',
        addresses: [
            {
                id: '1',
                street: '111 cl St',
                city: 'California',
            },
            {
                id: '2',
                street: '222 cl St',
                city: 'California',
            }
        ]
    },
];

export function userById(id: string): User {
    return {
        id,
        name: 'Ryo',
        addresses: []
    };
}