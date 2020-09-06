import React, { useState, useEffect } from "react";
import axios from "axios";
import {capitalizeFirstLetter} from "./Helpers";
import "./styles/Post.css";

const Post = ({ postData }) => {

    const [image, setImage] = useState(postData.image);
    const [like, setLike] = useState(false);

    const getRandomImage = async () => {
        const response = await axios.get("https://api.unsplash.com/photos/random", {
            params: {
                query: postData.title
            },
            headers: {
                Authorization: 
                'Client-ID 6VZ2ptfiG-21ermkImA4iaTEMMfCvNgA2fv5AB3wrCk'
            }
        });

        setImage(response.data.urls.raw);
    };

    
    useEffect(() => {
        getRandomImage();
    }, []);


    return (
        <div className={`post ${postData.postType}`}>
            <img src={image} style={{height: "100px"}}/>
            <h2 className="title post-title">{postData.title}</h2>
            <p className="post-type">{capitalizeFirstLetter(postData.postType)}</p>
            <p className="description post-description">{postData.description}</p>
            <input type="button" value={like ? "Unlike" : "Like"} onClick={() => setLike(prevLike => !prevLike)}/>
            <input type="button" value="Share"/>
        </div>
    );
};

export default Post;