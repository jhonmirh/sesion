import React from "react";
import "./globals.css";


import ProvidersAuth from "@/context/providersAuth";


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">

          <ProvidersAuth>



              <div className="flex flex-1 bg-gray-100">
                 
               
                <main className="flex-1 p-4 bg-gray-100 overflow-y-auto ml-5">
                  {children}
                </main>

              </div>

          </ProvidersAuth>

      </body>
    </html>
  );
}
