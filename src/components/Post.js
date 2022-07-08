import React from "react";

const Post = (props) => {
    let date = new Date();
    return ( 
        <div className="post-body" key={date.getHours()+"-"+date.getMinutes()+"-"+date.getSeconds()+"-"+date.getDay()}>
            <div className="post-title">{props.info.title}</div>
            <div className="post-author">Author</div>
            <div className="post-content">{props.info.content}</div>
            <div className="buttons">
                <div className="likes">
                    <div id="like-button">Like</div>
                    <div>{props.info.likes} liked this</div>
                </div>
                <div className="comments">
                    <div id="comment-button">Comment</div>
                    <div>{props.info.likes} comments</div>
                </div>

            </div>
        </div>
     );
}
 
export default Post;