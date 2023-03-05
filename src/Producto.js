import React from "react";
import NombreProducto from './NombreProducto';
import DescripcionProducto from './DescripcionProducto';
import imagenProducto from './zapatillas_nike.jpg';

function Producto() {

    return (
        <>
            <h1>Producto:</h1>
            <NombreProducto nombre="Zapatillas Nike" />
            
            <DescripcionProducto descripcion="Zapatillas de volver al futuro 2" />

        </>
    );
}

export default Producto;