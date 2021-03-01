import React, { useState } from 'react'
import parse from 'html-react-parser';
import './style.css'

const Post = ({ mention }: any) => {
    const [isMentionRead, setIsMentionRead] = useState(mention.read)

    const overlineKeyword = (text: string, keyword: string = "mention"): string => {
        const regex = new RegExp(`${keyword}`, 'ig')
        let updateText = text.replace(regex, `<span class="overlineKeyword">${keyword}</span>`)
        return updateText
    }

    const formatStringDate = (stringDate: string): string => {
        const dateformatted: Date = new Date(stringDate);
        const month = new Intl.DateTimeFormat('en-US', { month: "short" }).format(dateformatted);
        return `${dateformatted.getDate()} ${month}`
    }

    return (
        <div className="post" onClick={() => setIsMentionRead(!isMentionRead)}>
            <div className="avatarContainer">
                <img
                    className="postAvatar"
                    src="https://picsum.photos/seed/200/300.jpg"
                    alt="avatar" />
                <span className="categoryPostIcon" />
                <div className={!isMentionRead ? 'noReadMark' : ''}></div>
            </div>
            <div className="postDetailsContainer">
                <div className="postDetailsHead">
                    <span className="textDetails">{mention.source_name}</span>
                    <span className={!isMentionRead ? 'noReadTextDetails' : 'textDetails'}>{formatStringDate(mention.created_at)}</span>
                </div>
                <div className="postDetailsBody">
                    <span className="titleText">{mention.title.length > 35 ? `${mention.title.substring(0, 30)} ...` : mention.title}</span>
                    <span className="descriptionText ">
                        {parse(overlineKeyword(mention.description_short))}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Post