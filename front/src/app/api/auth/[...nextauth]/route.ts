import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account && account.provider === "google") {
        try {
          console.log('====================================');
          console.log(account.access_token);
          console.log('====================================');
          const response = await fetch(`${process.env.API_URL}/auth/google-auth`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${account.access_token}`,
            },
          });

          if (response.ok) {
            const users = await response.json();
            const userExists = users.some((u: { email: string }) => u.email === user.email);
            
            if (userExists) {
              const password = "Admin123+";
              const emailgoogle = user.email ?? "";
              return `/logingoogle?email=${encodeURIComponent(emailgoogle)}&password=${encodeURIComponent(password)}`;

            } else {
              // Si no existe, redirige a la página de registro
              const name = user.name ?? "";
              const emailgoogle = user.email ?? "";
              console.log(`Redirecting to register page with name: ${name} and email: ${emailgoogle}`);
              return `/registergoogle?name=${encodeURIComponent(name)}&email=${encodeURIComponent(emailgoogle)}`; // Cambia la ruta si es necesario
            }
          }

          return false; // Si la API falla, deniega el acceso
        } catch (error) {
          console.error("Error en signIn callback:", error);
          return false;
        }
      }

      // Si no es Google, permite el inicio de sesión
      return true;
    },
  },
  pages: {
    signIn: "/auth/signin",  // Página de inicio de sesión personalizada
    error: "/auth/error",    // Página de error personalizada
  },
  



});

export const GET = handler;
export const POST = handler;