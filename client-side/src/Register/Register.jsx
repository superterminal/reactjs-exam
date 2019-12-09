import React from 'react';
import './Register.css';

class Register extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            rePassword: ''
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
        fetch('http://localhost:9999/api/user/register', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status === 200) {
                this.props.history.push('/login');
            } else {
                const error = new Error(res.error);
                console.log(error);
                throw error;
            }
        }).catch(err => {
            console.log(err);
            alert('Error with registration please try again later');
        })
    }


    render() {
        return (
            <div className="text-center">
                <form className="form-signin" onSubmit={this.onSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Register here!</h1>
                    <label htmlFor="inputEmail" className="sr-only">Username</label>
                    <input 
                        type="text"
                        name="username" 
                        className="form-control" 
                        placeholder="Username" 
                        onChange={this.handleChange}
                        required 
                        autoFocus />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input 
                        type="password" 
                        name="password"
                        className="form-control" 
                        placeholder="Password" 
                        onChange={this.handleChange}
                        required />
                    <label htmlFor="inputRepeatPassword" className="sr-only">Repeat password</label>
                    <input 
                        type="password" 
                        name="rePassword"
                        className="form-control" 
                        placeholder="Repeat Password" 
                        onChange={this.handleChange}
                        required />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
                </form>
            </div>
        );
    }
    
    
}

export default Register;