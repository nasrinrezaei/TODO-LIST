import Item from "./Item";
import classes from "./index.module.scss";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

function List() {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  const onInput = (e) => setValue(e.target.value);
  const createNewItem = (e) => {
    if (e.key === "Enter" && !!e.target.value) {
      setItems((prev) => {
        return [
          ...prev,
          {
            id: `${Math.random()}-${Math.random()}`,
            txt: e.target.value,
            isDone: false,
          },
        ];
      });
      setValue("");
    }
  };
  const onDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };
  const onEdit = (id, txt) => {
    setItems((prev) =>
      prev.map((item) => (item.id == id ? { ...item, txt: txt } : { ...item }))
    );
  };
  const changeStateOfItem = (id, state) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id == id ? { ...item, isDone: state } : { ...item }
      )
    );
  };
  return (
    <div>
      <h1>TODO LIST</h1>
      <div className={classes[`list__input`]}>
        <input
          type="text"
          placeholder="type a text and press Enter"
          onKeyDown={createNewItem}
          value={value}
          onInput={onInput}
        />
      </div>
      <div className={classes[`list__items-container`]}>
        {items.map((item, index) => (
          <Item
            item={item}
            key={item.id}
            number={index + 1}
            onDelete={onDelete}
            onEdit={onEdit}
            changeStateOfItem={changeStateOfItem}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
