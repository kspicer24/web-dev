import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import { deleteTuit, findAllTuits}
    from "../actions/tuits-actions";
import TuitListItem from "./TuitListItem";

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() =>
            findAllTuits(dispatch),
        []);

    return(
        <div className={'wd-bookmarked-tweets wd-flex'}>
            {tuits.map && tuits.map(tuit =>
                <TuitListItem key={tuit._id}
                              tuit={tuit}
                              deleteTuit={deleteTuit}
                />)
            }
        </div>
    );
}

export default TuitList;