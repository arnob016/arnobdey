import Head from 'next/head';
import Image from 'next/image';
import CircularCursor from '../components/CircularCursor';

export default function Home() {
  return (
    <>
      <Head>
        <title>Arnob Dey</title>
        <meta name="description" content="Created by Arnob Dey" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#220c0c] to-[#3f3e27]">

        <div className="rounded-full overflow-hidden relative">
          <Image
            src="/beach.jpg"
            alt="Basic image"
            width={260}
            height={260}
            style={{ borderRadius: '50%' }}
          />
        </div>
        <h1 className="text-5xl font-bold text-white">Arnob Dey</h1>
      </main>
      <CircularCursor /> 
    </>
  );
}
