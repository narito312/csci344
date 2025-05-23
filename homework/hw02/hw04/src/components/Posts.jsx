import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";
import Post from "./Post";

export default function Posts({ token }) {
    // When useState is invoked it returns an array with two values
    //1. State variable
    //2. function whose job is to set the state variable and redraw the string after the variable is set
    const [posts, setPosts] = useState([]);
    const [counter, setCounter] = useState(0);

    async function getPosts() {
        const data = await getDataFromServer(token, "/api/posts");
        console.log(data);
        setPosts(data);
    }

    useEffect(() => {
        getPosts();
    }, []);

    function addOneToCounter(){
        setCounter(counter + 1);
    }

    
    console.log("Redraw screen with" + counter);
    return ( 
        <div>
            TODO: output all of the posts: {posts.length}
            {
                posts.map((post)=>(
                    <Post token = {token}/>
                ))
            }
            <br />
            <button onClick={addOneToCounter}>{counter}</button>
        </div>
    );
}
