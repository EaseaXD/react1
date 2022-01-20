import Post from './Post'
const MyPost = () =>{
    return(
        <div className="post">
          <h2 className='post__title'>My post</h2>

          <div className="post__new">
            <input className='post__inpute' placeholder='Что у вас нового ? ' type="text" />
            <button className='btn btn_post'>Отправить</button>
          </div>
          <div className="post__content">
            <Post message="Hi. How are you" likecount="23" />
            <Post message="I am fine" likecount="0" />
          </div>
        </div>
      
    )
}
export default MyPost