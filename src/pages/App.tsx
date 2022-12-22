import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import style from "./App.module.scss"

function App() {
  return (
    <div className={style.AppStyle}>
      <div className={style.formWrapper}>
        <Form />
        <Stopwatch />
      </div>
      <div className={style.cardWrapper}>
        <List />
      </div>
    </div>
  );
}

export default App;
