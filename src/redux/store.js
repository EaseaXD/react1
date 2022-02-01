import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import siderbarReducer from "./sidebar-reducer";


export let store = {
  _state : {
    profilePage:{
    postData: [
      {id: 1, message: "Vitek", likesCount: 26}, 
      {id: 2, message: "Vanya" ,likesCount: 2}, 
      {id: 3, message: "Vanyadsd" ,likesCount: 4},
      ],
      newPostText: '',
      
    
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
    ],
    newMessageText: '',
  },
  sidebar: {},
},
  getState(){ 
    return this._state;
  },
  subscribe (observer) {
    this._rerenderEntireThee = observer;
  },
  rerenderEntireThee () {
    console.log("vitka");
  },

   
  dispatch(action){

    this._state.profilePage = profileReducer(this._state.profilePage , action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage , action);
    this._state.sidebar = siderbarReducer(this._state.sidebar , action);
    
    this._rerenderEntireThee(this._state);

},


}




  