import React from "react";

const TuitImageCaption = (
    {
        post =   {
            "userName": "New York Post",
            "userPhoto": "../../images/nyp.png",
            "handle": "@nypost",
            "time": "23h",
            "body": "Grimes seen reading Karl Marx following split with world's richest man Elon Musk trib.al/nx2Gfaq",
            "image": "../../images/grimes.jpg",
            "imageTitle": "",
            "imageBody": "",
            "imageLink": "",
            "comments": "965",
            "retweets": "2.4K",
            "likes": "4K"
        }
    }) => {
    return(
        <>
            <div className="wd-tweet-image-caption">
                {post.imageTitle &&
                    <span><b>{post.imageTitle}</b><br/></span>
                }
                {post.imageBody &&
                    <span className="wd-light-gray-color">{post.imageBody}<br/></span>
                }
                {post.imageLink &&
                    <>
                        <i className="wd-detail fa fa-link"/>
                        <span className="wd-detail">{post.imageLink}</span>
                    </>
                }
            </div>
        </>
    )
}

const TuitImageComponent = (
    {
        post =   {
            "userName": "New York Post",
            "userPhoto": "../../images/nyp.png",
            "handle": "@nypost",
            "time": "23h",
            "body": "Grimes seen reading Karl Marx following split with world's richest man Elon Musk trib.al/nx2Gfaq",
            "image": "../../images/grimes.jpg",
            "imageTitle": "",
            "imageBody": "",
            "imageLink": "",
            "comments": "965",
            "retweets": "2.4K",
            "likes": "4K"
        }
    }) => {
    return(
        <div className="wd-tweet-image-container">
            <img
                src={post.image}
                className="wd-tweet-image"/>
            {(post.imageBody || post.imageTitle || post.imageLink) &&
                <TuitImageCaption post={post}/>
            }
        </div>
    )
}

const PostItem = (
    {
        post =   {
            "userName": "New York Post",
            "userPhoto": "../../images/nyp.png",
            "handle": "@nypost",
            "time": "23h",
            "body": "Grimes seen reading Karl Marx following split with world's richest man Elon Musk trib.al/nx2Gfaq",
            "image": "../../images/grimes.jpg",
            "imageTitle": "",
            "imageBody": "",
            "imageLink": "",
            "comments": "965",
            "retweets": "2.4K",
            "likes": "4K"
        }
    }) => {
    return(
        <>
            <div className="wd-bookmarked-tweet">
                <img
                    src={post.userPhoto}
                    className="wd-user-image"/>
                <div className="wd-tweet-body">
                    <div className="wd-tweet-header">
                <span className="wd-username">
                    <span>{post.userName}</span>
                    <span className="fa-stack fa-1x wd-stacked-icons">
                        <i className="fas fa-certificate fa-stack-2x"/>
                        <i className="fas fa-check fa-stack-1x" style={{color: "black"}}/>
                    </span>
                    <span className="wd-user-handle">{post.handle}</span>
                </span>
                    </div>
                    <div className="wd-tweet-content">
                        {post.body}
                    </div>
                    {post.image &&
                        <TuitImageComponent post={post}/>
                    }
                    <div className="wd-tweet-metrics">
                        <div className="wd-tweet-metric">
                            <a href="#" className="wd-no-underline">
                                <i className="fa fa-comment wd-silver"/>
                                <span className="wd-light-gray-color">{post.comments}</span>
                            </a>
                        </div>
                        <div className="wd-tweet-metric">
                            <a href="#" className="wd-no-underline">
                                <i className="fa fa-retweet wd-silver"/>
                                <span className="wd-light-gray-color">{post.retweets}</span>
                            </a>
                        </div>
                        <div className="wd-tweet-metric">
                            <a href="#" className="wd-no-underline">
                                <i className="fas fa-heart" style={{color: "red"}}/>
                                <span className="wd-light-gray-color">{post.likes}</span>
                            </a>
                        </div>
                        <div className="wd-tweet-metric">
                            <a href="#" className="wd-no-underline wd-silver">
                                <i className="fa fa-share"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostItem;