import { useCallback } from "react";
import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";
const TodoListItem = (props) => {
  const removeItemHandler = useCallback(() => {
    props.removeOnClick(props.data.id);
  }, [props]);
  return (
    <li className="TodoListItem">
      <div className="checkbox">
        <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>
        <div className="text"></div>
      </div>
      <div className="remove" onClick={removeItemHandler}>
        <MdRemoveCircleOutline></MdRemoveCircleOutline>
      </div>
    </li>
  );
};

export default TodoListItem;
