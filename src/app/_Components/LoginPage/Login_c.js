import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

const Login = () => {
  return (
    <div>
         <div className="conatiner-fluid">
                <div className="col-7">
                </div>
          </div>
            <div className="login-container">
                <div className="login-header">
                    <div className="row text-align=center">
                        <div className="col-12">
                            <img src="himalayan_volunteer_tourism\public\HVT_Logo-Final.png"></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h6> Himalayan Volunteer Tourism</h6>
                        </div>
                    </div>
                </div>
                <div className="login-form">
                        <input type="text" id="email" placeholder="Email or Phone Number"></input>
                        <input type="password" id="password" placeholder="Password"></input>
                        <button type="submit">Log In</button>
                        <a href="#" className="forgot-password">Forgot account?</a>
                </div>
                <div className="login-footer">
                     <h5>Or login with</h5>
                </div>
                <div className="container-fluid flex">
                    <div type="submit" className="g-signin2"  data-onsuccess="onSignIn"><p>Facebook</p></div>
                    <div type="submit" className="g-signin2" data-onsuccess="onSignIn"><p>Instagram</p></div>
                    <div type="submit" className="g-signin2" data-onsuccess="onSignIn"><p>G-mail</p></div>
                </div>
            </div>
        </div> 
   
  )
}

export default Login;