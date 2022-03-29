import React, {useState} from "react";
import "../index.css";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');

    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        const action = {
            type: 'create-tuit',
            tuit: whatsHappening
        };
        dispatch(action);
        setWhatsHappening('');
    }
    return (
        <div>
            <img
                src={"https://imgc.artprintimages.com/img/print/the-tree-square-bw-2_u-l-q12ulvo0.jpg?artPerspective=n"}
                className="wd-active-user-image"/>
            <div className={'wd-wh-main row'}>
                <textarea className={'wd-tuit-input'}
                            value={whatsHappening}
                            placeholder="What's happening?"
                            onChange={(event) =>
                                setWhatsHappening(event.target.value)}>
                </textarea>
                <div className={'wd-wh-buttons'}>
                    <div className={'wd-wh-add-ons'}>
                        <i className="far fa-image wd-wh-add-on"/>
                        <i className="fas fa-chart-bar wd-wh-add-on"/>
                        <i className="far fa-smile wd-wh-add-on"/>
                        <i className="far fa-calendar wd-wh-add-on"/>
                    </div>
                    <button className={'wd-write-tuit'}
                            onClick={tuitClickHandler}>
                            Tuit
                    </button>
                </div>
            </div>
        </div>
    );
}
export default WhatsHappening;