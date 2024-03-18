import React from "react";

const Resultados = ({ formData }) => {
    return (
        <div>
            <h2>Datos del formulario:</h2>
            <ul>
                <li>Nombre: {formData.nombre}</li>
                <li>Apellido: {formData.apellido}</li>
                <li>Correo electrónico: {formData.correoElectronico}</li>
                <li>Contraseña: {formData.contrasena}</li>
                <li>Confirmar contraseña: {formData.confirmarContrasena}</li>
            </ul>
        </div>
    );
};

export default Resultados;
