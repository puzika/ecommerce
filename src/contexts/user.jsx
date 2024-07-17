import { createContext, useState, useEffect, useReducer } from "react";
import { createUserWithDocFromAuth, onAuthStateChangedEvent } from "../utils/firebase";

export const UserContext = createContext({
   currentUser: null,
   setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
   SET_CURRENT_USER: 'SET_CURRENT_USER',
}

function userReducer(state, action) {
   const {type, payload} = action;

   switch (type) {
      case USER_ACTION_TYPES.SET_CURRENT_USER:
         return {
            ...state,
            currentUser: payload,
         };
      default:
         throw new Error(`Unhandled type ${type} in userReducer`);
   }
}

const INITIAL_STATE = {
   currentUser: null,
}

export function UserProvider({ children }) {
   // const [currentUser, setCurrentUser] = useState(null);
   const [{currentUser}, dispatch] = useReducer(userReducer, {INITIAL_STATE});

   function setCurrentUser(user) {
      dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
   }

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