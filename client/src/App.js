import { useEffect, useState } from "react";
import { createTodo, listTodos } from "./api";
import Preloader from "./components/Preloader";

function App() {
  const [todo, setTodo] = useState({ title: "", content: "" });
  const [todos, setTodos] = useState(null);
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    let currentTodo =
      currentId !== 0
        ? todos.data.find((todo) => todo._id === currentId)
        : { title: "", content: "" };
    setTodo(currentTodo);
  }, [currentId]);


  useEffect(() => {
    const fetchData = async () => {
      const result = await listTodos();
      setTodos(result);
    };
    fetchData();
  }, []);

  const clear = () => {
    setCurrentId(0);
    setTodo({ title: "", content: "" });
  };

  useEffect(() => {
    const clearField = (e) => {
      if (e.keyCode === 27) {
        clear();
      }
    };
    window.addEventListener("keydown", clearField);
    return () => window.removeEventListener("keydown", clearField);
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const result = await createTodo(todo);
    console.log(result);
    console.log(todos);
    //[...todos, result.data]
    todos.data.push(result.data);
    console.log(todos);
    //setTodos(todos);
  };

  return (
    <div className="container">
      <div className="row">
        {JSON.stringify(todo)}
        <form className="col s12" onSubmit={onSubmitHandler}>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">title</i>
              <input
                id="todo"
                type="text"
                className="validate"
                value={todo.title}
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
              />
              <label htmlFor="todo">To do</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">description</i>
              <input
                id="content"
                type="text"
                className="validate"
                value={todo.content}
                onChange={(e) => setTodo({ ...todo, content: e.target.value })}
              />
              <label htmlFor="content">Content</label>
            </div>
          </div>
          <div className="row right-align">
            <button className="waves-effect waves-light btn">Submit</button>
          </div>
        </form>

        {!todos ? (
          <Preloader />
        ) : todos.data.length > 0 ? (
          <div className="row">
            {todos.data.map((todo) => (
              <div
                key={todo._id}
                onClick={() => setCurrentId(todo._id)}
                className="col s12 m6"
              >
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">{todo.title}</span>
                    <p>{todo.content}</p>
                  </div>
                  <div className="card-action">
                    {/* <a href="#">This is a link</a>
                    <a href="#">This is a link</a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Nothing to show</div>
        )}
      </div>
    </div>
  );
}

export default App;
