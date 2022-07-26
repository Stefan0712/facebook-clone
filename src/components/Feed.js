import React, {useState, useEffect} from "react";
import Post from "./Post";
import app from "../firebase"
import { collection, doc, getDocs, getFirestore } from "firebase/firestore"; 

const Feed = () => {
    const [posts,setPosts] = useState([])
    const db = getFirestore(app);
    let date = new Date();
    
    
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
            {posts.map((post)=><Post info={post} key={date.getHours()+"-"+date.getMinutes()+"-"+date.getSeconds()+"-"+date.getDay()+post.title}/>)}
        </div>
     );
}
 
export default Feed;