'use client';

import React, { useState, useEffect } from 'react';

interface RegisterGoogleProps {
  name: string;
  email: string;
}

const RegisterGoogle: React.FC<RegisterGoogleProps> = ({ name, email }) => {
  const [formName, setFormName] = useState(name);
  const [formEmail, setFormEmail] = useState(email);

  useEffect(() => {
    setFormName(name);
    setFormEmail(email);
  }, [name, email]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Nombre:', formName);
    console.log('Correo:', formEmail);
  };

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
            required
            disabled
          />
        </div>
        <div>
          <label htmlFor="email">Correo:</label>
          <input
            type="email"
            id="email"
            value={formEmail}
            onChange={(e) => setFormEmail(e.target.value)}
            required
            disabled
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterGoogle;
