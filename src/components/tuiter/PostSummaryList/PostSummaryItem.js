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
            <div className={`wd-tuit-summary`}>
                <div className={`wd-tuit-content-summary`}>
                    { post.topic &&
                        <span className={`wd-tuit-detail`}>{post.topic}<br/></span>
                    }
                    {post.userName &&
                        <span className={`wd-tuit-user`}><b>{post.userName}</b></span>
                    }
                    <i className={`fas fa-check-circle`}/>
                    <span className={`wd-tuit-detail`}>{` - ${post.time}`}</span><br/>
                    {post.title &&
                        <span><b>{post.title}</b><br/></span>
                    }
                    {post.tweets &&
                        <span className={`wd-tuit-detail`}>{post.tweets}</span>
                    }
                </div>
                <img
                    src={post.image}
                    className={`wd-tuit-image-summary`}/>
            </div>
        </>
    );
}

export default PostSummaryItem;