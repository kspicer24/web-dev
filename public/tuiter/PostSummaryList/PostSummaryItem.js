const PostSummaryItem = (post) => {
    return (`
        <div class="wd-tweet-summary">
            <div class="wd-tuit-content-summary">
                <span class="wd-tuit-detail">${post.topic}</span><br/>
                <span class="wd-tweet-user-info"><b>${post.userName}</b></span>
                <i class="fas fa-check-circle"></i>
                <span class="wd-tuit-detail"> - ${post.time}</span><br/>
                <span><b>${post.title}</b></span></br>
                <span class="wd-tuit-detail">${post.tweets}</span>

            </div>
            <img
            src=${post.image}
            class="wd-tweet-image-summary"/>
        </div>
    `);
}

export default PostSummaryItem;