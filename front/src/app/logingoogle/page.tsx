'use client';

import { useSearchParams } from 'next/navigation'; // Usamos `useSearchParams` para acceder a los parámetros de la URL
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation'; // Para redirigir a otra página si es necesario

export interface IloginPropsGoogle {
  emailgoogle: string;
  password?: string;
}

// Función que realiza el login con los datos recibidos
export async function logingoogle(userData: IloginPropsGoogle) {
  const APIURL = process.env.NEXT_PUBLIC_API_URL;
  
  console.log('Sending login data:', userData); // Verifica los datos antes de enviarlos

  try {
    const ResLogin = await fetch(`${APIURL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userData.emailgoogle, // Asegúrate de que los datos estén correctamente estructurados
        password: userData.password
      }),
    });

    if (ResLogin.ok) {
      const data = await ResLogin.json();
      console.log('Login success:', data);
      return { success: true, data };
    } else {
      const errorData = await ResLogin.json();
      console.log('Login failed:', errorData); // Verifica los errores
      return { success: false, errorData };
    }
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, error };
  }
}

function LoginGoogle() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailgoogle = searchParams?.get('email');
  const password = searchParams?.get('password');

  // Estado para almacenar los datos del usuario
  const [dataUser, setDataUser] = useState({ emailgoogle: '', password: '' });
  const [isFormReady, setIsFormReady] = useState(false); // Estado para asegurarse de que el formulario esté listo

  useEffect(() => {
    if (emailgoogle && password) {
      setDataUser({ emailgoogle, password }); // Establecemos los datos recibidos
      setIsFormReady(true); // Marcar que los datos están listos para enviarse
    }
  }, [emailgoogle, password]);

  const handleSubmitGoogle = async () => {
    console.log('Email:', dataUser.emailgoogle);
    console.log('Password:', dataUser.password); // Asegúrate de que la contraseña esté correctamente asignada

    try {
      const response = await logingoogle(dataUser);

      if (response.success) {
        const { token, user, role } = response.data;
        // Guardar datos y redirigir al usuario
        localStorage.setItem('sessionStart', JSON.stringify({ token, userData: user, role }));
        router.push('/'); // Redirige a la página principal
      } else {
        console.log('Login failed:', response.errorData);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: response.errorData?.message || 'Tus credenciales no son correctas.',
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al iniciar sesión.',
      });
    }
  };

  // Ejecutar el submit de manera automática si los datos están listos
  useEffect(() => {
    if (isFormReady) {
      handleSubmitGoogle(); // Ejecutamos el login automáticamente
    }
  }, [isFormReady]);

  return (
    <div>
      <h1>Iniciar sesión con Google</h1>
      <p>Email: {emailgoogle}</p>
      <p>Password: {password}</p>
      {/* Aquí puedes mostrar algo mientras se hace el login */}
    </div>
  );
}

export default LoginGoogle;
