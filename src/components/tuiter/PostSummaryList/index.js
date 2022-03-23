import React from "react";
import posts from "./posts.json";
import PostSummaryItem from "./PostSummaryItem";
import "../index.css";

const PostSummaryList = () => {
    return(
        <>
            <div className={`wd-main-tuits wd-flex`}>
                {posts.map(post => {
                        return(<PostSummaryItem post={post}/>);
                    })
                }
            </div>
        </>
    );
}

export default PostSummaryList;