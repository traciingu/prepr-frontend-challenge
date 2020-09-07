import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "./Helpers";
import "./styles/Post.css";
import PostTags from "./PostTags";

const Post = ({ currentPost }) => {

    const [like, setLike] = useState(false);
    const tags = [];

    useEffect(() => {
        for (var i = 0; i < Object.keys(currentPost.tags).length; i++) {
            tags.push(<PostTags postTag={currentPost.tags[i]}/>);
        }
    }, []);

    /*
    IMAGE
    TITLE
    POST TYPE
    TAGS
    DESCRIPTTION
    BUTTONS
     */

     
    return (
        <div className={`post ${currentPost.postType}`}>
            <div className="postImgWrapper"><img src={currentPost.image} style={{ width: "90%" }} /></div>
            <Link to={`/post-details/${currentPost.postType}/${currentPost.id}`}>
                <h2 className="title post-title">{currentPost.title}</h2>
            </Link>

            <p className="post-type">{capitalizeFirstLetter(currentPost.postType)}</p>
            {tags.map((tag, index) => <PostTags postTag={tag} key={index}/>)}
            <p className="description post-description">{currentPost.description}</p>

            <input type="button" value={like ? "Unlike" : "Like"} onClick={() => setLike(prevLike => !prevLike)}
                className="postLike" />
            <input type="button" value="Share" className="postShare" />
        </div>
    );
};

export default Post;