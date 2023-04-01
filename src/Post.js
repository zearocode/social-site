import React from 'react';
import "./Post.css";
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import RecommendIcon from '@mui/icons-material/Recommend';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';


const Post = ({name, description, msg , photoUrl}) => {
  
  return (
    <div  className='post'>
        <div className="postHeader">
            <Avatar src={photoUrl} >{name[0]}</Avatar>
            <div className="post_Info">
                <h2>
                    {name}
                </h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post_body">
          <p>{msg}</p>
        </div>

        <div className="post_Buttons">
          <InputOption Icon={RecommendIcon} title="Like" color='gray' />
          <InputOption Icon={InsertCommentIcon} title="Comment" color='gray' />
          <InputOption Icon={ShareIcon} title="Share" color='gray' />
          <InputOption Icon={SendIcon} title="Send" color='gray' />
        </div>
    </div>
  )
  }

export default Post 