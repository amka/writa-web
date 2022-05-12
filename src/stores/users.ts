import { defineStore } from 'pinia';
import { useAuth } from './auth';
import User from 'src/models/User';
import ky from 'ky';
import { LoginResponse, RegisterResponse, UserResponse } from 'src/interfaces/auth';

const authStore = useAuth();

export const useUsers = defineStore('users-store', {
  state: () => ({
    user: null as User | null,
    fetching: false,
  }),
  actions: {
    async login(email: string, password: string): Promise<boolean> {

      this.fetching = true;

      try {
        const { token } = await ky.post('/api/auth/login', { json: { email, password } }).json<LoginResponse>();
        authStore.setTokens(token.token);
        // this.user = user;
      } catch (err) {
        this.user = null;
        authStore.resetTokens();

        console.error('Error logging in:', err);
        return false;
      }

      this.fetching = false;
      return true;
    },

    /**
     * Register a new user
     *
     * @param email
     * @param password
     */
    async register(email: string, password: string) {
      this.fetching = true;

      try {
        const { token, user } = await ky.post('/api/auth/register', { json: { email, password }, }).json<RegisterResponse>();
        authStore.setTokens(token.token)
        this.user = user;
      } catch (err) {
        this.user = null;
        authStore.resetTokens();

        console.error('Error register:', err);
        return err;
      }

      this.fetching = false;
    },

    async me() {
      this.fetching = true;

      try {
        const { user } = await ky.get('/api/users/me', { headers: { authorization: `Bearer ${authStore.accessToken}` } }).json<UserResponse>();
        this.user = user;
      } catch (err) {
        this.user = null;

        console.error('Error register:', err);
        return err;
      }

      this.fetching = false;
    },

    logout() {
      this.user = null;
      authStore.resetTokens();
    },
  },
});
