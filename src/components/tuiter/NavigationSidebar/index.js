import React from "react";
import "../index.css";
import {Link, useLocation} from "react-router-dom";

const NavigationSidebar = (active) => {
    return(
        <>
            <div className="list-group wd-bottom-margin wd-no-wrap-text">
                <Link to={"/"} className="list-group-item list-group-item-action wd-navigation-item" href="/">
                    <i className="fab fa-twitter"/></Link>
                <Link to="/tuiter" className={`list-group-item list-group-item-action wd-navigation-item ${active === 'home' ? 'active' : ''}`} id="home" href="../HomeScreen/home.html">
                    <i className="fas fa-home"/>
                    <span className="d-none d-xl-block wd-nav-title">Home</span></Link>
                <Link to="/tuiter/explore" className={`list-group-item list-group-item-action wd-navigation-item ${active === 'explore' ? 'active' : ''}`} id="explore" href="../ExploreScreen/explore.html">
                    <i className="fas fa-hashtag"/>
                    <span className="d-none d-xl-block wd-nav-title">Explore</span></Link>
                <Link to={"/tuiter/notifications"} className={`list-group-item list-group-item-action wd-navigation-item +${active === "notifications" ? "active" : ""}`} id="notifications" href="../notifications.html">
                    <i className="fas fa-bell"/>
                    <span className="d-none d-xl-block wd-nav-title">Notifications</span></Link>
                <Link to={"/tuiter/messages"} className={`list-group-item list-group-item-action wd-navigation-item ${active==="messages" ? "active" : ""}`} id="messages" href="../messages.html">
                    <i className="fas fa-envelope"/>
                    <span className="d-none d-xl-block wd-nav-title">Messages</span></Link>
                <Link to={"/tuiter/bookmarks"} className={`list-group-item list-group-item-action wd-navigation-item ${active==="bookmarks" ? "active" : ""}`} id="bookmarks" href="../bookmarks.html">
                    <i className="fas fa-bookmark"/>
                    <span className="d-none d-xl-block wd-nav-title">Bookmarks</span></Link>
                <Link to={"/tuiter/lists"} className={`list-group-item list-group-item-action wd-navigation-item ${active==="lists" ? "active" : ""}`} id="lists" href="../lists.html">
                    <i className="fas fa-list"/>
                    <span className="d-none d-xl-block wd-nav-title">Lists</span></Link>
                <Link to={"/tuiter/profile"} className={`list-group-item list-group-item-action wd-navigation-item ${active==="profile" ? "active" : ""}`} id="profile" href="../profile.html">
                    <i className="fas fa-user"/>
                    <span className="d-none d-xl-block wd-nav-title">Profile</span></Link>
                <Link to={"/tuiter/more"} className={`list-group-item list-group-item-action wd-navigation-item ${active==="more" ? "active" : ""}`} id="more" href="../more.html">
                    <span className="fa-stack fa-1x" style={{fontSize: '0.5em', verticalAlign: 'middle'}}>
                        <i className="fa fa-circle fa-stack-2x"/>
                        <i className="fa fa-ellipsis-h fa-stack-1x" style={{color: "black"}}/>
                    </span>
                    <span className="d-none d-xl-block wd-nav-title">More</span></Link>
            </div>
            <div className="d-grid mt-2">
                <Link to={"/tuiter/tweet"}
                   className="btn btn-primary btn-block rounded-pill wd-tweet-button">
                    Tweet</Link>
            </div>
        </>
    )
}

export default NavigationSidebar;
