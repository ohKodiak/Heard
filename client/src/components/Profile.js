import '../styles/Profile.css'
import React from 'react';

function Profile() {
    return (
        <div className="profile">
            <div className="profile-head">
                <img src="https://via.placeholder.com/50" alt="User" />
                <div className="profile-info">
                    <p>Johnny Manziel</p>
                    <div className="profile-info-extra">
                        <p>2012 Friends</p>
                        <p>Joined 07/24/1989</p>
                    </div>
                </div>
            </div>
            <div className="profile-body">
                <div className="profile-fav-artists">
                    <p>Favorite Artists</p>
                </div>
                <div className="profile-fav-songs">
                    <p>Favorite Songs</p>
                </div>
            </div>
            <div className="profile-footer">
                <p>Friends</p>
            </div>
        </div>
    );
};

export default Profile;