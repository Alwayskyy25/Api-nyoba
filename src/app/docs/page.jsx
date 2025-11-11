"use client";
import Head from "next/head";
import Script from "next/script";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css"; // Baris ini memuat tema original
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import swaggerConfig from "../swagger-config.json";
// Import 'useEffect' dan 'Inter' tidak lagi diperlukan
// import { Inter } from "next/font/google";
// import { useEffect } from "react";

// const inter = Inter({ subsets: ["latin"] }); // Tidak lagi diperlukan

export default function Home() {
  const swaggerUIConfig = {
    defaultModelRendering: "model",
    docExpansion: "none",
  };

  // Seluruh hook useEffect yang berisi CSS kustom telah dihapus.

  return (
    <>
      <Head>
        <title>VelynAPI Documentation</title>
        <meta name="title" content="VelynAPI - Documentation" />
        <meta
          name="description"
          content="VelynAPI is a free, simple REST API for everyone. Enjoy using it without any cost!"
        />
        <meta property="og:title" content="VelynAPI - Documentation" />
        <meta
          property="og:description"
          content="VelynAPI is a free, simple REST API for everyone."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Script
        id="ld-json-script"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebSite",
            "name": "VelynAPI",
            "url": "https://apivelyn.vercel.app",
            "description": "VelynAPI is a free, simple REST API for everyone.",
          }),
        }}
      />

      {/* Class 'p-6' dan 'inter.className' dihapus dari <main>
        Class 'bg-white shadow-md rounded-lg p-4' dihapus dari <div>
        agar tema original Swagger mengambil alih sepenuhnya.
      */}
      <main>
        <Analytics />
        <SpeedInsights />
        <div>
          <SwaggerUI spec={swaggerConfig} {...swaggerUIConfig} />
        </div>
      </main>
    </>
  );
}
