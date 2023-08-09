import Head from "next/head";
import Image from 'next/image';
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
      <div className="rounded-full overflow-hidden">
        <Image src="/beach.jpg" alt="Basic image" width={260} height={260} style={{ borderRadius: '50%' }}/>
      </div>
       <h1 className="text-5xl font-bold text-white">Arnob Dey</h1>
      </main>
    </>
  );
}
