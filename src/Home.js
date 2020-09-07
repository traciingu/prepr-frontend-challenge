import React from "react";
import Navbar from "./Navbar";
import Post from "./Post";
import postData from "./post-data.json";
import "./styles/Home.css";


const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className="postings">
            {postData.map((post, index) => (<Post currentPost={post} key={index}/>))}
            </div>
        </div>
    );
}

export default Home;