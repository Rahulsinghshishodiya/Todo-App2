import React, { useState } from "react";

function TodoApp() {
  // const todos = ["item 1", "item 2", "item 3", "item 4"];

  const [todos, setTodos] = useState([
    // { title: "item 1" },
    // { title: "item 2" },
    // { title: "item 3" },
    // { title: "item 4" },
  ]);
  // console.log("todostodostodostodos", todos);
  const [newtodo, setNewTodo] = useState("");
  const [updateitem, setUpdateItem] = useState([]);
  const [updateItemIndex, setUpdateItemIndex] = useState(null);
  //console.log("updateitemupdateitemupdateitem", updateitem);
  // console.log("newtodonewtodonewtodonewtodo", newtodo);
  const handleAddNewTodo = (e) => {
    //console.log(e.target.value);

    setNewTodo(e.target.value);
  };

  const handleSubmitTodo = () => {
    console.log(updateitem.length);

    if (updateItemIndex === null) {
      setTodos([...todos, newtodo]);
      setNewTodo("");
    } else {
      // const copyTodo = [...todos];
      // console.log(copyTodo.indexOf(newtodo[0]), "iiiiiiiiiiii");

      todos.splice(updateItemIndex, 1, newtodo);
      setTodos(todos);
      setUpdateItem([]);
      setNewTodo("");
      setUpdateItemIndex(null);
    }
  };

  const toRemoveItem = (itemIndx) => {
    // todos.splice(itemIndx, 1);
    // setTodos(todos);
    // todos.remove(e);
    //setTodos((prev) => prev.filter(prevIndex) => (prevIndex));
    const newItem = [...todos];
    newItem.splice(itemIndx, 1);
    setTodos(newItem);
  };
  // console.log("aaaaaaaaaaaaaaaa", todos);

  const toEditItem = (todo, indexItem) => {
    // console.log(todo);

    setUpdateItemIndex(indexItem);
    // const index = todos.indexOf(todo);
    // console.log(index);
    setTodos((prev) =>
      prev.map((previtem) => {
        if (prev.indexOf(previtem) === indexItem) {
          setUpdateItem(todo);
          setNewTodo([todo]);
          return todo;
        } else {
          return previtem;
        }
      })
    );
    // const todoEdit = [...todos];
    // todoEdit.map((item) => {
    //   // console.log(item);
    //   // console.log(item.indexItem);
    //   if (item === todo) {
    //     //console.log(item);
    //     return setNewTodo(item);
    //   } else {
    //     return item;
    //   }
    // });
    //setTodos(todoEdit);
  };

  return (
    <>
      <div className="todo-wraper">
        <h1>Todo App</h1>
        <div className="todo-form">
          <input
            type="text"
            placeholder="Enter Your Todo..."
            onChange={handleAddNewTodo}
            value={newtodo}
          />
          <button onClick={handleSubmitTodo}>
            {" "}
            {updateItemIndex !== null ? "Update" : "Enter"}
          </button>
        </div>
        <div className="todo-list">
          {todos.map((todo, index) => {
            return (
              <div className="todo-item">
                {todo}

                <button onClick={() => toRemoveItem(index)}>Delete</button>

                <button onClick={() => toEditItem(todo, index)}>Edit</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TodoApp;
