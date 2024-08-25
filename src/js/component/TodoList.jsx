
// Aqui importo React y el hook useState de la librería de React.
//  useState permite a los componentes funcionales manejar y almacenar estados internos.
import React, { useState } from "react";

// Aqui defino mi componente TodoList. Este componente utiliza dos estados:
// inputValue: Guarda el valor actual del input (campo de texto).
// listaTareas: Es un array que guarda la lista de tareas ingresadas por el usuario.

function TodoList(props) {
  const [inputValue, setInputValue] = useState("");
  const [listaTareas, setlistaTareas] = useState([]);

// Aqui creo mi function handleDelete: Esta función recibe el indexValue (el índice de la tarea que se desea eliminar) 

  const handleDelete =(indexValue) => {
    console.log("delete")

// Aqui filtra la lista de tareas para crear una nueva lista sin la tarea seleccionada. 
// Luego, actualiza listaTareas con la nueva lista. 
    
   const newList = listaTareas.filter((tarea, index) => index !== indexValue)
   setlistaTareas(newList)
    console.log(listaTareas)
  }


  return (

// Aqui el componente devuelve un contenedor div con la clase container.

    <div className="container">

{/* Aqui creo mi input con mi dos evento que explico mas abajo */}
{/* Aqui El campo de texto (input) está controlado por el estado inputValue.      */}

      <input 
        type="text"
        placeholder="Lista de Todos"
        value={inputValue}

// Aqui creo el evento onChange: Cada vez que se escribe algo en el input, se actualiza inputValue con el valor actual del input.        
        onChange={(evento) => {
          setInputValue(evento.target.value)
          console.log(inputValue)
        }}
// Aqui creo el evento onKeyDown: Cuando se presiona una tecla, se verifica si es la tecla "Enter". Si lo es.
// se agrega la tarea al array listaTareas usando el método concat y luego se limpia el input estableciendo inputValue como una cadena vacía ("").
        onKeyDown={(evento) => {
          if (evento.key === "Enter") {
            setlistaTareas(listaTareas.concat([inputValue]))
            console.log(listaTareas)
            setInputValue("")
          }
        }}
      >

      </input>

 {/* Aqui creo otro div donde voy a introducir mi lista ul y un boton con evento  */}
 {/* Renderizado de la Lista:
Se itera sobre listaTareas usando el método map para generar una lista de tareas.
Cada tarea se envuelve en un elemento ul con un botón para eliminarla. */}
      <div className="lista">
        <ul>
          {listaTareas.map((tarea, index) =>{
            return(
              <ul key={index}>

{/* Aqui creo el boton con el evento que llama a handleDelete con el índice de la tarea para eliminarla.*/}
                <button onClick={() =>handleDelete(index)}type="button" className="btn-close btn-close-black" aria-label="Close"></button>
               
                {tarea}

              </ul>
            )
          })  }
        </ul>
      </div>

      
    </div >




  );
};

// Aqui Finalmente, el componente TodoList se exporta para que pueda ser importado y utilizado en otras partes de la aplicación.

export default TodoList;
