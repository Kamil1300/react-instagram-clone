import React from 'react'
import "./Post.css"

const Post = () => {
    return (
        <section className="main">
            <div className="wrapper">
                <div className="left-col">
            // status wrappers

                    <div className="post">
                        <div className="info">
                            <div className="user">
                                <div className="profile-pic"><img src="img/cover 1.png" alt="" /></div>
                                <p className="username">modern_web_channel</p>
                            </div>
                            <img src="img/option.PNG" className="options" alt="" />
                        </div>/
                        <img src="img/cover1.png" className="post-image" alt="" />
                        <div className="post-content">
                            <div className="reaction-wrapper">
                                <img src="img/like.PNG" className="icon" alt="" />
                                <img src="img/comment.PNG" className="icon" alt="" />
                                <img src="img/send.PNG" className="icon" alt="" />
                                <img src="img/save.PNG" className="save icon" alt="" />
                            </div>
                            <p className="likes">1,012 likes</p>
                            <p className="description"><span>username </span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?</p>
                            <p className="post-time">2 minutes ago</p>
                        </div>
                        <div className="comment-wrapper">
                            <img src="img/smile.PNG" className="icon" alt="" />
                            <input type="text" className="comment-box" placeholder="Add a comment" />
                            <button className="comment-btn">post</button>
                        </div>
                    </div>
                    <div className="post">
                        <div className="info">
                            <div className="user">
                                <div className="profile-pic"><img src="img/cover 2.png" alt="" /></div>
                                <p className="username">modern_web_channel</p>
                            </div>
                            <img src="img/option.PNG" className="options" alt="" />
                        </div>
                        <img src="img/cover 2.png" className="post-image" alt="" />
                        <div className="post-content">
                            <div className="reaction-wrapper">
                                <img src="img/like.PNG" className="icon" alt="" />
                                <img src="img/comment.PNG" className="icon" alt="" />
                                <img src="img/send.PNG" className="icon" alt="" />
                                <img src="img/save.PNG" className="save icon" alt="" />
                            </div>
                            <p className="likes">1,012 likes</p>
                            <p className="description"><span>username </span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?</p>
                            <p className="post-time">2 minutes ago</p>
                        </div>
                        <div className="comment-wrapper">
                            <img src="img/smile.PNG" className="icon" alt="" />
                            <input type="text" className="comment-box" placeholder="Add a comment" />
                            <button className="comment-btn">post</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Post