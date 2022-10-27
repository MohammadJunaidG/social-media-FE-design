import './share.css'
import {PermMedia, 
  Label,
  Room,
  EmojiEmotions
} from "@material-ui/icons"
export default function share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="profile">
          <img src="/assets/person/11.jpg" className='shareProfileImg' alt="" />
          <span className='profileName'>Akbar</span>

        </div>
        <div className="shareTop">
          <input placeholder="What's in your mind?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="#FF2D53" className="shareIcon" />
              <span className='shareOptionText'>Photo/Video</span>
            </div>
            <div className="shareOption">
              <Label  htmlColor="#002DF7" className="shareIcon" />
              <span className='shareOptionText'>Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="#1A8103" className="shareIcon" />
              <span className='shareOptionText'>Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="#CBB50E" className="shareIcon" />
              <span className='shareOptionText'>Feelings</span>
            </div>
            <button className="shareButton" type="submit">Share</button>
          </div>
        </div>
      </div>
    </div>
  )
}
