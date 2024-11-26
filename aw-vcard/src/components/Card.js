import Profile from './Profile'
import About from './About'
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