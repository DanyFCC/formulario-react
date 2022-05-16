import "./CardComponent.css";

const CardComponent = ({ name, apellido, telefono, email }) => {
  return (
    <div>
      <p>Nombre: {name}</p>
      <p>Apellido: {apellido}</p>
      <p>Email: {email}</p>
      <p>Telefono: {telefono}</p>
    </div>
  );
};

export default CardComponent;
