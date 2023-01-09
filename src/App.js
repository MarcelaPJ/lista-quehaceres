import React, { useState } from 'react';
import './App.css';
import Agregar from './componentes/AgregarTarea';
import Tareas from './componentes/ListaTareas';

function App() {
  const [lista, setLista] = useState([]);
  return (
    <div className="App">
      <Agregar lista={ lista } setLista={setLista} />
      {lista.map((tarea, i) => (
        <Tareas key={ tarea } tarea={tarea} setLista={setLista} index={i} lista={lista}/>
      ))}
      
    </div>
  );
}

export default App;
