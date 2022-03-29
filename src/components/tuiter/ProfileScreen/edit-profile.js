import React, {useState} from "react";
import "../index.css";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


const EditProfileScreen = (props) => {
    const {editShown, setEditShown} = props

    const profileData = useSelector(state => state.profile.profile);
    const dispatch = useDispatch();

    const date = () => {
        const split = profileData.dateOfBirth.split("/");
        const year = split[2];
        const month = split[0].length === 2 ? split[0] : '0' + split[0];
        const day = split[1].length === 2 ? split[1] : '0' + split[1];
        return year + '-' + month + '-' + day;
    }
    const [name, setName] = useState(profileData.firstName + ' ' + profileData.lastName);
    const [bio, setBio] = useState(profileData.bio);
    const [dob, setDob] = useState(date);
    const [loc, setLoc] = useState(profileData.location);
    const [web, setWeb] = useState(profileData.website);

    const handleCancel = () => {
        setEditShown(false);
    }
    const handleSave = () => {
        dispatch({
            type: 'update',
            profile: {
                name: name,
                bio: bio,
                dob: dob,
                location: loc,
                website: web
            }
        })
        setEditShown(false)
    }

    return(
        <div>
            <div className={'wd-p-header'}>
                <i className='fas fa-times wd-p-arrow-left' onClick={handleCancel}/>
                <div className={'wd-p-header-info'} style={{fontSize: "20px"}}>
                    Edit Profile
                </div>
            </div>
            <div>
                <img
                    src={profileData.bannerPicture}
                    className={'wd-p-banner'}/>
                <span className={'wd-p-edit-banner'}>
                    <i className={'fas fa-camera wd-p-flex'}/>
                    <i className={'fas fa-times wd-p-flex'}/>
                </span>
            </div>
            <div>
                <img
                    src={"../../../images/elon.jpg"}
                    className={'wd-p-avatar'}/>
                <button onClick={handleSave} className={'btn wd-p-edit-btn'}>Save</button>
            </div>
            <div className='wd-p-bio-section'>
                <div className={'wd-p-bio-name-input'}>
                    <label for="nameInput" className={'wd-p-label'}>Name</label>
                        <input
                            name="nameInput"
                            id="nameInput"
                            type={'text'}
                            className={'wd-p-input'}
                            value={name}
                            onChange={e => setName(e.target.value)}
                        /><br/>
                </div>
                <div className={'wd-p-bio-name-input'}>
                    <label for='bioInput' className={'wd-p-label'}>Bio</label>
                        <textarea
                            id="bioInput"
                            name="bioInput"
                            wrap={'soft'}
                            value={bio}
                            className={'wd-p-input'}
                            onChange={e => setBio(e.target.value)}
                        />
                </div>p
                <div className={'wd-p-bio-name-input'}>
                    <label for={'bday'} className={'wd-p-label'}>Birthday</label>
                    <input
                        id={'bday'}
                        name={'bday'}
                        type={"date"}
                        value={dob}
                        className={'wd-p-input'}
                        onChange={e => setDob(e.target.value)}/>
                    <label htmlFor={'loc'} className={'wd-p-label'}>Location</label>
                    <input
                        id={'loc'}
                        name={'loc'}
                        type="text"
                        className={'wd-p-input'}
                        value={loc}
                        onChange={e => setLoc(e.target.value)}/>
                    <label htmlFor={'web'} className={'wd-p-label'}>Website</label>
                    <input
                        id={'web'}
                        name={'web'}
                        type={"text"}
                        className={'wd-p-input'}
                        value={web}
                        onChange={e => setWeb(e.target.value)}/>
                </div>
            </div>
        </div>
    );
}

export default EditProfileScreen;