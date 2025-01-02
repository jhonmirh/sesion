"use client";

import { fetchRegister } from "@/api/register";
import Image from "next/image";
import usuario from "../../../public/Form Íconos/user.svg";
import email from "../../../public/Form Íconos/emai_1.svg";
import password from "../../../public/Form Íconos/password.svg";
import confirmPassword from "../../../public/Form Íconos/repetir.svg";
import phone from "../../../public/Form Íconos/phone.svg";
import DNI from "../../../public/Form Íconos/DNI_1.svg";

import registerImg from "../../../public/register_prueba.png";
import Style from "./register.module.css";
import Loading from "../Loading/Loading";
import { validateFormRegisterGoogle } from "@/helpers/validateRegisterGoogle";
import { useFormRegisterGoogle } from "@/hooks/useFormRegisterGoogle";
const initialForm = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  phone: "",
  dni: "",
  authProvider: "google",
};

interface RegisterGoogleProps {
  name: string;
  emailgoogle: string;
}

const RegisterGoogle: React.FC<RegisterGoogleProps> = ({
  name,
  emailgoogle,
}) => {
  console.log("====================================");
  console.log(name, emailgoogle);
  console.log("====================================");

  const { form, errors, loading, handleChange, handleBlur, handleSubmit } =
    useFormRegisterGoogle(
      {
        ...initialForm,
        email: emailgoogle,
        name: name,
        authProvider: "google",
        password: "Admin123+",
        confirm_password: "Admin123+",
      },
      validateFormRegisterGoogle,
      fetchRegister
    );

  return (
    <form onSubmit={handleSubmit} className={`${Style.container} bg-beige `}>
      {/*Imagen estática para el componente Register*/}
      <div className={Style.imgContainer}>
        <Image src={registerImg} alt="Usuario" width={525} height={525} />
      </div>
      {/*Formulario de registro*/}
      <div className={Style.formContainer}>
        <h1>Registrarse</h1>
        {errors.name && (
          <p className="text-red-500 text-xs m-2">{errors.name}</p>
        )}
        {/*Nombre*/}
        <div className={Style.inputLabelGroup}>
          <Image
            src={usuario}
            width={25}
            height={25}
            alt="usuario"
            className={Style.iconos}
          />
          <input
            type="text"
            name="name"
            id="name_id"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.name}
            className={Style.inputForm}
            placeholder=" "
            autoComplete="off"
            disabled
          />
          <label htmlFor="name_id" className={Style.labelForm}>
            Nombre Completo
          </label>
        </div>
        {/*Email*/}
        {errors.email && (
          <p className="text-red-500 text-xs m-2">{errors.email}</p>
        )}
        <div className={Style.inputLabelGroup}>
          <Image
            src={email}
            width={25}
            height={25}
            alt="usuario"
            className={Style.iconos}
          />
          <input
            type="text"
            name="email"
            id="email_id"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.email}
            className={Style.inputForm}
            placeholder=" "
            disabled
          />
          <label htmlFor="email_id" className={Style.labelForm}>
            Correo Electrónico
          </label>
        </div>
        {/*Contraseña*/}
        {errors.password && (
          <p className="text-red-500 text-xs m-2">{errors.password}</p>
        )}
        <div className={Style.inputLabelGroup}>
          <Image
            src={password}
            width={25}
            height={25}
            alt="usuario"
            className={Style.iconos}
          />
          <input
            type="password"
            name="password"
            id="password_id"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.password}
            className={Style.inputForm}
            placeholder=" "
            disabled
          />
          <label htmlFor="password_id" className={Style.labelForm}>
            Contraseña
          </label>
        </div>
        {/*Confirmar contraseña*/}
        {errors.confirm_password && (
          <p className="text-red-500 text-xs m-2">{errors.confirm_password}</p>
        )}
        <div className={Style.inputLabelGroup}>
          <Image
            src={confirmPassword}
            width={25}
            height={25}
            alt="usuario"
            className={Style.iconos}
          />
          <input
            type="password"
            name="confirm_password"
            id="confirm_password_id"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.confirm_password}
            className={Style.inputForm}
            placeholder=" "
            disabled
          />
          <label htmlFor="confirm_password_id" className={Style.labelForm}>
            Confirmar Contraseña
          </label>
        </div>
        {/*Teléfono*/}
        {errors.phone && (
          <p className="text-red-500 text-xs m-2">{errors.phone}</p>
        )}
        <div className={Style.inputLabelGroup}>
          <Image
            src={phone}
            width={25}
            height={25}
            alt="usuario"
            className={Style.iconos}
          />
          <input
            type="text"
            name="phone"
            id="phone_id"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.phone}
            className={Style.inputForm}
            placeholder=" "
          />
          <label htmlFor="phone_id" className={Style.labelForm}>
            Teléfono
          </label>
        </div>
        {/*Dni*/}
        {errors.dni && <p className="text-red-500 text-xs m-2">{errors.dni}</p>}
        <div className={Style.inputLabelGroup}>
          <Image
            src={DNI}
            width={25}
            height={25}
            alt="usuario"
            className={Style.iconos}
          />
          <input
            type="text"
            name="dni"
            id="dni_id"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.dni}
            className={Style.inputForm}
            placeholder=" "
          />
          <label htmlFor="dni_id" className={Style.labelForm}>
            DNI
          </label>
        </div>
        <input
          type="text"
          name="authProvider"
          value="google"
          disabled
          style={{ display: "none" }} // O un campo oculto
        />
        <p className={Style.tienesCuenta}>
          ¿Ya tienes una cuenta? <a href="/login">INICIA SESIÓN</a>
        </p>

        <button
          type="submit"
          className={`${
            Object.values(form).every((value) => value.trim() !== "")
              ? Style.submit
              : Style.submitDisabled
          }`}
          disabled={
            !form.name ||
            !form.email ||
            !form.password ||
            !form.confirm_password ||
            !form.phone ||
            !form.dni
          }
        >
          {loading ? <Loading /> : "COMPLETAR TU REGISTRO"}
        </button>
      </div>
    </form>
  );
};

export default RegisterGoogle;
