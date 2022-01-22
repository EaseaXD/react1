import { NavLink } from "react-router-dom";




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
let DialogsElements = props.state.dialogsPost.map((dialog)=> <DialogItem name={dialog.name} id={dialog.id} />);

let MessageElements =props.state.dialogsMessage.map(mess => <Meassage message={mess.message} />);
  return (
    <div className="dialogs">
      <div className="dialogs__items">
        {DialogsElements}
      </div>

      <div className="dialogs__messages">
          {MessageElements}
         <div className="dialogs__messagesContent">
            <input className="dialogs__input" type="text" />
            <button className="btn btn_message">Отправить</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
