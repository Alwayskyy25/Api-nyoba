"use client";
import Head from "next/head";
import Script from "next/script";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import swaggerConfig from "../swagger-config.json";
import { Inter } from "next/font/google";
// 'useEffect' sudah tidak diperlukan lagi, jadi bisa dihapus dari import
// import { useEffect } from "react"; 

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const swaggerUIConfig = {
    defaultModelRendering: "model",
    docExpansion: "none", // Dikembalikan ke 'none' seperti kode original Anda
  };

  /*
    BLOK 'useEffect' YANG BERISI CSS KUSTOM
    TELAH DIHAPUS DARI SINI
  */

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


