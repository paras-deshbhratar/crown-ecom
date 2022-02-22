import React, {Component} from "react";
import {auth, signInWithGoogle} from "../../firebase/firebase.util";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import "./sign-in.scss";
import {signInWithEmailAndPassword} from "firebase/auth";

class SignIn extends Component {
    state = {
        email: "",
        password: "",
    };

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state
        try {
            await signInWithEmailAndPassword(auth, email, password)
            this.setState({email: '', password: ''})
        } catch (error) {
            console.error(error)
        }
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                        label="email"
                    />

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                        label="password"
                    />

                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
