import React  from "react";
import style from "./TweetForm.module.css";
import { Paper } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import { MdOutlineGifBox } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { tweetsAtom } from "../../Atom/Atom";
import { useSetRecoilState,useRecoilValue } from "recoil";


function TweetForm() {
  const posts = useRecoilValue(tweetsAtom)
  const setTweets = useSetRecoilState(tweetsAtom);
  const [tweet, setTweet] = React.useState({
    id: Date.now(),
    content:
      "Aspernatur accusamus porro perspiciatis occaecati assumenda modi. Eaque nesciunt quisquam quidem enim rem. Ab corrupti atque vero quos sed facilis odit nemo voluptas. Illo distinctio dolore accusantium. Sequi deserunt qui debitis explicabo. Ipsa atque suscipit repudiandae velit architecto.",
    createdAt: "2022-09-10T07:47:45.804Z",
    image: `https://picsum.photos/1000/500?q=${Date.now()}`,
    tweetedBy: {
      id: "a2b9f2ce-a4bf-45bd-a545-5ee996ffa451",
      name: "Verna Pouros",
    },
    likeCount: 563,
    commentCount: 504,
    reTweetsCount: 63,
    isLiked: false,
  });

  const handlSubmit = (event) => {
    event.preventDefault();
    setTweets((tweets) => {
      return [tweet, ...tweets];
    });
    localStorage.setItem('Tweets', JSON.stringify([...posts, tweet]))
  };

  const handleChange = (event) => {
    setTweet({
      ...tweet,
      [event.target.name]: event.target.value,
      image: `https://picsum.photos/1000/500?q=${Date.now()}`,
    });
  };

 

  return (
    <>
      <Paper
        sx={{
          width: "49vw",
          height: "20vh",
        }}
      >
        <form className={style.container} onSubmit={handlSubmit}>
          <div className={style.textDiv}>
            <img
              src="https://i.pravatar.cc/150?img=0"
              alt="profile-img"
              className={style.profileImg}
            />
            <textarea
              name="content"
              className={style.textarea}
              onChange={handleChange}
             
              placeholder="What is happening?!"
            ></textarea>
          </div>

          <div className={style.iconsDiv}>
            <ImageOutlinedIcon
              style={{ color: "rgb(29, 155, 240)", fontSize: "1.5rem" }}
            />
            <MdOutlineGifBox
              style={{ color: "rgb(29, 155, 240)", fontSize: "1.5rem" }}
            />
            <CiFaceSmile
              style={{ color: "rgb(29, 155, 240)", fontSize: "1.5rem" }}
            />
            <IoLocationOutline
              style={{ color: "rgb(29, 155, 240)", fontSize: "1.5rem" }}
            />
            <div className={style.tweetBtnDiv}>
              <button className={style.tweetBtn} >Tweet</button>
            </div>
          </div>
        </form>
      </Paper>
    </>
  );
}

export default TweetForm;
