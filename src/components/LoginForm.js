import React from 'react';
import '../styles/loginFormStyles.css';

import logo from './../images/logo.png';

import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

class LoginForm extends React.Component{

    constructor() {
        super();

        this.state = {
            username : "Gokul",
            password: '123'
        }
    }

    name = "Gokul";

    render(){
        return (
            <div class="form-wrap">
                <h1>Hello {this.name}</h1>
                <div class="logo-wrap">
                    <img src = {logo} />
                </div>
                <div class="form-container">
                    <form>
                    <h2>Sign In</h2>
                    <div class="input-wrap">
                        <CustomInput  
                            type = "text" 
                            placeholder = "Username" 
                            value = {this.state.username}
                            onChange = {
                                (value) => {
                                    this.setState({
                                        username : value
                                    })
                                }
                            }
                        />
                    </div>
                    <div class="input-wrap">
                        <CustomInput 
                            type = "password"  
                            placeholder = "Password" 
                            value = {this.state.password} 
                            onChange = {
                                (value) => {
                                    this.setState({
                                        password : value
                                    })
                                }
                            }
                        />
                    </div>
                    <div class="input-wrap">
                        <CustomButton />
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;