import React from "react";
import style from "./FeedCard.module.css";
import { AiFillHeart, AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RxBarChart } from "react-icons/rx";
import { FiShare } from "react-icons/fi";
import { Paper } from "@mui/material";

function FeedCard(props) {
  const tweet = props.tweet;
  return (
    <>
      <Paper elevation={2} sx={{ margin: "0rem" }}>
        <div className={style.container}>
          <div className={style.postProfileDiv}>
            <img
              src={`https://picsum.photos/1000/500?q=${Date.now()}`}
              className={style.postProfileImg}
            />

            <h3> {tweet.tweetedBy.name}</h3>
            <p> {"@"+tweet.tweetedBy.name}</p>
          </div>
          <div className={style.contentDiv}>
            <p>{tweet.content}</p>
            <img className={style.postImg} src={tweet.image} alt="Image" />
            <br/>
            <div className={style.likeBtn}>
              <FaRegComment color={"disabled"} size={25} />
              {tweet.commentCount}
              <AiOutlineRetweet size={25} />
              {tweet.reTweetsCount}
              <span onClick={props.onToggleLike}>
                {tweet.isLiked ? (
                  <AiFillHeart size={25} color="red" />
                ) : (
                  <AiOutlineHeart size={25} />
                )}
              </span>
              {tweet.likeCount}
              <RxBarChart size={25} />
              {tweet.reTweetsCount}
              <FiShare />
              
            </div>
          </div>
        </div>
      </Paper>
    </>
  );
}

export default FeedCard;
