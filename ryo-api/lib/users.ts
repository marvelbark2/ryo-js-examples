interface User {
    id: string;
    name: string;
}

export function userById(id: string): User {
    return {
        id,
        name: 'Ryo',
    };
}