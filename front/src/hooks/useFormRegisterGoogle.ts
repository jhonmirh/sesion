import { useState } from "react";

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { validateFormRegisterGoogle } from "@/helpers/validateRegisterGoogle";
import { valuesTypesRegisterGoogle } from "../interfaces/TypesRegister";
type typeFormVR = (
  form: valuesTypesRegisterGoogle
) => Partial<valuesTypesRegisterGoogle>;

type DataFormType = {
  (data: Omit<valuesTypesRegisterGoogle, 'confirm_password'>): Promise<unknown>;
};
export const useFormRegisterGoogle = (
  initialForm: valuesTypesRegisterGoogle,
  validateForm: typeFormVR,
  dataForm: DataFormType,
) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<valuesTypesRegisterGoogle>>({});
  const [loading, setLoading] = useState(false);
  const [isSuccessResponse, setIsSuccessResponse] = useState(false);
  const [isErrorResponse, setIsErrorResponse] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as { name: keyof valuesTypesRegisterGoogle; value: string };
  
    // Validar solo el campo que perdió el foco
    const fieldError = validateFormRegisterGoogle({ ...form, [name]: value });
  
    // Actualizar solo el campo correspondiente en el estado de errores
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldError[name],
    }));
  };
  
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formErrors = validateForm(form);

  if (Object.keys(formErrors).length === 0) {
    const { confirm_password, ...newData } = form;


    newData.authProvider = "google";  

    setLoading(true);

    try {
      const result = await dataForm(newData); 

      if (result) {
        setIsSuccessResponse(true);
        const password = "Admin123+";
        const emailgoogle = form.email;
        router.push(
          `/logingoogle?email=${encodeURIComponent(emailgoogle)}&password=${encodeURIComponent(password)}`
        );
        Swal.fire({
          text: "Te has registrado correctamente.",
          title: "Registrado",
          icon: "success",
        });
      } else {
        Swal.fire({
          text: "Ha ocurrido un error al registrarse.",
          title: "Error",
          icon: "error",
        });
      }
    } catch (error) {
      console.log("Error al registrar:", error);

      Swal.fire({
        text: "Ocurrió un error al procesar tu solicitud.",
        title: "Error",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  } else {
    setErrors(formErrors);
  }
};


  return {
    form,
    errors,
    isSuccessResponse,
    isErrorResponse,
    loading,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
