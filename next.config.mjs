/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the workspace root so Next doesn't latch onto a stray lockfile elsewhere.
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  // 301-redirects van de oude Wix-pagina's naar de bijbehorende secties op de
  // nieuwe homepage, zodat SEO-waarde en oude links behouden blijven.
  async redirects() {
    return [
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/werkwijze", destination: "/#werkwijze", permanent: true },
      { source: "/over-ons", destination: "/#over-ons", permanent: true },
    ];
  },
};

export default nextConfig;
