import PostItems from "./PostItems.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`
        <div class="wd-bookmarked-tweets wd-flex">
            ${PostItems.map(post => {
        return (PostItem(post));
    }).join('')
    }
        </div>
    `);
}

export default PostList;