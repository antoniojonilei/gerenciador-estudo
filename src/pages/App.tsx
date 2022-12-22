import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import style from "./App.module.scss"

function App() {
  return (
    <div className={style.AppStyle}>
        <div>
          <Form />
          <Stopwatch />
        </div>     
        <List />     
    </div>
  );
}

export default App;
