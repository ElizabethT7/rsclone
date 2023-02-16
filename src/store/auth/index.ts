import {
  createSlice
} from '@reduxjs/toolkit';
import api from '../../api';
import { LSKey } from '../../helpers/ls';

export interface AuthState {
  user: User;
  jwt: string;
  userId: string;
  // state:pending/loaded
}

enum Theme {
  SYSTEM = 'system',
  LIGHT = 'light',
  DARK = 'dark',
}

interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  backgroundColor?: string;
  theme: Theme;
}

export const getJWTFromStorage = (): string => {
  return localStorage.getItem(LSKey.JWT) || '';
}

export const getUserIdFromStorage = (): string => {
  return localStorage.getItem(LSKey.USER_ID) || '';
};
// what data get from server - user & jwt
const initialState: AuthState = {
  jwt: '',
  userId: '',
  user: {} as User,
};

// https://redux-toolkit.js.org/tutorials/typescript
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, { payload }) {
      state.jwt = payload.jwt;
      localStorage.setItem(LSKey.JWT, payload.jwt);
      api.setJwt(payload.jwt);

      state.userId = payload.userId;
      localStorage.setItem(LSKey.USER_ID, payload.userId);
    },
    setUser(state, { payload }) {
      state.jwt = payload.jwt;
      state.user = payload.user;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;