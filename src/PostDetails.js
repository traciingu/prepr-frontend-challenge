import React, { useEffect, useState } from "react";
import ChallengeDetails from "./ChallengeDetails";
import postData from "./post-data.json";

const PostDetails = ({ match }) => {
    const [currentPost] = useState(postData[match.params.id]);

    return (
        <div>
            <img src={currentPost.image} />
            <h2>{currentPost.title}</h2>
            <p>{currentPost.postType}</p>
            {{
                "challenge": <ChallengeDetails postData={currentPost} />,
                "lab": <p>lab</p>,
                "project": <p>project</p>
            }[currentPost.postType]}
        </div>
    );
};

export default PostDetails;