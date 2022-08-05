import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  return (
    <div>
      <TodoTemplate>
        <TodoInsert></TodoInsert>
        <TodoList></TodoList>
      </TodoTemplate>
    </div>
  );
}

export default App;
