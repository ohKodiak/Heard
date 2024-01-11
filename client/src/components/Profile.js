import React from 'react';
import '../styles/Profile.css';

function Profile() {
  return (
    <div className="profile">
      <div className="profile-top">
        <div className="profile-picture">
          <img src="https://via.placeholder.com/200" alt="User" />
        </div>
        <div className="profile-info">
          <p className="profile-info-name">Johnny Manziel</p>
          <div className="profile-info-extra">
          <p className="profile-info-friends">2012 Friends</p>
          <p className="profile-info-joined">Joined 07/24/1989</p>
          </div>
        </div>
      </div>
      <div className="profile-middle">
        <div className="profile-fav">
          <p className="profile-fav-artists">Favorite Artists</p>
          <p className="profile-fav-songs">Favorite Songs</p>
        </div>
      </div>
      <div className="profile-bottom">
        <p className="profile-footer">Friends</p>
      </div>
    </div>
  );
}

export default Profile;
