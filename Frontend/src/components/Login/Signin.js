import React from 'react';
import { FormControl, InputLabel, FormHelperText } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Button from '@material-ui/core/Button'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import './Signin.css'
import firebase from 'firebase';
import { auth } from '../../firebase/firebase.utils';
import { withRouter } from 'react-router-dom';



class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        const { history } = this.props;
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password)
            var user = firebase.auth().currentUser;
    
            if (user != null) {
                this.setState({email:'',password:''});
                history.push('/home')
            }
            else {
                history.push('/');
            }
        } catch (error) {
            console.log(error);
        }

    };





    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    render() {
        const { history } = this.props;
        var uiConfig = {
            signInFlow: "popup",
            signInSuccessUrl: '/home',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,

                firebase.auth.GithubAuthProvider.PROVIDER_ID
            ],
            tosUrl: '<your-tos-url>',
            // Privacy policy url.
            privacyPolicyUrl: '<your-privacy-policy-url>'
        };
        const { email, password } = this.state;
        return (
            <div>
                <div className="main-body">
                <div className="container d-flex mt-5">
                    <div className="container mt-5 pb-5">
                        <h2 className="">
                            Introduction a free and secure <br></br>video
                            calling service accessible <br></br> for all
                        </h2>
                        <p className="">
                            for more information, visit{" "}
                            <a
                                className="text-success"
                                href={"https://www.pclubuiet.com/"}
                            >
                                PClub
                            </a>
                        </p>
                    </div>
        
                    <div className="card w-50 mb-5">
                        <div className="card-header bg-success">
                            <h3 className="text-center">Sign In</h3>
                        </div>
                        <div className="card-body ">
                        <form onSubmit={this.handleSubmit}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-user" />
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                        name='email'
                                        type="email"
    
                                        onChange={this.handleChange}
                                        value={email}
                                    />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-key" />
                                        </span>
                                    </div>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="password"
                                        name='password'
                                        value={password}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="row align-items-center remember ml-3">
                                   <p className ="mt-3"> <input type="checkbox"/>
                                    &nbsp;&nbsp;&nbsp;Remember Me</p>
                                </div>
                                <button type="submit" className="btn float-right btn-success">
                                    Login
                                </button>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Don't have an account? &nbsp;
                                <a className="text-success" href={"/signup"}>
                                    Sign Up
                                </a>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a className="text-success" href="#">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
                    
                      
                    </div>
                    </div>
                </div>
            </div>
        
        );
    }
}
export default withRouter(Signin);
