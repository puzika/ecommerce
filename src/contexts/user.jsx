import { createContext, useState, useEffect } from "react";
import { createUserWithDocFromAuth, onAuthStateChangedEvent } from "../utils/firebase";

export const UserContext = createContext({
   currentUser: null,
   setCurrentUser: () => null,
});

export function UserProvider({ children }) {
   const [currentUser, setCurrentUser] = useState(null);
   const value = { currentUser, setCurrentUser };

   useEffect(() => {
      const unsubscribe = onAuthStateChangedEvent(user => {
         if (user) createUserWithDocFromAuth(user);

         setCurrentUser(user);
      });

      return unsubscribe;
   }, []);

   return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}