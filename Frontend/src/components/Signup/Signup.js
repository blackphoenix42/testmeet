import React from 'react';

import './Signup.css'
import '../Login/Signin.css'
import '../Login/Signin'
import { auth,createUserProfileDocument } from '../../firebase/firebase.utils';
import { withRouter } from 'react-router-dom';
class Signup extends React.Component{
constructor(){
    super();
    this.state={
        displayName:'',
        email:'',
        password:'',
        confirmPassword:'',
    }
}
handleSubmit=async event=>{
    event.preventDefault();
    const { history } = this.props;
    const {displayName,email,password,confirmPassword}=this.state;
    if(password !== confirmPassword){
        alert("password don't match");
        return;
    }
    try {

        const {user}=await auth.createUserWithEmailAndPassword(email,password);
        
        user.updateProfile({
            displayName : displayName
        })

        createUserProfileDocument(user,{displayName});
        this.setState({
            Name:'',
            email:'',
            password:'',
            confirmPassword:'',
        })
        history.push('/home');
    }
    catch(error)
    {
        console.log(error);
    }
};
handleChange=event=>{
    const {name,value}=event.target;
    this.setState({[name]:value});
};
render(){
    const {displayName,email,password,confirmPassword}=this.state;
    return (
        <div>
              <div className="container  mt-5">
                    <div class="card-signup ">
                        <div className="card-header bg-success">
                            <h3 className="text-center">Sign Up</h3>
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
                                        name='displayName'
                                        value={displayName}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-envelope" />
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name='email'
                                        value={email}
                                        onChange={this.handleChange}
                                        placeholder="Email"
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
                                        name='password'
                                        value={password}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        placeholder="Create a Password"
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
                                        name='confirmPassword'
                                        value={confirmPassword}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        placeholder="Confirm Password"
                                    />
                                </div>
                                <div className="row align-items-center remember ml-3">
                                    <p className="mt-3"><input type="checkbox" />{" "}
                                    &nbsp;&nbsp;&nbsp;Remember Me</p>
                                </div>
                                <button type="submit" className="btn float-right btn-success">
                                    Sign up
                                </button>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links pb-4">
                                Already have an account?&nbsp;
                                <a className="text-success" href={"/signin"}>
                                    Sign In
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
   
        </div>
    );
}
}

export default withRouter( Signup);
