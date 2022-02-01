const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_MESSAGE = "CHANGE-MESSAGE";
let initialState = {
    
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
    
};
const dialogsReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
              }
              state.dialogsMessage.push(newMessage);
              return state;
        case CHANGE_MESSAGE:
            state.newMessageText = action.message;
            return state;
    }
    
    return state;
}
export const addMessageActionCreator = () =>{
    return {
      type: ADD_MESSAGE,
    }
  }
  export const changeMessageActionCreator = (text) =>{
    return {
      type: CHANGE_MESSAGE,
      message: text,
    }
  }
export default dialogsReducer