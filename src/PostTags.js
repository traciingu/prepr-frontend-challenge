import React, { useState } from "react";
import "./styles/PostTags.css";

const PostTags = ({postTag}) => {
    return (
        <input type="button" value={postTag} className="post-tag"/>
    );
};

export default PostTags;