import React, { useState } from "react";
import style from "./LeftSection.module.css";

//Import Icons from @mui
import TwitterIcon from "@mui/icons-material/Twitter";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HomeIcon from "@mui/icons-material/Home";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

//Example to change color
import { blue } from "@mui/material/colors";

import Buttons from "../../Components/Buttons/Buttons";
import PopOver from "../../Library/PopOver/PopOver";
import TweetForm from "../../Components/TweetForm/TweetForm";

const arrs = [
  {
    icon: <HomeIcon style={{ fontSize: "28px" }} />,
    text: "Home",
  },
  {
    icon: <TagOutlinedIcon style={{ fontSize: "28px" }} />,
    text: "Explore",
  },

  {
    icon: <NotificationsNoneIcon style={{ fontSize: "28px" }} />,
    text: "Notification",
  },
  {
    icon: <MailOutlinedIcon style={{ fontSize: "28px" }} />,
    text: "Message",
  },
  {
    icon: <FeaturedPlayListOutlinedIcon style={{ fontSize: "28px" }} />,
    text: "Lists",
  },
  {
    icon: <BookmarkBorderOutlinedIcon style={{ fontSize: "28px" }} />,
    text: "Bookmarks",
  },
  {
    icon: <PermIdentityOutlinedIcon style={{ fontSize: "28px" }} />,
    text: "Profile",
  },
  {
    icon: <MoreHorizIcon style={{ fontSize: "28px" }} />,
    text: "More",
  },
];

function LeftSection() {
  const [openForm, setOpenForm] = useState();

  const openTweetForm = () => setOpenForm(<TweetForm />);

  return (
    <>
      <div className={style.Container}>
        <div className={style.iconDiv}>
          <TwitterIcon
            sx={{
              color: blue[600],
              fontSize: "xxx-large",
              marginLeft: "3rem",
              marginTop: "20px",
            }}
          />

          <div className={style.listDiv}>
            {arrs.map((arr, index) => {
              return (
                <>
                  <div key={index}>
                    <Buttons
                      className={style.icons}
                      image={arr.icon}
                      Sign={arr.text}
                    />
                  </div>
                </>
              );
            })}
          </div>
          <div className={style.tweetBtnDiv}>
            <Buttons
              className={style.tweetBtn}
              btnnext={openTweetForm}
              Sign="Tweet"
            />
            <div className={style.tweetForm}>{openForm}</div>
          </div>

          {/* <div>

          <PopOver/>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default LeftSection;
