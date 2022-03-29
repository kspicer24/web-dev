import React from "react";
import {useSelector} from "react-redux";
import WhoToFollowListItem from "./WhoToFollowListItem";
import "../index.css";

const WhoToFollowList = () => {
    const who = useSelector(state => state.who);
    return(
        <div>
            <div className={`list-group wd-wtf-section`}>
                <div className={`list-group-item wd-wtf-item`}>
                    <div className={`wd-wtf-user-info`}>Who to Follow</div>
                </div>
                {who.map(who => {
                        return (<WhoToFollowListItem who={who}/>);
                    })
                }
            </div>
        </div>
    );
}

export default WhoToFollowList;