import React, { useEffect, useState } from 'react';
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import InputOption from './InputOption';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { CalendarViewDayRounded } from '@mui/icons-material';
import Post from './Post';
import { db } from './firebase';
import { serverTimestamp } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';






function Feed() {

  const user = useSelector(selectUser);
  
  const [input , setInput] = useState("");

  const [posts, setPosts] = useState([]);



  
  useEffect(() => {
   db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => 
    setPosts(snapshot.docs.map((doc) => (
      {
        id: doc.id,
        data: doc.data(),
      }
    )))
  );
  } , []);


  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
         name: user.displayName,
         description: user.email,
         msg: input ,
         photoUrl : user.photoUrl || "",
         timestamp: serverTimestamp() ,
    });

    setInput("");
  };


  return (
   <div className="feed">
       <div className="feed_inputContainer">
           <div className="feed_input">
            <CreateIcon />
            <form>
              <input value={input} onChange={e => setInput(e.target.value)} type='text' />
              <button onClick={sendPost} type='submit'>Send</button>

            </form>
           </div>
           <div className="feed_inputOptions">
            <InputOption title="Photo" Icon={ImageIcon} color= 'blue' />
            <InputOption title="Event" Icon={EventNoteIcon} color= '#FF5733' />
            <InputOption title="Video" Icon={SubscriptionsIcon} color= 'green' />
            <InputOption title="Calender" Icon={CalendarViewDayRounded} color= 'purple' />
           </div>
       </div>
       
       
        {posts.map(({id , data: {name , description, msg , photoUrl} }) => (
          <Post 
          key={id}
          name={name}
          description={description}
          msg={msg}
          photoUrl={photoUrl}
          />

        ))}
        

      </div>
  
  );
}

export default Feed;