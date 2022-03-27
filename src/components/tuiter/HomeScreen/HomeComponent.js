import React from "react";
import TuitList from "../TuitList";
import "./home.css";

const HomeComponent = () => {
    return(
        <>
            <div className="row">
                <div className="wd-header">
                    <div className="wd-search-area">
                        <i className="fas fa-search wd-magnifying-glass"/>
                        <input className="wd-search-bar" type="text" placeholder="Search Twitter"/>
                    </div>
                    <a href="settings.html"><i className="fa fa-cog wd-settings"/></a>
                </div>
            </div>
            <TuitList/>
        </>
    );
}

export default HomeComponent;