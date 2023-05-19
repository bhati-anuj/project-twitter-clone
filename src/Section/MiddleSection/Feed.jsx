import React, { useState } from "react";
import style from "./Feed.module.css";
import FeedCard from "../../Components/FeedCard/FeedCard";
import { tweetsAtom } from "../../Atom/Atom";
import { useRecoilValue, useSetRecoilState } from "recoil";


function Feed() {
  const tweets = useRecoilValue(tweetsAtom);
  const setTweets = useSetRecoilState(tweetsAtom);


const[showMore, setShowMore] = useState(false);
const tweetToShow = showMore? tweets :tweets.slice(0,20);

const handleShowMoreClick=()=>{
  setShowMore((tweets) => !tweets);
}

  function toggleLike(index) {
    const tweet = { ...tweets[index] };

    const updated = [...tweets];
    tweet.isLiked = !tweet.isLiked;
    tweet.isLiked ? tweet.likeCount++ : tweet.likeCount--;
    updated[index] = tweet;
    setTweets(updated);
  }

  return (
    <>
      <div className={style.container}>
        
        {tweetToShow.map((tweet, index) => (
          <FeedCard
            onToggleLike={() => toggleLike(index)}
            key={tweet.id}
            tweet={tweet}
          />
        ))}

        {tweets.length > 2 &&(
          <button href="#" onClick={handleShowMoreClick}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        )}
        
      </div>
    </>
  );
}

export default Feed;
