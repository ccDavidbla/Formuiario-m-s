import React from "react";

const Formularios = ({ formData, errores, handleInputChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
            />
            {errores.nombre && <p className="error">{errores.nombre}</p>}
            <br />
            <label htmlFor="apellido">Apellido:</label>
            <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleInputChange}
            />
            {errores.apellido && <p className="error">{errores.apellido}</p>}
            <br />
            <label htmlFor="correoElectronico">Correo electrónico:</label>
            <input
                type="email"
                id="correoElectronico"
                name="correoElectronico"
                value={formData.correoElectronico}
                onChange={handleInputChange}
            />
            {errores.correoElectronico && <p className="error">{errores.correoElectronico}</p>}
            <br />
            <label htmlFor="contrasena">Contraseña:</label>
            <input
                type="password"
                id="contrasena"
                name="contrasena"
                value={formData.contrasena}
                onChange={handleInputChange}
            />
            {errores.contrasena && <p className="error">{errores.contrasena}</p>}
            <br />
            <label htmlFor="confirmarContrasena">Confirmar contraseña:</label>
            <input
                type="password"
                id="confirmarContrasena"
                name="confirmarContrasena"
                value={formData.confirmarContrasena}
                onChange={handleInputChange}
            />
            {errores.confirmarContrasena && <p className="error">{errores.confirmarContrasena}</p>}
            <br />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formularios;