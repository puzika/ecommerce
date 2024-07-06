import SignInForm from "../../components/sign-in form/sing-in-form";
import SignUpForm from "../../components/sign-up form/sign-up-form";
import './authentication.scss';

export default function Authentication() {
   return (
      <>
         <div className="authentication">
            <SignInForm></SignInForm>
            <SignUpForm></SignUpForm>
         </div>
      </>
   );
}