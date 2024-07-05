import { signInWithGooglePopup, createUserWithDocFromAuth } from "../../utils/firebase";
import SignUpForm from "../../components/sign-up form/sign-up-form";

export default function Authentication() {
   async function logGoogleUser() {
      const {user} = await signInWithGooglePopup();
      const userDocRef = await createUserWithDocFromAuth(user);
   }
   return (
      <>
         <h1>Sign in page</h1>
         <button onClick={logGoogleUser}>Sign in with Google</button>
         <SignUpForm></SignUpForm>
      </>
   );
}