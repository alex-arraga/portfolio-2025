import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SocialNetworks, Navbar } from "@/components";

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
});

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "https://4490fd559e87.ngrok-free.app"
const ogImage = '/images/og/og-image.png'

const titleMetadata = {
  template: 'Portfolio - %s',
  default: 'Portfolio'
}

const description = "En este sitio web encontraras toda la información acerca de mi, de mis proyectos, experiencias y conocimientos como Full Stack Developer"

export const metadata: Metadata = {
  title: titleMetadata,
  description: description,
  keywords: ['Portfolio', 'Personal', 'Web Developer', 'Next.js', 'Postgres', 'Mongo', 'React', 'JavaScript', 'UX/UI Designer', 'Backend', 'Frontend', 'SQL', 'Node.js', 'TypeScript', 'Tailwind', 'Go'],
  creator: 'Alex Arraga',
  metadataBase: new URL(baseURL),
  alternates: { canonical: '/' },
  robots: {
    index: false,
    follow: true,
    nocache: true
  },
  openGraph: {
    title: titleMetadata,
    description: description,
    images: ogImage,
    countryName: 'Argentina',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: titleMetadata,
    description: '¡Embárcate en un emocionante viaje 🚀 para explorar mi portfolio como Diseñador UX/UI y Desarrollador Web! Descubre proyectos innovadores y conoce más sobre mis habilidades técnicas y cualidades personales.',
    images: {
      url: ogImage,
      alt: 'Portfolio logo'
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative bg-black text-white ${poppins.className}`}>
        <Navbar />
        {children}
        <SocialNetworks />
      </body>
    </html>
  );
}
