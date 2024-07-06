import { useState } from "react";
import { 
   signInWithGooglePopup,
   signInAuthUserWithEmailAndPassword,
   createUserWithDocFromAuth,
} from "../../utils/firebase";
import Input from "../input/input";
import Button from "../button/button";
import './sign-in-form.scss';

const defaultFormFields = {
   email: '',
   password: '',
}

export default function SignInForm() {
   const [formFields, setFormFields] = useState(defaultFormFields);
   const { email, password } = formFields;

   function resetFormFields() {
      setFormFields(defaultFormFields);
   }

   function handleChange(event) {
      const {name, value} = event.target;

      setFormFields({...formFields, [name]: value});
   }

   async function signInWithGoogle() {
      const {user} = await signInWithGooglePopup();
      await createUserWithDocFromAuth(user);
   }

   async function handleSubmit(e) {
      e.preventDefault();

      try {
         const response = await signInAuthUserWithEmailAndPassword(email, password);
         resetFormFields();
      } catch (error) {
         switch(error.code) {
            case 'auth/wrong-password':
               alert('Incorrect password');
               break;
            case 'auth/user-not-found':
               alert('No user associated with this email');
               break;
            default:
               console.log(error);
         }
      }
   }
   
   return (
      <div className="sign-in">
         <h2 className="sign-in__heading">Already have an account?</h2>
         <p className="sign-in__subheading">Sign in with your email and password</p>

         <form className="sign-in__form" onSubmit={handleSubmit}>
            <Input 
            label='Email' 
            inputOptions={{
               type: 'email', 
               required: true,
               onChange: handleChange, 
               name: 'email', 
               value: email
            }}></Input>
            <Input 
            label='Password' 
            inputOptions={{
               type: 'password',
               required: true, 
               onChange: handleChange, 
               name: 'password', 
               value: password
            }}></Input>
            <div className="sign-in__btns">
               <Button text={'Sign in'}></Button>
               <span>or</span>
               <Button onClick={signInWithGoogle} type='button' styleType={'google'} text={'Sign in with Google'}></Button>
            </div>
         </form>
      </div>
   )
}