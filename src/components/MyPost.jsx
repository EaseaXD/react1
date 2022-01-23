import React from 'react';
import Post from './Post';

const MyPost = (props) =>{


  let postElements =props.postData.map((post) => <Post message={post.message} likesCount={post.likesCount}/>);
  let newPostElement = React.createRef();
  
  let addPost = () => {
    props.addPost();
    props.updateNewPostChangeText("");
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostChangeText(text);
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