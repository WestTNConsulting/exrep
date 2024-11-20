import CTA from './CTA'
import Pro from '../images/Pro.jpg'


function Profile(){
    return(
        <div className="profile">
            <div className="profile-img">
                <img src={Pro} alt="profile-img" />
            </div>
            <div className="profile-info">
                <p className="profile-name">Amanda Whitehorn</p>
                <p className="profile-occupation">Client Relations Executive </p>
                <p className="profile-website">West TN Consulting | IT Consulting</p>
            </div>

            <CTA />
        </div>
    );
}
export default Profile;