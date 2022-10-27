import './closefriend.css'

export default function closefrined({user}) {
  return (
    <li className="sidebarFriend">
      <div className="sidebarProfileImgContainer">
        <img src={user.profilePicture} alt="" className="sidebarProfileImg" />
        <span className="sidebarOnline"></span>              
      </div>
      <span className="sidebarUsername">{user.username}</span>
  </li>
  )
}
