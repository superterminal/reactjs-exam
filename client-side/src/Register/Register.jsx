import React from 'react';
import './Register.css';

import * as yup from 'yup';

class Register extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            rePassword: '',
            usernameErr: '',
            passwordErr: '',
            rePasswordErr: '',
            message: '',
            isValid: false
        };
    }
    
    handleUsername = event => {
        this.setState({ username: event.target.value }, () => {
            this.validateUsername();
        });
    };

    handlePassword = event => {
        this.setState({ password: event.target.value }, () => {
            this.validatePassword();
        });
    };

    handleRepeatPassword = event => {
        this.setState({ rePassword: event.target.value }, () => {
            this.validateRePassword();
        });
    }
    
    validateUsername = () => {
        const { username } = this.state;
        return schema.fields['username'].validate(username, { abortEarly: false })
            .then(res => {
                this.setState({ usernameErr: ''})
            })
            .catch(err => {
                this.setState({ usernameErr: err.errors[0]})
            });
    }
    
    validatePassword = () => {
        const { password } = this.state;
        return schema.fields['password'].validate(password, { abortEarly: false })
            .then(res => {
                this.setState({ passwordErr: ''})
            })
            .catch(err => {
                this.setState({ passwordErr: err.errors[0]})
            });
    }

    validateRePassword = () => {
        const { password, rePassword } = this.state;

        if (password !== rePassword) {
            this.setState({ rePasswordErr: 'Password mismatch'})
            return;
        } else {
            this.setState({ rePasswordErr: ''})
        }

        return schema.fields['rePassword'].validate(rePassword, { abortEarly: false })
            .then(res => {
                this.setState({ rePasswordErr: ''})
            })
            .catch(err => {
                this.setState({ rePasswordErr: err.errors[0]})
            });
    }

    onSubmit = e => {
        e.preventDefault();
        const { usernameErr, passwordErr, rePasswordErr } = this.state;
        const isValid = !usernameErr && !passwordErr && !rePasswordErr;
        
        if (isValid) {
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
                    this.setState({ message: 'User alredy exists! '});
                }
            }).catch(err => {
                console.log(err);
                alert('Error with registration please try again later');
            })
        }
    }


    render() {
        return (
            <div className="text-center">
                <form className="form-signin" onSubmit={this.onSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Register here!</h1>
                    {this.state.usernameErr}
                    {this.state.message !== '' ? <p>{this.state.message}</p> : null}
                    <label htmlFor="inputEmail" className="sr-only">Username</label>
                    <input 
                        type="text"
                        name="username" 
                        className="form-control" 
                        placeholder="Username" 
                        onChange={this.handleUsername}
                        onBlur={this.validateUsername}
                        required
                        autoFocus />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    {this.state.passwordErr}
                    <input 
                        type="password" 
                        name="password"
                        className="form-control" 
                        placeholder="Password" 
                        onChange={this.handlePassword}
                        onBlur={this.validatePassword}
                        required
                         />
                    <label htmlFor="inputRepeatPassword" className="sr-only">Repeat password</label>
                    {this.state.rePasswordErr}
                    <input 
                        type="password" 
                        name="rePassword"
                        className="form-control" 
                        placeholder="Repeat Password" 
                        onChange={this.handleRepeatPassword}
                        onBlur={this.validateRePassword}
                        required
                         />
                    <button className={!this.state.usernameErr && !this.state.passwordErr && !this.state.rePasswordErr ? "btn btn-lg btn-primary btn-block" : "btn btn-lg btn-secondary btn-block"} type="submit">Register</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
                </form>
            </div>
        );
    }
}

const schema = yup.object({
    username: yup
        .string('Username must be a string!')
        .required('Username is required')
        .min(6, 'Username should be atleast 6 chars'),
    password: yup
        .string('Password must be a string!')
        .required('Password is required')
        .min(6, 'Password should be atleast 6 chars'),
    rePassword: yup.string('Repeat Password must be a string')
        .required('Repeat password is required')
        .min(6, 'Repeat Password should be atleast 6 chars'),
});


export default Register;