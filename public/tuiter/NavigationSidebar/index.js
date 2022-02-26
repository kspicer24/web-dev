
const NavigationSidebar = () => {

    return(`
            <div class="list-group">
                <a class="list-group-item list-group-item-action" href="/">
                    <i class="fab fa-twitter"></i></a>
                <a class="list-group-item list-group-item-action" href="../home.html">
                    <i class="fas fa-home"></i>
                    <span>Home</span></a>
                <a class="list-group-item list-group-item-action" href=../explore.html">
                    <i class="fas fa-hashtag"></i>
                    <span>Explore</span></a>
                <a class="list-group-item list-group-item-action" href="../notifications.html">
                    <i class="fas fa-bell"></i>
                    <span>Notifications</span></a>
                <a class="list-group-item list-group-item-action" href="../messages.html">
                    <i class="fas fa-envelope"></i>
                    <span>Messages</span></a>
                <a class="list-group-item list-group-item-action" href="../bookmarks.html">
                    <i class="fas fa-bookmark"></i>
                    <span>Bookmarks</span></a>
                <a class="list-group-item list-group-item-action" href="../lists.html">
                    <i class="fas fa-list"></i>
                    <span>Lists</span></a>
                <a class="list-group-item list-group-item-action" href="../profile.html">
                    <i class="fas fa-user"></i>
                    <span>Profile</span></a>
                <a class="list-group-item list-group-item-action" href="../more.html">
                    <span class="fa-stack fa-1x" style="font-size: 0.5em; vertical-align: middle;">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-ellipsis-h fa-stack-1x" style="color: white"></i>
                    </span>
                    <span>More</span></a>
                    
                
            <!-- continue the rest of the list -->
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
