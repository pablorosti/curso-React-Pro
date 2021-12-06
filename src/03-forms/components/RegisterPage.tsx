import React from "react";
import "../styles/styles.css";

const RegisterPage = () => {
  return (
    <form>
      <input type="text" placeholder="name" />
      <input type="email" placeholder="email" />
      <input type="password" placeholder="contraseña" />
      <input type="password" placeholder="repetir contraseña" />
      <button>create</button>
    </form>
  );
};
export default RegisterPage;
