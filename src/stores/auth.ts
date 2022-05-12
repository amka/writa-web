import { defineStore } from 'pinia';

export const useAuth = defineStore('auth-store', {
  state: () => ({
    accessToken: '' as string | null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.accessToken,
  },
  actions: {
    setTokens(accessToken: string) {
      this.accessToken = accessToken;
    },
    resetTokens() {
      this.accessToken = null;
    }
  },
  persist: {
    enabled: true,
  }
})
