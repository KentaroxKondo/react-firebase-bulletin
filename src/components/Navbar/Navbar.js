import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ isAuth }) => {
    return (
        <nav>
            <Link to="/">
                <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                ホーム
            </Link>

            {!isAuth ?
                <Link to="/login">
                    <FontAwesomeIcon icon={faArrowRightToBracket}></FontAwesomeIcon>
                    ログイン
                </Link>
                : <>
                    <Link to="/create-post">
                        <FontAwesomeIcon icon={faFilePen}></FontAwesomeIcon>
                        記事投稿
                    </Link>
                    <Link to="/logout">
                        <FontAwesomeIcon icon={faArrowRightToBracket}></FontAwesomeIcon>
                        ログアウト
                    </Link>
                </>
            }
        </nav>
    )
}

export default Navbar