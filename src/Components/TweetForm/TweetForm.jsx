import React from "react";
import style from "./TweetForm.module.css";
import { Paper } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import { MdOutlineGifBox } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

function TweetForm() {
  return (
    <>
      <Paper
        sx={{
          width: "49vw",
          height: "20vh",
        }}
      >
        <form className={style.container}>
          <div className={style.textDiv}>
            <img
              src="https://i.pravatar.cc/150?img=0"
              alt="profile-img"
              className={style.profileImg}
            />
            <textarea
              name="content"
              className={style.textarea}
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
              <button className={style.tweetBtn}>Tweet</button>
            </div>
          </div>
        </form>
      </Paper>
    </>
  );
}

export default TweetForm;
