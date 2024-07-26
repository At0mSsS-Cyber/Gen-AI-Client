import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  isGuest: boolean;
}

const initialState: AuthState = {
  isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated') || 'false'),
  isGuest: JSON.parse(localStorage.getItem('isGuest') || 'false'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state) {
      state.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', 'true');
    },
    loginGuest(state) {
      state.isGuest = true;
      localStorage.setItem('isGuest', 'true');
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem('isAuthenticated');
    },
  },
});

export const { loginSuccess, logout, loginGuest } = authSlice.actions;
export default authSlice.reducer;
