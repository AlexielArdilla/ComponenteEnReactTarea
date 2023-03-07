import React from "react";
import NombreProducto from './NombreProducto';
import DescripcionProducto from './DescripcionProducto';
import imagenProducto from './zapatillas_nike.jpg';
import './Producto.css';
//import Footer from "./Footer";

function Producto(props) {

    return (
        <>
            <br/>
            <h1>Producto:</h1>
            <NombreProducto nombre="Zapatillas Nike" />
            <img src={imagenProducto} alt="Foto de zapatillas Nike de volver al futuro 2"/>
            <DescripcionProducto descripcion="Zapatillas de volver al futuro 2" />
            <p>Precio: $ {props.precio}</p>
            <p>SKU: {props.SKU}</p>
            <p>Cant. Disponible: {props.cantidad_disponible}</p>
            <br/>
            <p>Codeado con amor por Alejandro G Vera para UTN 2023</p>
        </>
    );
}

export default Producto;