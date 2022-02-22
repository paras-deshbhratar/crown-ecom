import React from "react";
import SignIn from "../../components/sign-in/sign-in";
import "./sign-in-and-sign-up-page.scss";
import SignUp from "../../components/sign-up/sign-up";

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInAndSignUpPage;
