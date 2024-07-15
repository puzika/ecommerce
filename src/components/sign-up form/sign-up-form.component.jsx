import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserWithDocFromAuth } from "../../utils/firebase";
import Input from "../input/input.component";
import Button, { ButtonStyleTypes } from "../button/button.component";
import { SignUpHeadingStyles, SignUpSubHeadingStyles, SignUpFormStyles } from "./sign-up-form.styles";

const defaultFormFields = {
   displayName: '',
   email: '',
   password: '',
   confirmpassword: '',
}

export default function SignUpForm() {
   const [formFields, setFormFields] = useState(defaultFormFields);
   const { displayName, email, password, confirmpassword } = formFields;

   function resetFormFields() {
      setFormFields(defaultFormFields);
   }

   function handleChange(event) {
      const {name, value} = event.target;

      setFormFields({...formFields, [name]: value});
   }

   async function handleSubmit(e) {
      e.preventDefault();

      if (password !== confirmpassword) {
         alert('passwords must match');
         setFormFields({...formFields, confirmpassword: ''});
         return;
      }

      try {
         const {user} = await createAuthUserWithEmailAndPassword(email, password);
         await createUserWithDocFromAuth({...user, displayName});
         resetFormFields();
      } catch (error) {
         switch (error.code) {
            case 'auth/email-already-in-use':
               alert('Cannot create user, email already in use');
               break;
            case 'auth/weak-password':
               alert('Weak passwrod. Password must be at least 6 characters');
               break;
            default:
               console.log('user creation encountered an error', error);
         }
      }
   }
   
   return (
      <div>
         <SignUpHeadingStyles>Don't have an account?</SignUpHeadingStyles>
         <SignUpSubHeadingStyles>Sign up with your email and password</SignUpSubHeadingStyles>

         <SignUpFormStyles onSubmit={handleSubmit}>
            <Input 
            label='Name' 
            inputOptions={{
               type: 'text',
               required: true,
               onChange: handleChange, 
               name: 'displayName', 
               value: displayName
            }}></Input>
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
            <Input 
            label='Confirm password' 
            inputOptions={{
               type: 'password',
               required: true,
               onChange: handleChange, 
               name: 'confirmpassword', 
               value: confirmpassword
            }}></Input>
            <Button text={'Sign up'}></Button>
         </SignUpFormStyles>
      </div>
   )
}