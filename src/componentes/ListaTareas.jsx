import React from "react";

const Tareas = (props) => {
    const {tarea, index, lista, setLista} = props;

    const click = () => {
        const nuevaLista = () => lista.filter((tarea) => lista.indexOf(tarea) !== index);
        setLista(nuevaLista);
    };

    const cambiar = (e) => {
        lista[index].completada = !lista[index].completada;
    setLista([...lista]);
    }
    return (
        <div>
            <h4>{tarea.name}</h4>
            <div>
                <label> Completada </label>
                <input type="checkbox" name='' checked={tarea.completada} onChange={ cambiar }></input>
                <button onClick={ click }> Eliminar </button>
            </div>
    </div>
    );
}
export default Tareas;
