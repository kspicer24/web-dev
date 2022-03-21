import React from "react";
import PostList from "../PostList";
import "./home.css";

const HomeComponent = () => {
    return(
        <>
            <div className="row">
                <div className="wd-header">
                    <div className="wd-search-area">
                        <i className="fas fa-search wd-mag-image"/>
                        <input className="wd-search-bar" type="text" placeholder="Search Twitter"/>
                    </div>
                    <a href="settings.html"><i className="fa fa-cog wd-settings-icon"/></a>
                </div>
            </div>
            <PostList/>
        </>
    );
}

export default HomeComponent;