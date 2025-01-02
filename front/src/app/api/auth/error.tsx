// pages/auth/error.tsx
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();
  const { error } = router.query;

  return (
    <div>
      <h1>Error en la autenticación</h1>
      <p>{error ? `Error: ${error}` : "No se especificó un error."}</p>
    </div>
  );
};

export default ErrorPage;
