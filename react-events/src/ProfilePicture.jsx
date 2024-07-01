function ProfilePicture(){
    const imageUrl='./src/assets/darshan.jpg';

    const handleClick=(e)=>e.target.style.display="none";

    return(
        <img onClick={(e)=>handleClick(e)} src={imageUrl} alt="ello" height="100" width="100"></img>
    )
}
export default ProfilePicture;
