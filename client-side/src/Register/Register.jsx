import React from 'react';
import './Register.css';

function Register() { 
    return (
        <div className="text-center">
            <form className="form-signin">
                <img className="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Register here!</h1>
                <label for="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <label for="inputRepeatPassword" className="sr-only">Repeat password</label>
                <input type="password" id="inputRepeatPassword" className="form-control" placeholder="Repeat Password" required />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
            </form>
        </div>
    );
    
}

export default Register;