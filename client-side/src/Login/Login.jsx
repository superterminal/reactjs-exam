import React from 'react';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    } 


    handleChange = e => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        fetch('http://localhost:9999/api/user/login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res => {
            if(res.status === 200) {
                this.props.history.push('/');
            } else {
                const error = new Error(res.error);
                console.log(error);
                throw error;
            }
        }).catch(err => {
            console.log(err);
            alert('Error loggin in please try again!');
        })
    }

    render() {
        return (
            <div className="text-center">
                <form className="form-signin" onSubmit={this.onSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Log in here</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input 
                        name="username"
                        type="text" 
                        id="inputEmail" 
                        className="form-control" 
                        placeholder="Username"
                        onChange={this.handleChange} 
                        required 
                        autoFocus />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input 
                        name="password"
                        type="password" 
                        id="inputPassword" 
                        className="form-control" 
                        placeholder="Password"
                        onChange={this.handleChange} 
                        required />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div>
        );
    }
}

export default Login;