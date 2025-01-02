import { valuesTypesTestimoials } from "@/interfaces/TypeTestimonials";

export const validateTestimonials = (form: valuesTypesTestimoials) => {
  const errors: Partial<valuesTypesTestimoials> = {};


  const regexName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  if (!form.name) {
    errors.name = "El nombre es requerido";
  } else if (!regexName.test(form.name)) {
    errors.name = "El nombre solo puede contener letras y espacios.";
  }


  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!form.email) {
    errors.email = "El correo electrónico es requerido";
  } else if (!regexEmail.test(form.email)) {
    errors.email = "El correo electrónico no es válido";
  }



  if (!form.message) {
    errors.message = "El mensaje es requerido";
  } else if (form.message.length > 50) {
    errors.message = "El mensaje no debe exceder los 50 caracteres.";
  }

  return errors;
};
