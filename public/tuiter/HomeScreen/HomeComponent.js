import PostList from "../PostList/PostList.js";

const HomeComponent = () => {
    return (`
            <div class="row">
                <div class="wd-header">
                    <div class="wd-search-area">
                        <i class="fas fa-search wd-magnifying-glass"></i>
                        <input class="wd-search-bar" type="text" placeholder="Search Twitter"/>
                    </div>
                    <a href="settings.html"><i class="fa fa-cog wd-settings"></i></a>
                </div>
            </div>
            ${PostList()}

    `);
}

export default HomeComponent;