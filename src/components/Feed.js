import React, {useState, useEffect} from "react";
import Post from "./Post";
import app from "../firebase"
import { collection, doc, getDocs, getFirestore } from "firebase/firestore"; 

const Feed = () => {
    const [posts,setPosts] = useState([])
    const db = getFirestore(app);
    
    
    
    async function getPosts(){
    const querySnapshot = await getDocs(collection(db, "Posts"))
    let temp = []
    querySnapshot.forEach((doc)=>{
    temp.push(doc.data())
    })
    setPosts(()=>temp)
    }
    useEffect(()=>{
        
        getPosts();
            
    },[])




    
    return ( 
        <div className="feed-body">
            {posts.map((post)=><Post info={post} />)}
        </div>
     );
}
 
export default Feed;