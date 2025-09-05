// src/types/userstate.ts

export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    gender: string;
    role: string;
    profileImage?: string | null;
}

export interface UserState {
    user: User | null;
    accessToken: string | null;
    isAuthenticated: boolean;
}
