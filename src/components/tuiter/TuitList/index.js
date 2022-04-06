import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import * as service
    from '../services/tuits-service';
import TuitListItem from "./TuitListItem";

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();
    const findAllTuits = async () => {
        const tuits = await service.findAllTuits();
        dispatch({
            type: 'FIND_ALL_TUITS',
            tuits: tuits
        });
    }
    useEffect(findAllTuits, []);
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