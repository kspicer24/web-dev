import React from "react";
import post from "./posts.json";
import PostItem from "./PostItem";

const PostList = () => {
    return(
        <div className={'wd-bookmarked-tweets wd-flex'}>
            {post.map(post =>
                <PostItem post={post}/>
            )}
        </div>
    );
}

export default PostList;