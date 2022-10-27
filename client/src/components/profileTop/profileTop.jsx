import './profileTop.css'

export default function profileTop() {
  return (
        
    <div className="profileTop">
      <div className="coverImgContainer">
        <img src="../assets/post/11.jpeg" alt="" className="coverPhoto" />
      </div>
      <div className="profileImg">
        <img src="../assets/person/11.jpg" alt="" className="profileUserImg" />
      </div>
      <div className="profileInfo">
        <span className="profileInfoName">Mohammad Akbar</span>

        <span className="profileInfoDesc">Artist</span>
      
      </div>
      <hr className='profileHr' />
      

    </div>
      
  
  )
}
