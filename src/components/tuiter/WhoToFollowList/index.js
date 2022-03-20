import React from "react";
import who from "./who.json";
import WhoToFollowListItem from "./WhoToFollowListItem";

const WhoToFollowList = () => {
    return(
        <>
            <div className={`list-group wd-wtf-bar`}>
                <div className={`list-group-item wd-wtf-item`}>
                    <div className={`wd-wtf-user-info`}>Who to Follow</div>
                </div>
                {who.map(who => {
                        return (<WhoToFollowListItem who={who}/>);
                    })
                }
            </div>
        </>
    );
}

export default WhoToFollowList;