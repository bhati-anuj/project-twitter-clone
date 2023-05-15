import React, { useState } from "react";
import style from "./Feed.module.css";
import FeedCard from "../../Components/FeedCard/FeedCard";
import { tweetsAtom } from "../../Atom/Atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import tweetData from "../MiddleSection/tweets.json";  //this is an alternative method i used it for temp

function Feed() {
//   const tweets = useRecoilValue(tweetsAtom);
//   const setTweets = useSetRecoilState(tweetsAtom);
const [tweets, setTweets] = useState(tweetData);

  function toggleLike(index) {
    const tweet = { ...tweets[index] };

    const updated = [...tweets];
    tweet.isLiked = !tweet.isLiked;
    tweet.isLiked ? tweet.likeCount++ : tweet.likeCount--;
    setTweets(updated);
  }

  return (
    <>
      <div className={style.container}>
        
        {tweets.map((tweet, index) => (
          <FeedCard
            onToggleLike={() => toggleLike(index)}
            key={tweet.id}
            tweet={tweet}
          />
        ))}
        
      </div>
    </>
  );
}

export default Feed;
