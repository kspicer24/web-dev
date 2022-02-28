import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.js";

const PostSummaryList = () => {
        return (`
        <div class="wd-main-tuits wd-flex">
            ${post.map(post => {
            return (PostSummaryItem(post));
        }).join('')
        }
        </div>
    `);
}

export default PostSummaryList;