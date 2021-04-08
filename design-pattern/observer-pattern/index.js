import State from "./lib/State";
import List from "./component/list";
import Users from "./utils/users";

const AppState = new State();
const nameList = new List();

// this will re-render when state changes
AppState.update({ user });
AppState.addObserver(nameList);

// on load, perform inital render...
nameList.render;
