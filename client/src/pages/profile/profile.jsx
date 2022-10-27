import "./profile.css";
import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import ProfileTop from "../../components/profileTop/profileTop";




export default function Profile({Users}) {
 
  

  return (
    <>
      <Topbar />
      <ProfileTop />
      <div className="profile">
        <div className="profileRightBottom">
            <Sidebar/>
            <Feed />
            <Rightbar profile/>
        </div>
        
       

      </div>
    </>
  );
}