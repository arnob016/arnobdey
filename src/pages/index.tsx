import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Arnob Dey</title>
        <meta name="description" content="Created by Arnob Dey" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#161616] to-[#2d2d2d]">
        <img src="https://shadowblood.gallerycdn.vsassets.io/extensions/shadowblood/tailwind-moon/3.0.2/1673948732518/Microsoft.VisualStudio.Services.Icons.Default" className="max-h-28 rounded-full"/> 
        <h1 className="text-5xl font-bold text-white">Arnob Dey</h1>
      </main>
    </>
  );
}
