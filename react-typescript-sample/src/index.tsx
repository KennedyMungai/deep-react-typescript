import ReactDOM from "react-dom";
import UserSearchWithRef from "./state/UserSearchWithRef";


const App = () => {
  return (
    <div>
      <UserSearchWithRef />
    </div>
  )
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);