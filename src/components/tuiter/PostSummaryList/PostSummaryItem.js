import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../../images/reactjs.png"
        }
    }) => {
    return(
        <>
            <div className={`wd-tweet-summary`}>
                <div className={`wd-tuit-content-summary`}>
                    { post.topic &&
                        <span className={`wd-tweet-details`}>{post.topic}<br/></span>
                    }
                    {post.userName &&
                        <span className={`wd-tweet-user-info`}><b>{post.userName}</b></span>
                    }
                    <i className={`fas fa-check-circle`}/>
                    <span className={`wd-tweet-details`}>{` - ${post.time}`}</span><br/>
                    {post.title &&
                        <span><b>{post.title}</b><br/></span>
                    }
                    {post.tweets &&
                        <span className={`wd-tweet-details`}>{post.tweets}</span>
                    }
                </div>
                <img
                    src={post.image}
                    className={`wd-tweet-image-summary`}/>
            </div>
        </>
    );
}

export default PostSummaryItem;