import Post from './Post'
const MyPost = (props) =>{


  let postElements =props.postData.map((post) => <Post message={post.message} likesCount={post.likesCount}/>)
    return(
      
        
        <div className="post">
          <h2 className='post__title'>My post</h2>

          <div className="post__new">
            <input className='post__inpute' placeholder='Что у вас нового ? ' type="text" />
            <button className='btn btn_post'>Отправить</button>
          </div>
          <div className="post__content">
            {postElements}
          </div>
        </div>
      
    )
}
export default MyPost