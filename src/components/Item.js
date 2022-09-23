import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../context/todoProvider";

const Item = (props) => {
  const { itemList } = useContext(TodoContext);
  const renderList = itemList.filter((item) => item.isDone === props.done);

  return (
    <ItemSection>
      <h2>{props.title}</h2>
      <ItemList>
        {renderList.map((item) => {
          return <TodoItem key={item.id} item={item} />;
        })}
      </ItemList>
    </ItemSection>
  );
};

const TodoItem = (props) => {
  const { todoDispatch } = useContext(TodoContext);

  return (
    <li>
      <span
        onClick={() => todoDispatch({ type: "TOGGLE", value: props.item.id })}
      >
        {props.item.text}
      </span>
      <button
        onClick={() => todoDispatch({ type: "REMOVE", value: props.item.id })}
      >
        🧹
      </button>
    </li>
  );
};

const ItemSection = styled.section`
  flex: 0.5;
  border-top: 1px solid rgb(213, 213, 213);
  overflow: auto;
`;

const ItemList = styled.ul`
  cursor: pointer;
  padding-left: 1.5rem;
  margin-top: 0.5rem;
  overflow: auto;
`;

export default Item;
