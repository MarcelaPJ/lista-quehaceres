import React,{ useState } from "react";

const Agregar = (props) => {
    const { lista, setLista } = props;

    const [agregar, setAgregar] = useState("");

    const cambiar = (e) => {
        setAgregar(e.target.value);
    }
    
    const enviar = (e) => {
        e.preventDefault();
    
        
        let tarea = {
            name: agregar,
            completada: false
        };

        setLista(
            [...lista, tarea]
        ); e.target.value = ""
    }

    return (
        <form onSubmit={ enviar }>
            <input type="text" name="tarea" value={ agregar } onChange={ cambiar }/>
            <br/>
            <button> Agregar tarea </button>
        </form>
    );
}
export default Agregar;

