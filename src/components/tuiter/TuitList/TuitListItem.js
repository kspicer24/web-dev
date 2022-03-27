import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";

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

const TuitListItem = (
    {
        tuit = {
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
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };

    return(
        <>
            <div className="wd-bookmarked-tweet">
                <img
                    src={tuit.userPhoto}
                    className="wd-user-image"/>
                <div className="wd-tweet-body">
                    <div className="wd-tweet-header">
                <span className="wd-username">
                    <span>{tuit.userName}</span>
                    <span className="fa-stack fa-1x wd-stacked-icons">
                        <i className="fas fa-certificate fa-stack-2x"/>
                        <i className="fas fa-check fa-stack-1x" style={{color: "black"}}/>
                    </span>
                    <span className="wd-user-handle">{tuit.handle}</span>
                </span>
                    </div>
                    <div className="wd-tweet-content">
                        {tuit.body}
                    </div>
                    {tuit.image &&
                        <TuitImageComponent post={tuit}/>
                    }
                    <TuitStats tuit={tuit}/>
                </div>
                <i onClick={() =>
                        deleteTuit(tuit)}
                   className={"fas fa-times wd-delete-tweet"}/>
            </div>
        </>
    )
}

export default TuitListItem;