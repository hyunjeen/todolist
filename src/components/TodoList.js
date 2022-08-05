import TodoListItem from "./TodoListItem";
import "./TodoList.scss";
import "./TodoListItem.scss";
import { useCallback, useState } from "react";
const DUMMY_DATA = [{ id: 1, title: "밥먹기" }];

const TodoList = (id) => {
  const [data, setdata] = useState(DUMMY_DATA);

  const removeOnClick = useCallback(
    (id) => {
      const New_DATA = data.filter((data) => data.id !== id);
      setdata(New_DATA);
    },
    [data]
  );
  return (
    <ul className="TodoList">
      {DUMMY_DATA.map((data) => (
        <TodoListItem data={data} removeOnClick={removeOnClick}></TodoListItem>
      ))}
    </ul>
  );
};

export default TodoList;
