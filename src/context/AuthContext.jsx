import { createContext, useContext, useState, useEffect } from "react";
import supabase from "../supabase-client"; 

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [session, setSession] = useState(undefined)

  useEffect(() => {
  async function getInitialSession() {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        throw error;
      }

      console.log(data.session);
      setSession(data.session);
    } catch (error) {
      console.error('Error getting session:', error.message);
    }
  }
  getInitialSession()

  }, []);

    return (
        <AuthContext.Provider value={{ session}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
}