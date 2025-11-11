"use client";
import Head from "next/head";
import Script from "next/script";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import swaggerConfig from "../swagger-config.json";
import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const swaggerUIConfig = {
    defaultModelRendering: "model",
    docExpansion: "list", // Diubah dari "none" ke "list" agar section terbuka
  };

  // useEffect ini berisi style kustom untuk tema PUTIH
  // dan tata letak RATA KIRI, persis seperti di foto.
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      body {
        background-color: #ffffff !important;
        font-family: 'Inter', sans-serif;
      }

      /* === TAMBAHAN === */
      /* Ini untuk menyembunyikan 'top bar' hitam default dari Swagger */
      .swagger-ui .topbar {
        display: none;
      }
      /* === Akhir Tambahan === */

      /* Judul dan info disetel ke rata kiri agar sesuai dengan foto */
      .swagger-ui .info {
        text-align: left; 
        margin-bottom: 20px;
      }

      .swagger-ui .info h1 {
        font-size: 26px;
        font-weight: bold;
        color: #222;
      }

      .swagger-ui .info p {
        font-size: 14px;
        color: #555;
      }

      .swagger-ui .info a {
        color: #007bff;
        font-weight: bold;
        text-decoration: none;
      }

      .swagger-ui .opblock {
        border-radius: 8px;
        border: 1px solid #ddd;
        margin-bottom: 10px;
        transition: all 0.3s ease-in-out;
      }

      .swagger-ui .opblock:hover {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      }

      .swagger-ui .opblock-tag {
        font-size: 18px;
        font-weight: bold;
        color: #333;
        margin-bottom: 5px;
        padding-left: 10px;
      }

      .swagger-ui .opblock-summary {
        display: flex;
        align-items: center;
        padding: 10px;
        border-radius: 5px;
        font-weight: bold;
      }

      .swagger-ui .opblock-summary-method {
        border-radius: 5px;
        font-size: 14px;
        font-weight: bold;
        padding: 6px 12px;
        min-width: 60px;
        text-align: center;
        color: white; /* Pastikan semua teks metode berwarna putih */
      }

      .swagger-ui .opblock-summary-method-get {
        background-color: #007bff;
      }

      .swagger-ui .opblock-summary-method-post {
        background-color: #28a745;
      }

      /* Menambahkan style untuk PUT dan DELETE agar sesuai foto */
      .swagger-ui .opblock-summary-method-put {
        background-color: #ffc107; /* Oranye/Kuning */
      }

      .swagger-ui .opblock-summary-method-delete {
        background-color: #dc3545; /* Merah */
      }

      .swagger-ui .opblock-summary-path {
        font-size: 14px;
        color: #222;
      }

      .swagger-ui .opblock-summary-control {
        margin-left: auto;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <Head>
        <title>VelynAPI Documentation</title>
        <meta name="title" content="VelynAPI - Documentation" />
        <meta name="description" content="VelynAPI is a free, simple REST API for everyone. Enjoy using it without any cost!" />
        <meta property="og:title" content="VelynAPI - Documentation" />
        <meta property="og:description" content="VelynAPI is a free, simple REST API for everyone." />
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

      <main className={`p-6 ${inter.className}`}>
        <Analytics />
        <SpeedInsights />
        {/*
          Container ini sudah responsif (mobile & desktop) 
          karena menggunakan Tailwind class (p-6)
        */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <SwaggerUI spec={swaggerConfig} {...swaggerUIConfig} />
        </div>
      </main>
    </>
  );
}


