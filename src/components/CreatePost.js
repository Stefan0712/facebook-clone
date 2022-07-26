import React, {useState, useRef} from "react";
import { doc, setDoc, getFirestore } from "firebase/firestore"; 
import app from "../firebase"

const CreatePost = () => {
    const db = getFirestore(app);
    const contentRef = useRef()
    const titleRef = useRef()
    const windowRef = useRef()
    const createBtnRef = useRef()
    const [isVisible, setIsVisible] = useState(false)
    const [btnText, setBtnText] = useState("Create new post")
    const [btnClasses, setBtnClasses] = useState("menu-btn")
    function handleSubmit(event){
        event.preventDefault();
      
        setDoc(doc(db, "Posts",titleRef.current.value), {
            "title": titleRef.current.value,
            "content": contentRef.current.value,
            "likes": 0,
            "comments": []
          });
        setTimeout(window.location.reload(false),1000)
    }
    const switchWindow = () =>{
        if(isVisible===false){
            setIsVisible(true);
            windowRef.current.style.display = "flex";
            setBtnText("X")
            setBtnClasses("menu-btn close-btn")
        }else if(isVisible===true){
            setIsVisible(false);
            windowRef.current.style.display = "none";
            setBtnText("Create new post")
            setBtnClasses("menu-btn")
        }
    }
    return ( 
        <div className="make-post-body">
            <button ref={createBtnRef} id="addPost" className={btnClasses} onClick={switchWindow}>{btnText}</button>
            <h3>Create a post</h3>
            <form ref={windowRef}>
                <input ref={titleRef} type="text" placeholder="Title..."></input>
                <input ref={contentRef} type="text" placeholder="Write something here..."></input>
                <button className="submit-button" type="submit" onClick={handleSubmit}>Submit</button>
            </form>

        </div>
     );
}
 
export default CreatePost;