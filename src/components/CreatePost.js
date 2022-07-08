import React, {useState, useRef} from "react";
import { doc, setDoc, getFirestore } from "firebase/firestore"; 
import app from "../firebase"

const CreatePost = () => {
    const db = getFirestore(app);
    const contentRef = useRef()
    const titleRef = useRef()
    function handleSubmit(event){
        event.preventDefault();
      
        setDoc(doc(db, "Posts",titleRef.current.value), {
            "title": titleRef.current.value,
            "content": contentRef.current.value,
            "likes": 0,
            "comments": []
          });
        setTimeout(window.location.reload(false),250)
    }

    return ( 
        <div className="make-post-body">
            <h3>Create a post</h3>
            <form>
                <input ref={titleRef} type="text" placeholder="Title..."></input>
                <input ref={contentRef} type="text" placeholder="Write something here..."></input>
                <button className="submit-button" type="submit" onClick={handleSubmit}>Submit</button>
            </form>

        </div>
     );
}
 
export default CreatePost;