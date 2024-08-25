import React from "react";
import TodoList from "../component/TodoList";


// aqui creo mi function home que me va renderizar todos mis componente dentro del return
// Aqui creo mi clase app. que es el body de mi aplicacion.
function home() {
 
  return (
    <div className="App">
      <h1 className="text-center">Todos</h1>
      <TodoList />
    </div>
  );
};

export default home;