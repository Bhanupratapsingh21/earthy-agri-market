import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "@/types/userState";

const initialState: UserState = {
    user: null,
    accessToken: null,
    isAuthenticated: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (
            state,
            action: PayloadAction<{ user: User; accessToken: string }>
        ) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.accessToken = null;
            state.isAuthenticated = false;
            localStorage.removeItem("refreshToken");
        },
    },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
