'use client';

import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useLoggin } from "@/context/logginContext";
import { login } from "@/api/login";
import { IloginProps, IloginPropsGoogle } from "@/interfaces/TypesLogin";

function LoginGoogle() {
  const router = useRouter();
  const { setUserData } = useLoggin();

  // Usamos useSearchParams para obtener los parámetros de la URL
  const searchParams = useSearchParams();
  const emailgoogle = searchParams?.get("email") ? decodeURIComponent(searchParams.get("email")!) : "";
const password = searchParams?.get("password") ? decodeURIComponent(searchParams.get("password")!) : "Admin123+";

  const [dataUser, SetdataUser] = useState<IloginProps>({
    email: emailgoogle ?? "",
    password: password ?? "Admin123+", // La contraseña por defecto
  });

  console.log('====================================');
  console.log(dataUser);
  console.log('====================================');

  // Verificar que los parámetros se están leyendo correctamente
  useEffect(() => {
    if (emailgoogle && password) {
      console.log("Redirigiendo con email y password:", emailgoogle, password);
      handleSubmitGoogle(); // Llamar automáticamente al submit
    }
  }, [emailgoogle, password]);



  const handleSubmitGoogle = async (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault(); // Evitar el comportamiento por defecto si es llamado por un submit manual
    }

    console.log("Intentando iniciar sesión con:", dataUser); // Verifica que los datos son correctos.


        const response = await login(dataUser);
        if (response.success) {
          const { token, user, role } = response.data;

          setUserData({
            token,
            userData: user,
          });

          localStorage.setItem(
            "sessionStart",
            JSON.stringify({ token, userData: user, role })
          );

          router.push("/"); // Redirige a la página principal
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Tus credenciales no son correctas.",
          });
        }
    
      
    
  };

  return (
    <div>
      Ejemplo de inicio de sesión con Google
      {/* Aquí puedes agregar el formulario o UI que desees */}
      <form onSubmit={handleSubmitGoogle}>
        {/* Agregar campos del formulario si los necesitas */}
      </form>
    </div>
  );
}

export default LoginGoogle;
