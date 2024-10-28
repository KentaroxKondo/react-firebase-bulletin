import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../util/firebase'
import { useNavigate } from 'react-router-dom'
import './Auth.css';

const Logout = ({ setIsAuth }) => {
    const navigate = useNavigate();
    const logout = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            navigate('/login');
        })
    }

    return (
        <div className='authContainer'>
            <p>ログアウトする</p>
            <button onClick={logout}>ログアウト</button>
        </div>
    )
}

export default Logout

