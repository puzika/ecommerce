import { useState } from "react";
import { 
   signInWithGooglePopup,
   signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase";
import Input from "../input/input.component";
import Button, { ButtonStyleTypes } from "../button/button.component";
import { SignInHeadingStyles, SignInSubheadingStyles, SignInFormStyles, SignInButtons } from "./sign-in-form.styles";

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

   async function handleSubmit(e) {
      e.preventDefault();

      try {
         await signInAuthUserWithEmailAndPassword(email, password);
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
      <div>
         <SignInHeadingStyles>Already have an account?</SignInHeadingStyles>
         <SignInSubheadingStyles>Sign in with your email and password</SignInSubheadingStyles>

         <SignInFormStyles onSubmit={handleSubmit}>
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
            <SignInButtons className="sign-in__btns">
               <Button text={'Sign in'}></Button>
               <span>or</span>
               <Button onClick={signInWithGooglePopup} type='button' styleType={ButtonStyleTypes.google} text={'Sign in with Google'}></Button>
            </SignInButtons>
         </SignInFormStyles>
      </div>
   )
}