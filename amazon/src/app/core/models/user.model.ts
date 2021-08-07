export interface User {
    uid: string;
    email: string;
    image?: string;
    displayName?: string;
    [key: string]: any
}