// Define the User model
export interface User {
    id: string;
    firstName: string;
    lastName?: string;
    email: string;
    role: "farmer" | "buyer" | "admin"; // extend as needed
}

// Define the UserSlice state
export interface UserState {
    user: User | null;
    accessToken: string | null;
    isAuthenticated: boolean;
}
