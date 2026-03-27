import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { User } from './types';

type Theme = 'dark' | 'light';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  theme: Theme;
  toggleTheme: () => void;
  joinWaitlist: (email: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  
  // --- THEME LOGIC (Matches your Landing Page Brand) ---
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('campusrun_theme');
    return (saved as Theme) || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('campusrun_theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  // --- WAITLIST LOGIC (For Launching Soon) ---
  const joinWaitlist = async (email: string) => {
    console.log(`Adding ${email} to waitlist...`);
    // Simulated API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Optionally set a "fake" user session to show they are signed up
    localStorage.setItem('campusrun_waitlist_joined', 'true');
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      theme, 
      toggleTheme, 
      joinWaitlist,
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};