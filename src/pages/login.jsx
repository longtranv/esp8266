import React, { useState} from "react";
import './login.css';
import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);

    const navitage = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(auth)
        signInWithEmailAndPassword(auth, email, pass)
        .then(()=>{
            navitage('/main')
        })
        .catch((error) => {
            console.log(error);
            setError(true);
          });
    }

    return (
        <div className="container">
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
                {error && <span>Wrong email or password!</span>}
            </form>
        </div>
        </div>
    )
}