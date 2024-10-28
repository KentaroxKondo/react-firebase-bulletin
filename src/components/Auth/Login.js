import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../util/firebase'
import { useNavigate } from 'react-router-dom'
import './Auth.css';

const Login = ({ setIsAuth }) => {
    const navigate = useNavigate();
    const loginWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem('isAuth', true);
            setIsAuth(true);
            navigate('/');
        })
    }

    return (
        <div className='authContainer'>
            <p>ログインして始める</p>
            <button onClick={loginWithGoogle}>Googleでログイン</button>
        </div>
    )
}

export default Login