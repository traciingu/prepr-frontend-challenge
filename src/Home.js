import React from "react";
import Navbar from "./Navbar";
import Post from "./Post";
import postData from "./post-data.json";


const Home = () => {
    return (
        <div>
            <Navbar/>
            {postData.map((post, index) => (<Post postData={post} key={index}/>))}
        </div>
    );
}

export default Home;