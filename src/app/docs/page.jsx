"use client";
import Head from "next/head";
import Script from "next/script";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import swaggerConfig from "../swagger-config.json";
import { Inter } from "next/font/google";
import { useEffect } in "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const swaggerUIConfig = {
    defaultModelRendering: "model",
    docExpansion: "list",
  };

  useEffect(() => {
    document.body.classList.add(inter.className);

    const style = document.createElement("style");
    style.innerHTML = `
      /* === TAMBAHAN UNTUK FULL LAYAR === */
      /* Menghapus margin/padding bawaan browser */
      html, body {
        margin: 0 !important;
        padding: 0 !important;
        background-color: #ffffff !important; /* Pastikan background putih */
        font-family: 'Inter', sans-serif;
      }

      /* Menghapus padding/margin internal dari Swagger UI */
      .swagger-ui .wrapper {
        padding: 0;
        margin: 0;
        max-width: 100%; /* Pastikan tidak ada batas lebar maks */
      }

      /* Menyesuaikan container info agar tetap ada sedikit jarak */
      .swagger-ui .info {
        padding: 10px 20px; /* Memberi sedikit padding HANYA di bagian info */
        text-align: left;
        margin-bottom: 20px;
      }
      /* === Akhir Tambahan Full Layar === */
      
      .swagger-ui .topbar {
        display: none;
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

      /* === TAMBAHAN: Memberi padding pada section API === */
      /* Ini agar endpoint tidak menempel ke tepi layar */
      .swagger-ui .opblock, .swagger-ui .models-container {
        margin: 0 10px 10px 10px; /* Atas, Kanan, Bawah, Kiri */
      }

      /* Mengatur opblock tag (judul section) agar punya padding */
      .swagger-ui .opblock-tag-section .opblock-tag {
        padding: 10px 20px; 
      }
      /* === Akhir Tambahan === */

      .swagger-ui .opblock {
        border-radius: 8px;
        border: 1px solid #ddd;
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
        color: white;
      }

      .swagger-ui .opblock-summary-method-get {
        background-color: #007bff;
      }

      .swagger-ui .opblock-summary-method-post {
        background-color: #28a745;
      }

      .swagger-ui .opblock-summary-method-put {
        background-color: #ffc107;
      }

      .swagger-ui .opblock-summary-method-delete {
        background-color: #dc3545;
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
      document.body.classList.remove(inter.className);
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

      <Analytics />
      <SpeedInsights />

      {/* Halaman ini sekarang akan full layar */}
      <SwaggerUI spec={swaggerConfig} {...swaggerUIConfig} />
    </>
  );
}
