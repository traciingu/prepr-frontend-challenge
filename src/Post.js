import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {capitalizeFirstLetter} from "./Helpers";
import "./styles/Post.css";

const Post = ({ postData }) => {

    const [image, setImage] = useState("");
    const [like, setLike] = useState(false);

    const getRandomImage = async () => {
        const response = await axios.get("http://www.splashbase.co/api/v1/images/random");

        setImage(response.data.url);
        
    };

    
    useEffect(() => {
        getRandomImage();
    }, []);


    return (
        <div className={`post ${postData.postType}`}>
            <img src={postData.image} style={{width: "90%"}}/>
            <Link to="/challenge-page"><h2 className="title post-title">{postData.title}</h2></Link>
            <p className="post-type">{capitalizeFirstLetter(postData.postType)}</p>
            <p className="description post-description">{postData.description}</p>
            <input type="button" value={like ? "Unlike" : "Like"} onClick={() => setLike(prevLike => !prevLike)}
            className="postLike"/>
            <input type="button" value="Share" className="postShare"/>
        </div>
    );
};

export default Post;