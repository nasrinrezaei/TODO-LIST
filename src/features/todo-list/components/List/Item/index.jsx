import clsx from "clsx";
import classes from "./index.module.scss";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

function Item({
  number,
  item,
  onDelete = () => {},
  onEdit = () => {},
  changeStateOfItem = () => {},
}) {
  const [value, setValue] = useState(item?.txt);
  const [isEditing, setIsEditing] = useState(false);
  const onInput = (e) => setValue(e.target.value);
  const deleteItem = () => {
    onDelete?.(item.id);
  };
  const editItem = () => {
    setIsEditing((prev) => !prev);
  };
  const saveEditedItem = (e) => {
    onEdit?.(item.id, value);
    setIsEditing(false);
  };
  const changeState = () => {
    changeStateOfItem?.(item?.id, !item?.isDone);
  };
  return (
    <div className={classes[`item`]}>
      <div>{number}.</div>
      {isEditing ? (
        <input value={value} onInput={onInput} />
      ) : (
        <div
          className={clsx([
            {
              [classes[`item--is-done`]]: item?.isDone,
            },
          ])}
        >
          {item?.txt}
        </div>
      )}
      <button onClick={changeState}>
        {!item?.isDone ? "mark as Done" : "mark as pending"}
      </button>
      <button onClick={isEditing ? saveEditedItem : editItem}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
}

export default Item;
