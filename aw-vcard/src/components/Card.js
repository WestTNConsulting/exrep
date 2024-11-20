import Profile from './Profile'
import Share from './Share'
import About from './About'
import Interests from './Interests'
import SocialMedia from './SocialMedia'
function Card(){
    return(
        <div className="card">
        <Profile />
        <About />
        <SocialMedia />
        </div>
        
    );
   
};
export default Card;