import './App.css';
import Todo from "./components/Todo";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
  );
}

export default App;
