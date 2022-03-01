const TuitImageCaption = (post) => {
    if (post.imageBody !== "" || post.imageTitle !== "" || post.imageLink !== "") {
        return (`
            <div class="wd-tuit-image-caption">
                <span><b>${post.imageTitle}</b></span><br/>
                <span class="wd-light-gray-color">${post.imageBody}</span></br>
                <i class="wd-detail fa fa-link"></i>
                <span class="wd-detail">${post.imageLink}</span>
            </div>
        `);

    }
}

const TuitImageComponent = (post) => {
    if (post.image !== undefined){
        const caption = TuitImageCaption(post);
        const image =
            (caption !== undefined) ?
                `
                <div class="wd-tuit-image-container">
                    <img
                        src="${post.image}"
                        class="wd-tuit-image"/>
                    ${TuitImageCaption(post)}
                </div>
                `
            :
                `
                <div class="wd-tuit-image-container">
                    <img
                        src="${post.image}"
                        class="wd-tuit-image"
                        style="border-bottom-right-radius: 10px; 
                                border-bottom-left-radius: 10px;"/>
                </div>
                `;
        return image;
    }

}

const PostItem = (post) => {
    return (`
        <div class="wd-bookmarked-tuit">
        <img
            src="${post.userPhoto}"
            class="wd-user-image"/>
        <div class="wd-tuit-body">
            <div class="wd-tuit-header">
                <span class="wd-username">
                    <span>${post.userName}</span>
                    <span class="fa-stack fa-1x wd-stacked-icons-small">
                        <i class="fas fa-certificate fa-stack-2x"></i>
                        <i class="fas fa-check fa-stack-1x" style="color: black"></i>
                    </span>
                    <span class="wd-user-handle">${post.handle}</span>
                </span>
            </div>
            <div class="wd-tuit-content">
                ${post.body}
            </div>
            ${TuitImageComponent(post)}
            <div class="wd-tuit-metrics">
                <div class="wd-tuit-metric">
                    <a href="#" class="wd-no-underline">
                        <i class="fa fa-comment wd-silver"></i>
                        <span class="wd-light-gray-color">${post.comments}</span>
                    </a>
                </div>
                <div class="wd-tuit-metric">
                    <a href="#" class="wd-no-underline">
                        <i class="fa fa-retweet wd-silver"></i>
                        <span class="wd-light-gray-color">${post.retweets}</span>
                    </a>
                </div>
                <div class="wd-tuit-metric">
                    <a href="#" class="wd-no-underline">
                        <i class="fas fa-heart" style="color: red"></i>
                        <span class="wd-light-gray-color">${post.likes}</span>
                    </a>
                </div>
                <div class="wd-tuit-metric">
                    <a href="#" class="wd-no-underline wd-silver">
                        <i class="fa fa-share"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    `);
}

export default PostItem;