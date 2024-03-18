import React, { useState } from "react";
import Formularios from "./Components/Formulario";
import Resultados from "./Components/Resultados";

const App = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correoElectronico: "",
    contrasena: "",
    confirmarContrasena: "",
  });

  const [errores, setErrores] = useState({
    nombre: "",
    apellido: "",
    correoElectronico: "",
    contrasena: "",
    confirmarContrasena: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí se procesaría el formulario
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "nombre":
      case "apellido":
        if (value.length < 2) {
          error = "El campo debe tener al menos 2 caracteres";
        }
        break;
      case "correoElectronico":
        if (value.length < 5) {
          error = "El campo debe tener al menos 5 caracteres";
        }
        break;
      case "contrasena":
      case "confirmarContrasena":
        if (value.length < 8) {
          error = "El campo debe tener al menos 8 caracteres";
        } else if (name === "confirmarContrasena" && value !== formData.contrasena) {
          error = "Las contraseñas no coinciden";
        }
        break;
      default:
        break;
    }
    setErrores({ ...errores, [name]: error });
  };

  return (
    <div>
      <h1>Formulario</h1>
      <Formularios
        formData={formData}
        errores={errores}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <Resultados formData={formData} />
    </div>
  );
};

export default App;
