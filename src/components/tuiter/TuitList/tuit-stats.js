import {useDispatch} from "react-redux";
import React from "react";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
        <div className="wd-tweet-metrics">
            <div className="wd-tweet-metric">
                <a href="#" className="wd-no-underline">
                    <i className="fa fa-comment wd-silver"/>
                    <span className="wd-light-gray-color">{tuit.comments}</span>
                </a>
            </div>
            <div className="wd-tweet-metric">
                <a href="#" className="wd-no-underline">
                    <i className="fa fa-retweet wd-silver"/>
                    <span className="wd-light-gray-color">{tuit.retweets}</span>
                </a>
            </div>
            <div className="wd-tweet-metric">
                <a href="#" className="wd-no-underline">
                    <i onClick={likeTuit}
                        className={`${tuit.liked ? 'wd-red fas ' : 'wd-silver far '} fa-heart`}/>
                    <span className="wd-light-gray-color">{tuit.likes}</span>
                </a>
            </div>
            <div className="wd-tweet-metric">
                <a href="#" className="wd-no-underline wd-silver">
                    <i className="fa fa-share"/>
                </a>
            </div>
        </div>
);
}
export default TuitStats;