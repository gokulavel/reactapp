import React from 'react';
import '../styles/loginPageStyles.css';
import LoginForm from '../components/LoginForm';

class LoginPage extends React.Component{
    render() {
        return (
            <div class = "wrapper">
                <div class = "img-col">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRH1l3vGdlFikcZ9HA3sQ_WyL5FG3s0e6NC0KdipW5Qg68qoK_p"
                    />
                </div>
                <div class = "form-col">
                    <LoginForm/>
                </div>
            </div>
        );
    }
}

export default LoginPage;