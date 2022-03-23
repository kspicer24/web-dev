import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "../WhoToFollowList";

const ExploreScreen = () => {
    return(
        <div className="row mt-2 flex-nowrap wd-main-content">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active={"explore"}/>
            </div>
            <div className="col-sm-11 col-md-11 col-lg-7 col-xl-6 col-xxl-6">
                <ExploreComponent/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    )
}

export default ExploreScreen;