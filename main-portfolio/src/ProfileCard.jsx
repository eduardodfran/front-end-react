
import './ProfileCard.css';
import profilePic from './assets/ProfilePicture.png'

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src={profilePic} alt="" />
      </div>
      <h2 className="profile-name">EDUARDO FRAN</h2>
      <p className="profile-description">
        A Computer Science Student who enjoys exploring new technologies.
      </p>
      <div className="profile-socials">
        {/* Place social media icons here */}
      </div>
    </div>
  );
};

export default ProfileCard;