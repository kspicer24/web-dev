import React from "react";

const NavigationSidebar = (
    {
        active='explore'
    }) => {
    return(
        <>
            <div className="list-group wd-bottom-margin wd-no-wrap-text">
                <a className="list-group-item list-group-item-action wd-navigation-item" href="/">
                    <i className="fab fa-twitter"/></a>
                <a className={`list-group-item list-group-item-action wd-navigation-item ${active === "home" ? "active" : ""}`} id="home" href="../HomeScreen/home.html">
                    <i className="fas fa-home"/>
                    <span className="d-none d-xl-block wd-nav-title">Home</span></a>
                <a className={`list-group-item list-group-item-action wd-navigation-item ${active === "explore" ? "active" : ""}`} id="explore" href="../ExploreScreen/explore.html">
                    <i className="fas fa-hashtag"/>
                    <span className="d-none d-xl-block wd-nav-title">Explore</span></a>
                <a className={`list-group-item list-group-item-action wd-navigation-item +${active === "notifications" ? "active" : ""}`} id="notifications" href="../notifications.html">
                    <i className="fas fa-bell"/>
                    <span className="d-none d-xl-block wd-nav-title">Notifications</span></a>
                <a className={`list-group-item list-group-item-action wd-navigation-item ${active==="messages" ? "active" : ""}`} id="messages" href="../messages.html">
                    <i className="fas fa-envelope"/>
                    <span className="d-none d-xl-block wd-nav-title">Messages</span></a>
                <a className={`list-group-item list-group-item-action wd-navigation-item ${active==="bookmarks" ? "active" : ""}`} id="bookmarks" href="../bookmarks.html">
                    <i className="fas fa-bookmark"/>
                    <span className="d-none d-xl-block wd-nav-title">Bookmarks</span></a>
                <a className={`list-group-item list-group-item-action wd-navigation-item ${active==="lists" ? "active" : ""}`} id="lists" href="../lists.html">
                    <i className="fas fa-list"/>
                    <span className="d-none d-xl-block wd-nav-title">Lists</span></a>
                <a className={`list-group-item list-group-item-action wd-navigation-item ${active==="profile" ? "active" : ""}`} id="profile" href="../profile.html">
                    <i className="fas fa-user"/>
                    <span className="d-none d-xl-block wd-nav-title">Profile</span></a>
                <a className={`list-group-item list-group-item-action wd-navigation-item ${active==="more" ? "active" : ""}`} id="more" href="../more.html">
                    <span className="fa-stack fa-1x" style={{fontSize: '0.5em', verticalAlign: 'middle'}}>
                        <i className="fa fa-circle fa-stack-2x"/>
                        <i className="fa fa-ellipsis-h fa-stack-1x" style={{color: "white"}}/>
                    </span>
                    <span className="d-none d-xl-block wd-nav-title">More</span></a>
            </div>
        </>
    )
}

export default NavigationSidebar;
