import React from "react";
import {Route, Switch} from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import {auth, createUserProfileDocument} from "./firebase/firebase.util";
import HomePage from "./pages/home-page/homepage";
import ShopPage from "./pages/shop/shop-page/shop-page";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page";
import {onSnapshot} from "firebase/firestore";

class App extends React.Component {
    state = {
        currentUser: null,
    };
    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)
                onSnapshot(userRef, (snapShot) => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    });
                });
            } else {
                this.setState({currentUser: userAuth})
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/shop" component={ShopPage}/>
                    <Route exact path="/signin" component={SignInAndSignUpPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
