import React from 'react';
import Post from "./Post"
import {updateNewPostTextActionCreator, addPostActionCreator} from "../redux/profile-reducer";

const MyPost = (props) =>{

  let state = props.store.getState().profilePage;
  let postElements =state.postData.map((post) => <Post message={post.message} likesCount={post.likesCount}/>);
  let newPostElement = React.createRef();
  
  let addPost = () => {
    props.dispatch(addPostActionCreator());
    
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action =updateNewPostTextActionCreator(text);
    
    props.dispatch(action);
  }

    return(
      
        <div className="post">
          <h2 className='post__title'>My post</h2>

          <div className="post__new">
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} className='post__textarea' />

            <button onClick={addPost} className='btn btn_post'>Отправить</button>
          </div>
          <div className="post__content">
            {postElements}
          </div>
        </div>
      
    )
}
export default MyPost