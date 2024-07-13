import { initializeApp } from "firebase/app";
import {
   getAuth,
   onAuthStateChanged,
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
   setDoc,
   collection,
   writeBatch,
   getDocs,
   query
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

export async function addCollectionAndItem(collectionKey, objectsToAdd) {
   const collectionRef = collection(db, collectionKey);
   const batch = writeBatch(db);

   objectsToAdd.forEach(obj => {
      const docRef = doc(collectionRef, obj.title.toLowerCase());
      batch.set(docRef, obj);
   });

   await batch.commit();
   console.log('done');
}

export async function getCategoriesAndDocuments() {
   const collectionRef = collection(db, 'categories');
   const q = query(collectionRef);
   const querySnapshots = await getDocs(q);

   const categories = querySnapshots.docs.reduce((acc, snapshot) => {
      const { title, items } = snapshot.data();
      acc.set(title, items);
      return acc;
   }, new Map());

   return categories;
}

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

export function onAuthStateChangedEvent(callback) {
   return onAuthStateChanged(auth, callback);
}