import SignInForm from "../../components/sign-in form/sign-in-form.component";
import SignUpForm from "../../components/sign-up form/sign-up-form.component";
import { AuthenticationStyles } from "./authentication.styles"; './authentication.styles';

export default function Authentication() {
   return (
      <>
         <AuthenticationStyles>
            <SignInForm></SignInForm>
            <SignUpForm></SignUpForm>
         </AuthenticationStyles>
      </>
   );
}