import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../context/AuthProvider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import axios from "axios";

// import axios from './api/axios';
const LOGIN_URL = 'http://localhost:3500/api/login';

const Login = () => {
  const {setAuth} = useContext(AuthContext)
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSucces] = useState(false);

  useEffect(() => {
    userRef.current.focus();
    toast("helloo lund");
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await axios.post(LOGIN_URL, JSON.stringify({username:user, password:pwd}),
        {
            headers :  {'Content-Type' : 'application/json'},
            // withCredentials : true,
        }
        );
        console.log(response);
        if (response.data.success){
            setSucces(true);
            setUser({user, pwd, accessToken});
            setPwd('');
            // toast("Login Successfully");
            
        }
        const accessToken = response?.data?.accessToken;
        // const roles = response?.data?.roles;
    } catch (err){
        if (!err?.response) {
            setErrMsg('No server response');
        } else if (err.response?.status === 400) {
            setErrMsg("Missing username or password");
        }else if (err.response?.status === 401) {
            setErrMsg('Unauthorized');
        }else {
            setErrMsg('Login Failed');
        }
        errRef.current.focus();
    }

   
  };

  
  
  

  return (
    <>
    
        {
            success ? (
                <section className="logged_section" >
                    <h2 className="logged_h2">You are logged in!</h2>
                    <span class="material-symbols-outlined check_style">check_circle</span>
                    <p className="logged_p">
                    <span class="material-symbols-outlined">arrow_back</span><Link to='/'><a href="/"> Go to Home</a></Link>
                    </p>
                </section>
            ) : (
                
                <main className="login_container">
                <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria_live="assertive"
                >
                    {errMsg}
                </p>
                <div className="container">
                    <div className="formDiv">
                    <form onSubmit={handleSubmit} className="container_form">
                        <h1>Login</h1>
                        <input 
                            type="text" 
                            placeholder="Email" 
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e)=> setUser(e.target.value)}
                            value={user}
                            required
                            />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            id="password"
                            onChange={(e)=> setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button className="login_button" type="submit">Login</button>
                        <div className="remember_style">
                        <div className="checkbox_remember">
                            <input type="checkbox" />
                            <label type="me">Remember me</label>
                        </div>
                        </div>
                        {/* <div className='new_netflix_style'>
                                    <p>New to Greenfit?
                                    <span><a href='google.com'>Sign up now</a></span> 
                                    </p>
                                </div> */}
                    </form>
                    </div>
                </div>
                </main>
            )
        }
        
    </>
  );
};

export default Login;
