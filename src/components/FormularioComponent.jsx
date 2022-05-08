import { useState } from "react";

function FormularioComponent() {
  const [name, SetName] = useState("");
  const [apellido, SetApellido] = useState("");
  const [email, SetEmail] = useState("");
  const [telefono, SetTelefono] = useState("");
  const cambiarNombre = (e) => {
    SetName(e.target.value);
  };
  const cambiarApellido = (e) => {
    SetApellido(e.target.value);
  };
  const cambiarEmail = (e) => {
    SetEmail(e.target.value);
  };
  const cambiarTelefono = (e) => {
    SetTelefono(e.target.value);
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      return alert("Por favor llenar nombre");
    }
    if (apellido.length === 0) {
      return alert("Por favor llenar apellido");
    }

    if (telefono.length === 0) {
      return alert("Por favor introducir telefono");
    }
    if (telefono.length > 10) {
      return alert("Numero muy largo");
    }

    if (email.length === 0) {
      return alert("Por favor introducir correo");
    }
    console.log(
      `Nombre: ${name}, Apellido: ${apellido}, Telefono: ${telefono}, Email: ${email}`
    );
  };

  return (
    <form className="form" onSubmit={enviarDatos}>
      <h1>Formulario</h1>
      <label>
        Nombre: <br></br>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Daniel"
          onChange={cambiarNombre}
        />
      </label>
      <br></br>
      <label>
        Apellido:<br></br>
        <input
          type="text"
          name="apellido"
          value={apellido}
          placeholder="Cabrera"
          onChange={cambiarApellido}
        />
      </label>
      <br></br>
      <label>
        E-mail:<br></br>
        <input
          type="email"
          name="email"
          placeholder="abc@gmail.com"
          value={email}
          onChange={cambiarEmail}
        />
      </label>
      <br></br>
      <label>
        Telefono:<br></br>
        <input
          type="tel"
          name="telefono"
          placeholder="123-456-7890"
          value={telefono}
          onChange={cambiarTelefono}
        />
      </label>
      <br></br>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioComponent;
