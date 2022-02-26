import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
            <li class="List-group-item">
                Who to Follow
            </li>
            ${who.map(who =>{
                return (WhoToFollowListItem(who));
            }).join('')
            }
        </ul>
    `);
}

export default WhoToFollowList;