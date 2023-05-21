/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['/'],// Agrega aquí tus dominios de imágenes si los tienes
    // deviceSizes: [320, 640, 768, 1024, 1280, 1536], // Tamaños de dispositivos
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Tamaños de imagen
    // path: "/_next/image",
    // loader: "default",
    // Ajusta las opciones de calidad y ajuste de imágenes según tus necesidades
    // Puedes probar diferentes valores para ver qué funciona mejor para ti
    // quality: 100, // Calidad de imagen (0-100)
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Tamaños de dispositivos personalizados
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Tamaños de imagen personalizados
  },
}

module.exports = nextConfig