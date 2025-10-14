import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { jwtDecode } from "jwt-decode";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Check for existing token on mount
    const storedToken = localStorage.getItem("auth_token");
    if (storedToken) {
      try {
        const decoded: any = jwtDecode(storedToken);
        // Check if token is expired
        if (decoded.exp && decoded.exp * 1000 > Date.now()) {
          setToken(storedToken);
          setUser({
            id: decoded.user_id || decoded.sub,
            name: decoded.name || "",
            email: decoded.email || "",
          });
        } else {
          // Token expired, clear it
          localStorage.removeItem("auth_token");
        }
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("auth_token");
      }
    }
  }, []);

  const login = (newToken: string) => {
    try {
      const decoded: any = jwtDecode(newToken);
      localStorage.setItem("auth_token", newToken);
      setToken(newToken);
      setUser({
        id: decoded.user_id || decoded.sub,
        name: decoded.name || "",
        email: decoded.email || "",
      });
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated: !!token && !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
