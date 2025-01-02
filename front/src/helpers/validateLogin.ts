import { IloginError, IloginProps } from "@/interfaces/TypesLogin";

export const validateFields = (values: IloginProps): IloginError => {

    //     const errors: IloginError = {
    //     };

    // // if (!errors.email) {
    // //   errors.email = 'El correo electrónico es requerido';
    // // } else 
    // if ( values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    //   errors.email = 'El correo electrónico no es válido';
    // }

    // // if (!errors.password) {
    // //   errors.password = 'La contraseña es requerida';
    // // } else 
    // if ( values.password &&  values.password.length < 8) {
    //   errors.password = 'La contraseña debe tener al menos 8 caracteres';
    // }

    // return errors;
    // // setErrors(errors);


    const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\W).{5,}$/;
    const errors: IloginError = {};

  // validar el email
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = "El correo electrónico no es válido";
  }

  // Validar la contraseña
  /* if (!values.password) {
    errors.password = "La contraseña es obligatoria";
  } else {
    if (!/^(?=.*[!@#$%^&*+-])/.test(values.password)) {
      errors.password =
        "La contraseña debe contener al menos un carácter especial (!@#$%^&*)";
    }
    if (values.password.length < 8) {
      errors.password = "La contraseña debe tener al menos 8 caracteres";
    }
    if (!/[0-9]/.test(values.password)) {
      errors.password = "La contraseña debe contener al menos un número";
    }
    if (!/[a-z]/.test(values.password)) {
      errors.password =
        "La contraseña debe contener al menos una letra minúscula";
    }
    if (!/[A-Z]/.test(values.password)) {
      errors.password =
        "La contraseña debe contener al menos una letra mayúscula";
    }
  } */
    if (!values.password) {
      errors.password = "La contraseña es requerida";
    } else if (!regexPassword.test(values.password)) {
      errors.password =
        "La contraseña debe cumplir con los requisitos: al menos 5 caracteres, una letra mayúscula, una minúscula, un número y un carácter especial.";
    }
  return errors;
  };

