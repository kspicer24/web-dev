import React from "react";
import TuitListItem from "./TuitListItem";
import {useSelector} from "react-redux";

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);

    return(
        <div className={'wd-bookmarked-tweets wd-flex'}>
            {tuits.map && tuits.map(tuit =>
                <TuitListItem key={tuit._id}
                              tuit={tuit}/>)
            }
        </div>
    );
}

export default TuitList;