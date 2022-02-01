import { combineReducers, createStore } from "redux";
import siderbarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
let reducers = combineReducers({
    profilePage: profileReducer ,
    dialogsPage: dialogsReducer ,
    sidebar: siderbarReducer ,
});

let store = createStore(reducers);

export default store;