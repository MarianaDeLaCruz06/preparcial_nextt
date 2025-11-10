import { create } from 'zustand';
import axios from 'axios';

interface AuthState {
  token: string | null;
  user: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,

  login: async (username, password) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/login`,
        { username, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (data.token) {
        // Guardamos el token y el usuario
        set({ token: data.token, user: username });
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', username);
        return true;
      }

      return false;
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      return false;
    }
  },

  logout: () => {
    set({ token: null, user: null });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
}));
