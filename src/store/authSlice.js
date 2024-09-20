import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null, // To store user information
    error: null, // To store error messages
  },
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload; // Set user info upon login
      state.error = null; // Clear any previous errors
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null; // Clear user info on logout
    },
    setError(state, action) {
      state.error = action.payload; // Set error message
    },
  },
});

// Export the actions
export const { login, logout, setError } = authSlice.actions;

// Selectors
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
export const selectError = (state) => state.auth.error;

// Export the reducer
export default authSlice.reducer;
