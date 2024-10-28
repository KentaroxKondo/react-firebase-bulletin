import React, { useEffect, useState } from 'react'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../util/firebase';
import './Home.css'

const Home = () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(collection(db, 'posts'));
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getPosts();
    }, []);

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, 'posts', id));
        window.location.href = '/';
    }

    return (
        <div className='homePage'>
            {postList.map((post) => {
                return (
                    <div className='post' key={post.id}>
                        <div className='postHeading'>
                            <h2>{post.title}</h2>
                        </div>

                        <div className='postTextContainer'>
                            {post.postsText}
                        </div>

                        <div className='nameAndDeleteBtn'>
                            <p>@{post.author.username}</p>
                            {post.author.id === auth.currentUser?.uid && (
                                <button onClick={() => handleDelete(post.id)}>削除</button>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Home