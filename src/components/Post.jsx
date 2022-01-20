
const Post = (props) =>{
    return(
        
            <div className="post__item">
                <img className="post__img" src="https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/02781_800x480.jpg" alt="" />
                <h2>{props.message}</h2>
                <div>
                    <span>Like: {props.likecount}</span>
                </div>
            </div>
           
      
    )
}
export default Post