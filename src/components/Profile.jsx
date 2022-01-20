import MyPost from "./MyPost"

const Profile = () => {
  return (
    <div className="content">
      <div className="content-header">
        <img
          className="content-img"
          src="https://image.winudf.com/v2/image/Y29tLm1vdW50YWluc3dhbGxwYXBlci5oZC5tb3VudGFpbnNwaWN0dXJlcy5waG90b3MuYmFja2dyb3VuZC5jdXRlLmNvb2wuYXJ0Lm1vdW50YWluc2ltYWdlcy5oZC5mcmVlX3NjcmVlbl80XzE1MzM5NDQxMDJfMDIx/screen-4.jpg?fakeurl=1&type=.jpg"
        />
      </div>

      <MyPost />
    </div>
  );
};
export default Profile