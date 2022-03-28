import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";

const TuitImageComponent = (
    {
        tuit =     {
            "_id": "123",
            "topic": "Web Development",
            "postedBy": {
                "username": "ReactJS"
            },
            "liked": true,
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

            "logo-image": "../../../images/react-blue.png",
            "avatar-image": "../../../images/react-blue.png",
            "stats": {
                "comments": 123,
                "retuits": 234,
                "likes": 345
            }
        }
    }) => {
    return(
        <div className="wd-tweet-image-container">
            {tuit.attachments.image &&
                <img
                    src={tuit.attachments.image}
                    className="wd-tweet-image"/>
            }
            {tuit.attachments.video &&
                <iframe width="100%" height="350px"
                        src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                        title="Video Player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            }
        </div>
    )
}

const TuitListItem = (
    {
        tuit =     {
            "_id": "123",
            "topic": "Web Development",
            "postedBy": {
                "username": "ReactJS"
            },
            "liked": true,
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "attachments": {
                "video": "unKvMC3Y1kI"
            },
            "logo-image": "../../../images/react-blue.png",
            "avatar-image": "../../../images/react-blue.png",
            "stats": {
                "comments": 123,
                "retuits": 234,
                "likes": 345
            }
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
                    src={tuit["avatar-image"]}
                    className="wd-user-image"/>
                <div className="wd-tweet-body">
                    <div className="wd-tweet-header">
                        <span className="wd-username">
                            <span>{tuit.postedBy.username}</span>
                            <span className="fa-stack fa-1x wd-stacked-icons">
                                <i className="fas fa-certificate fa-stack-2x"/>
                                <i className="fas fa-check fa-stack-1x" style={{color: "black"}}/>
                            </span>
                            <span className="wd-user-handle">@{tuit.handle}</span>
                        </span>
                    </div>
                    <div className="wd-tweet-content">
                        {tuit.tuit}
                    </div>
                    {tuit.attachments &&
                        <TuitImageComponent tuit={tuit}/>
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