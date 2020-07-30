import React from 'react';
import './../styles/Headerstyles.css';
import logo from './../images/logoWhite.png';

export default class Header extends React.Component
{
    render()
    {
        return(
            <div>
            <div className="header-wrapper">
            <div class="upper-col">
                <div class="logo">
                    <div class = "logo-img">
                        <img src={logo}/>
                    </div>
                    <div class = "profile">
                        <div class = "profile-name">Hello Gokulgv </div>
                        <div class = "profile-img"></div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}