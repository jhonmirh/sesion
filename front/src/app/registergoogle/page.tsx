'use client';

import RegisterGoogle from '@/components/RegisterGoogle/RegisterGoogle';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const RegisterGooglePage = () => {
  const searchParams = useSearchParams();
  const name = searchParams?.get("name") || "";
  const emailgoogle = searchParams?.get("email") || "";

  if (!name || !emailgoogle) {
    return <p>Error: Falta información para el registro.</p>;
  }

  return (
    <div>
      <h1>Registrarse con Google</h1>
      <p>Nombre: {name}</p>
      <p>Email: {emailgoogle}</p>
      <RegisterGoogle name={name} emailgoogle={emailgoogle} />
    </div>
  );
};

export default RegisterGooglePage;

