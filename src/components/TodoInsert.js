import "./TodoInsert.scss";
import { MdAdd } from "react-icons/md";
const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할일을 입력하세요"></input>
      <button type="submit">
        <MdAdd></MdAdd>
      </button>
    </form>
  );
};

export default TodoInsert;
