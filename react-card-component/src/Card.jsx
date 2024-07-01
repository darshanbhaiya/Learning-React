import profilePic from './assets/darshan.jpg';
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" width="80" height="80"/>
            <h2 className="card-title" >Darshan</h2>
            <p className="card-text" >I am a software engineer and like to eat, roam, love</p>
        </div>
    );
}

export default Card;