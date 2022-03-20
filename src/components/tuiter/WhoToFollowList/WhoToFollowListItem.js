import React from "react";

const WhoToFollowListItem = ({
    who = {
        "avatarIcon": "../../../images/java.png",
        "userName": "Java",
        "handle": "Java"
    }
 }) => {
    return(
        <>
            <div className={`wd-wtf-item list-group-item`}>
                <div className={`wd-wtf-user`}>
                    <img
                        src={who.avatarIcon}
                        className={`wd-wtf-image`}/>
                    <div className={`wd-wtf-user-info`}>
                        <span><b>{who.userName}</b></span>
                        <i className={`fas fa-check-circle wd-wtf-check`}/><br/>
                        <span>{`@${who.handle}`}</span>
                    </div>
                </div>
                <button className={` wd-wtf-follow`}>Follow</button>
            </div>
        </>
    )
}

export default WhoToFollowListItem;