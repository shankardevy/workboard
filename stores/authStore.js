import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  token: null,

 login: (token) => {
    localStorage.setItem("token", token);  // Store token in localStorage
    set({ isAuthenticated: true, token });
  },
    
  logout: () => {
    set({ isAuthenticated: false, token: null });
    localStorage.removeItem("token");
  },
  
  initializeAuth: () => {
    const token = localStorage.getItem("token");
    if (token) {
      set({ isAuthenticated: true, token });
    }
  },
}));
