import './online.css'

export default function online({user}) {
  return (
    <li className="rightBarFriend">
      <div className="rightbarProfileImgContainer">
        <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
        <span className="rigthbarOnline"></span>              
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  )
}
 