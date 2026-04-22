import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebaseService";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getUserRole } from "../services/firebaseService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRole = await getUserRole(user.uid);
        setCurrentUser(user);
        setRole(userRole);
      } else {
        setCurrentUser(null);
        setRole(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ currentUser, role, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);