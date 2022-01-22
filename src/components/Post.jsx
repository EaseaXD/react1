
const Post = (props) =>{
    return(
        
            <div className="post__item">
                <img className="post__img" src="https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/02781_800x480.jpg" alt="" />
                <p>{props.message}</p>
                <div>
                    <span>Like: {props.likesCount}</span>
                </div>
            </div>
           
      
    )
}
export default Post