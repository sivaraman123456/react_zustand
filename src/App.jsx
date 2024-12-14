import "./App.css";
import ShowCount from "./component/ShowCount";
import { useStore } from "./hook/generalstore";
function App() {
  const { increasePopulation } = useStore();

  return (
    <>
    <h1>Counting</h1>
      <button onClick={increasePopulation}>increase</button>
      <ShowCount />
    </>
  );
}

export default App;
