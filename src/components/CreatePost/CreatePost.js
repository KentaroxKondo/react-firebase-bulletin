import React, { useEffect, useState } from 'react'
import './CreatePost.css'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../../util/firebase'
import { useNavigate } from 'react-router-dom'

const CreatePost = ({ isAuth }) => {
    const [title, setTitle] = useState();
    const [postText, setPostText] = useState();

    const navigate = useNavigate();

    const createPost = async () => {
        try {
            if (auth.currentUser) {
                await addDoc(collection(db, "posts"), {
                    title: title,
                    postsText: postText,
                    author: {
                        username: auth.currentUser.displayName,
                        id: auth.currentUser.uid,
                    }
                });

                navigate('/');
            } else {
                console.log("User not authenticated");
            }
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    useEffect(() => {
        if (!isAuth) {
            navigate('/login');
        }
    }, [])

    return (
        <div className='createPostPage'>
            <div className='postContainer'>
                <h1>記事を投稿する</h1>
                <ul className='fields'>
                    <li>
                        <h2>タイトル</h2>
                        <input
                            type='text'
                            placeholder='タイトルを入力してください。'
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </li>
                    <li>
                        <h2>投稿</h2>
                        <textarea
                            placeholder='投稿内容を入力してください。'
                            onChange={(e) => setPostText(e.target.value)}
                        />
                    </li>
                </ul>
                <button
                    className='postBtn'
                    onClick={createPost}>
                    投稿する
                </button>
            </div>
        </div>
    )
}

export default CreatePost