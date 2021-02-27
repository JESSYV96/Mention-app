import React from 'react'
import './style.css'

const Post = () => {
    return (
        <div className="post">
            <div className="avatarContainer">
                <img 
                className="postAvatar"
                src="https://picsum.photos/seed/200/300.jpg" 
                alt="avatar"/>
                <span className="categoryPostIcon" />
                <div className="noReadMark"></div>
            </div>
            <div className="postDetailsContainer">
                <div className="postDetailsHead">
                    <span className="textDetails">patheos.com</span>
                    <span className="textDetails">28 Feb</span>
                </div>
                <div className="postDetailsBody">
                    <span className="titleText">"Why the "ugh" - I didn't claim t...</span>
                    <span className="descriptionText"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati laudantium amet nemo vitae fugiat!
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Post