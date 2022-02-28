import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return (`
        <div class="list-group wd-wtf-bar">
            <div class="list-group-item wd-wtf-item">
                Who to Follow
            </div>
            ${who.map(who =>{
                return (WhoToFollowListItem(who));
            }).join('')
            }
        </div>
    `);
}

export default WhoToFollowList;