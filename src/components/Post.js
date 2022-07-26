import React, {useEffect} from "react";
import likeImage from "./imgs/like-icon.svg"
import commentImage from "./imgs/comment-icon.svg"
import { doc, setDoc, getFirestore } from "firebase/firestore"; 
import app from "../firebase"

const Post = (props) => {
    

    const db = getFirestore(app);

    function handleLike(title){
         setDoc(doc(db, "Posts",title), {
            "title": props.info.title,
             "likes": props.info.likes+1,
             "content":props.info.content,
             "comments":props.info.comments
           });
        
    }
    
    return ( 
        <div className="post-body" >
            <div className="post-title">{props.info.title}</div>
            <div className="post-author">Author</div>
            <div className="post-content">{props.info.content}</div>
            <div className="buttons">
                <div className="likes">
                    <div id="like-button"><img id="like-img" src={likeImage}></img><a href="#" onClick={()=>handleLike(props.info.title)}>Like</a></div>
                    <div>{props.info.likes} liked this</div>
                </div>
                <div className="comments">
                    <div id="comment-button"><img id="comment-img" src={commentImage}></img><a href="#">Comment</a></div>
                    <div>{props.info.comments.length} comments</div>
                </div>

            </div>
        </div>
     );
}
 
export default Post;