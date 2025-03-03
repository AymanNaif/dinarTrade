import {AuthCredentials, AuthResponse} from '../types/auth';

const API_KEY = 'AIzaSyDhI8HY59yVVJgUAdNzkx8J0ZOwCS3dDNo';
export const login = async (
  credentials: AuthCredentials,
): Promise<AuthResponse> => {
  try {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...credentials, returnSecureToken: true}),
      },
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error.message);
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const register = async (
  credentials: AuthCredentials,
): Promise<AuthResponse> => {
  try {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...credentials, returnSecureToken: true}),
      },
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error.message);
    }
    return data;
  } catch (error) {
    throw error;
  }
};
