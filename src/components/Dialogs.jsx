import { NavLink } from "react-router-dom";
import React from "react";
import { addMessageActionCreator ,changeMessageActionCreator} from "../redux/dialogs-reducer";


const Meassage = (props) =>{
   return(
      <div className="dialogs__message">{props.message}</div>
      )};
const DialogItem = (props) => {
  return (
    
    <div className="dialogs__item">
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};



const Dialogs = (props) => {
let state = props.store.getState().dialogsPage;
let DialogsElements = state.dialogsPost.map((dialog)=> <DialogItem name={dialog.name} id={dialog.id} />);

let MessageElements =state.dialogsMessage.map(mess => <Meassage message={mess.message} />);

let newMessageElement = React.createRef();

let onMessageChange = () => {
  let message = newMessageElement.current.value;
  props.dispatch(changeMessageActionCreator(message));
}

let addMessage = () =>{
  props.dispatch(addMessageActionCreator());
  
}
return (
    <div className="dialogs">
      <div className="dialogs__items">
        {DialogsElements}
      </div>

      <div className="dialogs__messages">
          {MessageElements}
         <div className="dialogs__messagesContent">
          
            <textarea onChange={onMessageChange}  ref={newMessageElement}   className="dialogs__input" type="text" />
            <button onClick={addMessage} className="btn btn_message">Отправить</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
