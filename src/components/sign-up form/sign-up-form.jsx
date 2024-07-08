import { useState, useContext } from "react";
import { createAuthUserWithEmailAndPassword, createUserWithDocFromAuth } from "../../utils/firebase";
import Input from "../input/input";
import Button from "../button/button";
import { UserContext } from "../../contexts/user";
import './sign-up-form.scss';

const defaultFormFields = {
   displayName: '',
   email: '',
   password: '',
   confirmpassword: '',
}

export default function SignUpForm() {
   const [formFields, setFormFields] = useState(defaultFormFields);
   const { displayName, email, password, confirmpassword } = formFields;
   const {setCurrentUser} = useContext(UserContext);

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
         const userDocRef = await createUserWithDocFromAuth({...user, displayName});
         setCurrentUser(user);
         resetFormFields();
      } catch (error) {
         if (error.code === 'auth/email-already-in-use') {
            alert('Cannot create user, email already in use');
         } else {
            console.log('user creation encountered an error', error);
         }
      }
   }
   
   return (
      <div className="sign-up">
         <h2 className="sign-up__heading">Don't have an account?</h2>
         <p className="sign-up__subheading">Sign up with your email and password</p>

         <form className="sign-up__form" onSubmit={handleSubmit}>
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
         </form>
      </div>
   )
}