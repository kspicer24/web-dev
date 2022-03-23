
const NavigationSidebar = (active) => {
    let NavigationItem = (active, name) => {
        if (active === name) {
            return "active";
        }
        return "";
    }
    return(`
        <div class="list-group wd-bottom-margin wd-no-wrap-text">
            <a class="list-group-item list-group-item-action wd-navigation-item" href="/">
                <i class="fab fa-twitter"></i></a>
            <a class="list-group-item list-group-item-action wd-navigation-item `+NavigationItem(active, "home")+`" id="home" href="../HomeScreen/home.html">
                <i class="fas fa-home"></i>
                <span class="d-none d-xl-block wd-nav-title">Home</span></a>
            <a class="list-group-item list-group-item-action wd-navigation-item `+NavigationItem(active, "explore")+`" id="explore" href=../ExploreScreen/explore.html>
                <i class="fas fa-hashtag"></i>
                <span class="d-none d-xl-block wd-nav-title">Explore</span></a>
            <a class="list-group-item list-group-item-action wd-navigation-item `+NavigationItem(active, "notifications")+`" id="notifications" href="../notifications.html">
                <i class="fas fa-bell"></i>
                <span class="d-none d-xl-block wd-nav-title">Notifications</span></a>
            <a class="list-group-item list-group-item-action wd-navigation-item `+NavigationItem(active, "notifications")+`" id="messages" href="../messages.html">
                <i class="fas fa-envelope"></i>
                <span class="d-none d-xl-block wd-nav-title">Messages</span></a>
            <a class="list-group-item list-group-item-action wd-navigation-item `+NavigationItem(active, "bookmarks")+`" id="bookmarks" href="../bookmarks.html">
                <i class="fas fa-bookmark"></i>
                <span class="d-none d-xl-block wd-nav-title">Bookmarks</span></a>
            <a class="list-group-item list-group-item-action wd-navigation-item `+NavigationItem(active, "lists")+`" id="lists" href="../lists.html">
                <i class="fas fa-list"></i>
                <span class="d-none d-xl-block wd-nav-title">Lists</span></a>
            <a class="list-group-item list-group-item-action wd-navigation-item `+NavigationItem(active, "profile")+`" id="profile" href="../profile.html">
                <i class="fas fa-user"></i>
                <span class="d-none d-xl-block wd-nav-title">Profile</span></a>
            <a class="list-group-item list-group-item-action wd-navigation-item `+NavigationItem(active, "more")+`" id="more" href="../more.html">
                <span class="fa-stack fa-1x" style="font-size: 0.5em; vertical-align: middle;">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-ellipsis-h fa-stack-1x" style="color: white"></i>
                </span>
                <span class="d-none d-xl-block wd-nav-title">More</span></a>

        </div>
        <div class="d-grid mt-2 wd-tweet-button">
            <a href="tweet.html"
               class="btn btn-primary btn-block rounded-pill">
                Tweet</a>
        </div>            

    `);
}
export default NavigationSidebar;
