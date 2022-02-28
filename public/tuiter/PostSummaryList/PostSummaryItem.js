const PostSummaryItem = (post) => {
    return (`
        <div class="wd-tuit">
            <div class="wd-tuit-content">
                <span class="wd-tuit-detail">${post.topic}</span><br/>
                <span class="wd-tuit-user"><b>${post.userName}</b></span>
                <i class="fas fa-check-circle"></i>
                <span class="wd-tuit-detail"> - ${post.time}</span><br/>
                <span><b>${post.title}</b></span></br>
                <span class="wd-tuit-detail">${post.tweets}</span>

            </div>
            <img
            src=${post.image}
            class="wd-tuit-image"/>
        </div>
    `);
}

export default PostSummaryItem;