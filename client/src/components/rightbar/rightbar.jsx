import './rightbar.css'
import {Users} from "../../dummyData"
import Online from '../online/online'

export default function rightbar({profile}) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" className='birthdayImg' alt="" />
          <span className="birthdayText">
            <b>Rahul</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}

        </ul>
      </>
    )
  }

  const ProfileRightbar = () =>{
    return (
      <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightInfoKey">City: </span>
          <span className="rightInfoValue">Kanpur</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From: </span>
          <span className="rightbarInfoValue">Uttar Pradesh</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationhsip: </span>
          <span className="rightbarInfoValue">Married</span>
        </div>
      </div>
      <h4 className='rightbarTitle'>Friends</h4>
      <div className="rightbarfFollowings">
        <div className="rightbarFollowing">
          <img src="../assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">{Users.username}</span>
        </div>
        <div className="rightbarFollowing">
          <img src="../assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Anamika</span>
        </div>
        <div className="rightbarFollowing">
          <img src="../assets/person/3.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Anamika</span>
        </div>
        <div className="rightbarFollowing">
          <img src="../assets/person/4.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Anamika</span>
        </div>
        <div className="rightbarFollowing">
          <img src="../assets/person/3.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Anamika</span>
        </div>
        <div className="rightbarFollowing">
          <img src="../assets/person/8.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Anamika</span>
        </div>
        <div className="rightbarFollowing">
          <img src="../assets/person/7.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Anamika</span>
        </div>
        <div className="rightbarFollowing">
          <img src="../assets/person/6.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Anamika</span>
        </div>
        <div className="rightbarFollowing">
          <img src="../assets/person/5.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Anamika</span>
        </div>
      </div>  
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar />: <HomeRightbar />}
      </div>
    </div>
  )
}
