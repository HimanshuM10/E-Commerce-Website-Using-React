import React, { Component } from 'react'
import './login.css';

export default class login extends Component {
    render() {
        return (
            <div>
                <div className="login-box">
                    <h2>Login</h2>
                    <form>
                        <div className="user-box">
                            <input type="text" name="" required=""/>
                                <label>Username</label>
                        </div>
                        <div className="user-box">
                            <input type="password" name="" required=""/>
                                <label>Password</label>
                        </div>
                        <a href="/">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </a>
                    </form>
                </div>
            </div>
        )
    }
}
