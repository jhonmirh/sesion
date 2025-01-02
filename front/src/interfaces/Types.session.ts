export interface userSession {
    token: string,
    userData: {
        id: string,
        address: string,
        name: string,
        email: string,
        phone: string,
        order: [],
        role: {
            id: string,
            name: string
        }
    }
}