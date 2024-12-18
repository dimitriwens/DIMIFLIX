import type { Metadata } from "next"; // Importa el tipo Metadata de Next.js
import localFont from "next/font/local"; // Importa la función localFont para cargar fuentes locales
import "./globals.css"; // Importa los estilos globales del proyecto
import { Toaster } from "@/components/ui/toaster"; // Importa el componente Toaster para notificaciones

// Carga de fuentes locales
const geistSans = localFont({
  src: "./fonts/GeistVF.woff", // Ruta a la fuente local Geist Sans
  variable: "--font-geist-sans", // Variable CSS para la fuente
  weight: "100 900", // Rango de pesos para la fuente
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff", // Ruta a la fuente local Geist Mono
  variable: "--font-geist-mono", // Variable CSS para la fuente
  weight: "100 900", // Rango de pesos para la fuente
});

// Definición de los metadatos de la página
export const metadata: Metadata = {
  title: "Netflix Clone - Streaming Platform", // Título de la página
  description:
    "Explore Netflix Clone, a modern streaming platform showcasing a sleek UI built with Next.js, Tailwind CSS, and TypeScript.", // Descripción
  keywords: [
    "Netflix Clone", // Palabras clave para SEO
    "Streaming Platform",
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Full Stack Developer",
    "Modern Web Applications",
    "Frontend Development",
    "Backend Development",
  ],
  authors: [
    { name: "DimitriWens", url: "https://github.com/dimitriwens" }, // Autor con URL de GitHub
  ],
  openGraph: {
    title: "Netflix Clone - Streaming Platform", // Título para Open Graph
    description:
      "Discover Netflix Clone, a beautifully designed streaming platform built using Next.js and Tailwind CSS. Experience high-quality UI/UX and seamless functionality.", // Descripción para Open Graph
    url: "https://dimi-flix.vercel.app", // URL del sitio
    siteName: "Netflix Clone", // Nombre del sitio
    images: [
      {
        url: "/dimiflix.png", // Imagen representativa para Open Graph
        width: 1200,
        height: 630,
        alt: "Netflix Clone - Streaming Platform", // Texto alternativo
      },
    ],
    locale: "en_US", // Localización
    type: "website", // Tipo de contenido (sitio web)
  },
  twitter: {
    card: "summary_large_image", // Tipo de tarjeta de Twitter
    title: "Netflix Clone - Streaming Platform", // Título para Twitter
    description:
      "Explore the Netflix Clone, a feature-rich streaming platform with a modern UI/UX designed using Next.js and Tailwind CSS.", // Descripción para Twitter
    site: "@gusspitya", // Nombre de usuario en Twitter
    creator: "@gusspitya", // Creador de contenido en Twitter
    images: ["/dimiflix.png"], // Imagen optimizada para Twitter
  },
  robots: {
    index: true, // Indica que los motores de búsqueda deben indexar esta página
    follow: true, // Los motores de búsqueda pueden seguir los enlaces de esta página
  },
  alternates: {
    canonical: "https://dimi-flix.vercel.app", // URL canónica
    languages: {
      "en-US": "https://dimi-flix.vercel.app", // Idioma y URL asociada
    },
  },
  icons: {
    icon: "/favicon.ico", // Ruta al ícono de la aplicación
  },
};

// Componente RootLayout que envuelve el contenido de la página
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Propiedad de los componentes hijos que se renderizarán
}>) {
  return (
    <html lang="en">
      {" "}
      {/* Establece el idioma de la página como inglés */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900`} // Aplica las fuentes y el fondo
      >
        {children} {/* Renderiza el contenido de la página */}
        <Toaster /> {/* Componente Toaster para notificaciones */}
      </body>
    </html>
  );
}
