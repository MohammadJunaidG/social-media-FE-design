import "./post.css";
import { MoreVert } from "@material-ui/icons";
import {Users} from "../../dummyData"
import { useState } from "react";
// import axios from "axios";
// import { format } from "timeago.js";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

export default function Post({post}) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
    //   try {
    //     axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    //   } catch (err) {}
    };
  // const [like, setLike] = useState(post.likes.length);
  // const [isLiked, setIsLiked] = useState(false);
  // const [user, setUser] = useState({}); 
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // const { user: currentUser } = useContext(AuthContext);

  // useEffect(() => {
  //   setIsLiked(post.likes.includes(currentUser._id));
  // }, [currentUser._id, post.likes]);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await axios.get(`/users?userId=${post.userId}`);
  //     setUser(res.data);
  //   };
  //   fetchUser();
  // }, [post.userId]);


  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" className="postProfileImg" />
            <span className="postUsername">
            {Users.filter(u=>u.id===post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight"><MoreVert /></div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="../assets/like.png" alt="" className="likeIcon" onClick={likeHandler} />
            <img src="../assets/heart.png" alt="" className="likeIcon" onClick={likeHandler} />
            <span className="postLikeCounter">
              {like} peoples like it
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>  
          </div>
        </div>
        
      </div>
    </div>
  );
}
