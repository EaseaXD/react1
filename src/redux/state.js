let store = {
  _state : {
    profilePage:{
    postData: [
      {id: 1, message: "Vitek", likesCount: 26}, 
      {id: 2, message: "Vanya" ,likesCount: 2}, 
      {id: 3, message: "Vanyadsd" ,likesCount: 4},
      ],
      newPostText: 'it-react',
    
  },
  dialogsPage: {
      dialogsPost: [
          {id: 1, name: "Vitek"}, 
          {id: 2, name: "Vanya"}, 
          {id: 3, name: "Vasya"}, 
          {id: 4, name: "Vitalik"}, 
          {id: 5, name: "Sasha"},
          {id: 6, name: "Sanek"}
        ],
    dialogsMessage: [
      {id: 1, message: "hi"}, 
      {id: 2, message: "hov are you"}, 
      {id: 3, message: "i am fine"}, 
      {id: 4, message: "Vitalik"}, 
      {id: 5, message: "Sasha"},
      {id: 6, message: "Sanek"}
    ]
  }},
  getState(){
    return this._state;
  },
  rerenderEntireThee () {
    console.log("vitka");
  },
   addPost () {
    let newPost = {
      id: 5 ,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    }
    this._state.profilePage.postData.push(newPost);
    this._rerenderEntireThee(this._state);
  },
  updateNewPostChangeText  (newText) {
    
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireThee(this._state);
  },
  subscribe (observer) {
    this._rerenderEntireThee = observer;
  }
}




  export default store;
  window.state = store ;
