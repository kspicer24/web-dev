import React, {useState} from "react";
import "../index.css";
import {useDispatch} from "react-redux";
import { createTuit } from "../actions/tuits-actions";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState({tuit: '', postedBy: { username: "NASA" }, likes: 0});

    const dispatch = useDispatch();

    return (
        <div>
            <img
                src={"../../images/nyp.png"}
                className="wd-active-user-image"/>
            <div className={'wd-wh-main row'}>
                <textarea className={'wd-tuit-input'}
                            value={whatsHappening.tuit}
                            placeholder="What's happening?"
                            onChange={(event) =>
                                setWhatsHappening({...whatsHappening, tuit: event.target.value})}>
                </textarea>
                <div className={'wd-wh-buttons'}>
                    <div className={'wd-wh-add-ons'}>
                        <i className="far fa-image wd-wh-add-on"/>
                        <i className="fas fa-chart-bar wd-wh-add-on"/>
                        <i className="far fa-smile wd-wh-add-on"/>
                        <i className="far fa-calendar wd-wh-add-on"/>
                    </div>
                    <button className={'wd-write-tuit'}
                            onClick={() =>
                                createTuit(dispatch, whatsHappening)}>
                            Tuit
                    </button>
                </div>
            </div>
        </div>
    );
}
export default WhatsHappening;