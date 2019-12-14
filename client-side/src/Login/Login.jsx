import React from 'react';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: ''
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
                this.props.setLoggedIn(true);
                this.props.history.push('/');
            } else {
                throw new Error(res.statusText);
            }
        }).catch(err => {
            this.setState({ error: 'Wrong username or password'})
        })
    }

    render() {
        return (
            <div className="text-center">
                {this.props.location.message ? <h2 className="error">{this.props.location.message}</h2> : ''}
                <form className="form-signin" onSubmit={this.onSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Log in here</h1>
                    {this.state.error}
                    <label htmlFor="inputEmail" className="sr-only">Username</label>
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