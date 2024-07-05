import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserWithDocFromAuth } from "../../utils/firebase";

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
         const userDocRef = await createUserWithDocFromAuth({...user, displayName});
         resetFormFields();
      } catch (error) {
         if (error.code === 'auth/email-already-in-use') {
            alert('Cannot create user, email already in use');
         } else {
            console.log('user creation encountered an error', error);
         }
      }
   }

   console.log(formFields);
   
   return (
      <div>
         <h2>Sign up with your email and password</h2>

         <form onSubmit={handleSubmit} action="">
            <label htmlFor="">
               <span>Name</span>
               <input type="text" required onChange={handleChange} name="displayName" value={displayName}/>
            </label>
            <label htmlFor="">
               <span>Email</span>
               <input type="email" required onChange={handleChange} name="email" value={email}/>
            </label>
            <label htmlFor="">
               <span>Password</span>
               <input type="password" required onChange={handleChange} name="password" value={password}/>
            </label>
            <label htmlFor="">
               <span>Confirm password</span>
               <input type="password" required onChange={handleChange} name="confirmpassword" value={confirmpassword}/>
            </label>
            <button type="submit">Sign up</button>
         </form>
      </div>
   )
}