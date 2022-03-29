import React, {useState} from "react";
import "../index.css";
import EditProfileScreen from "./edit-profile";
import {useSelector} from "react-redux";


const ProfileScreen = () => {

    const profileData = useSelector((state) => state.profile.profile);
    const [editShown, setEditShown] = useState(false);
    if (!profileData) return null;

    const showEdit = () => {
        setEditShown(true);
    }

    return(
        <>
            {!editShown &&
                <div>
                    <div className={'wd-p-header'}>
                        <i className='fas fa-arrow-left wd-p-arrow-left'/>
                        <div className={'wd-p-header-info'}>
                            <span className={'wd-p-header-name'}>{profileData.firstName + ' ' + profileData.lastName}</span><br/>
                            <span className={'wd-p-header-detail'}>5,196 Tweets</span>
                        </div>
                    </div>
                    <img
                        src={profileData.bannerPicture}
                        className={'wd-p-banner'}/>
                    <div>
                        <img
                            src={profileData.profilePicture}
                            className={'wd-p-avatar'}/>
                        <button className={'btn wd-p-edit-btn'} onClick={showEdit}>Edit Profile</button>
                    </div>
                    <div className={'wd-p-bio-section'}>
                        <div style={{marginBottom: '10px'}}>
                            <span className={'wd-p-bio-name'}>{profileData.firstName + ' ' + profileData.lastName}</span><br/>
                            <span className={'wd-p-bio-handle'}>@{profileData.handle}</span>
                        </div>
                        <div className={'wd-p-bio'}>{profileData.bio}</div>
                        <div className={'wd-p-details'}>
                                <span className={'wd-p-detail'}>
                                    <i className={'fas fa-map-marker-alt wd-p-detail-icon'}/>
                                    {profileData.location}
                                </span>
                            <span className={'wd-p-detail'}>
                                    <i className={'fas fa-birthday-cake wd-p-detail-icon'}/>
                                    Born {profileData.dateOfBirth}
                                </span>
                            <span className={'wd-p-detail'}>
                                    <i className={'fas fa-calendar-alt wd-p-detail-icon'}/>
                                    Joined {profileData.dateJoined}
                                </span>
                        </div>
                        <div className={'wd-p-tweet-stats'}>
                            <span className={'wd-p-follow-stat'}><b>{profileData.followingCount}</b> <span
                                style={{color: "rgb(74, 74, 74)"}}> Following </span></span>
                            <span className={'wd-p-follow-stat'}><b>{profileData.followersCount}</b> <span
                                style={{color: "rgb(74, 74, 74)"}}> Followers </span></span>
                        </div>
                    </div>
                </div>
            }
            {editShown &&
                <EditProfileScreen
                    editShown={editShown}
                    setEditShown={setEditShown}
                />
            }
        </>
    );
}

export default ProfileScreen;