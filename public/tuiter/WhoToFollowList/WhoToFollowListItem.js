const WhoToFollowListItem = (who) => {
    return (`
        <div class="wd-wtf-item list-group-item">
            <div class="wd-wtf-user">
                <img
                    src=${who.avatarIcon}
                    class="wd-wtf-image"/>
                <div class="wd-wtf-user-info">
                    <span><b>${who.userName}</b></span>
                    <i class="fas fa-check-circle"></i> <br/>
                    <span>${who.handle}</span>
                </div>
            </div>
            <button class="btn wd-wtf-follow">Follow</button>
        </div>
    `);
}
export default WhoToFollowListItem;