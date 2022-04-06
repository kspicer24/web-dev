import {useDispatch} from "react-redux";
import React from "react";
import { updateTuit } from "../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    const dislikeTuit = () => {
        dispatch({type: 'dislike-tuit', tuit})
    }
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
                    <i onClick={() => updateTuit(dispatch, {...tuit, likes: tuit.likes + 1})}
                        className={`far fa-thumbs-up wd-light-gray-color`}/>
                    <span className="wd-light-gray-color">{tuit.likes}</span>
                </a>
            </div>
            <div className="wd-tweet-metric">
                <a href="#" className="wd-no-underline">
                    <i onClick={() => updateTuit(dispatch, {...tuit, dislikes: tuit.dislikes + 1})}
                       className={`far fa-thumbs-down wd-light-gray-color`}/>
                    <span className="wd-light-gray-color">{tuit.dislikes}</span>
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