import { initializeApp } from "firebase/app";
import {
   getAuth,
   signInWithRedirect,
   signInWithPopup,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   GoogleAuthProvider
} from "firebase/auth";
import {
   getFirestore,
   doc,
   getDoc,
   setDoc
} from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyBaFLMpEdLE4cH9jTzx7_0MZPTqpzemaZ8",
   authDomain: "crown-clothing-1015b.firebaseapp.com",
   projectId: "crown-clothing-1015b",
   storageBucket: "crown-clothing-1015b.appspot.com",
   messagingSenderId: "120696207269",
   appId: "1:120696207269:web:baaaf2e8a5112b71f51a4c"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
   prompt: "select_account",
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export async function createUserWithDocFromAuth(userAuth) {
   if (!userAuth) return;

   const userDocRef = doc(db, 'users', userAuth.uid);
   const userSnapshot = await getDoc(userDocRef);

   if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createAt = new Date();

      try {
         await setDoc(userDocRef, {
            displayName,
            email,
            createAt
         });
      } catch (error) {
         console.log('error occurred while creating the user: ' + error.message);
      }
   }

   return userDocRef;
}

export async function createAuthUserWithEmailAndPassword(email, password) {
   if (!email || !password) return;

   return await createUserWithEmailAndPassword(auth, email, password);
}

export async function signInAuthUserWithEmailAndPassword(email, password) {
   if (!email || !password) return;

   return await signInWithEmailAndPassword(auth, email, password);
}

export async function signOutAuthUser() {
   return await signOut(auth);
}