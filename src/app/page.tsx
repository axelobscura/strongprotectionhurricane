import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="w-full">
        <div className="flex flex-row items-center justify-between p-3">
          <Image
          src="/logo.png"
          width={200}
          height={200}
          alt="Logo"
          />
          <p>WHATSAPP</p>
        </div>
        <div className="w-full bg-[url('/uno.jpg')] min-h-screen bg-cover bg-center flex flex-col items-start justify-center">
          <h1 className="px-10 text-8xl text-white font-bold" style={{
            textShadow: '4px 4px 4px rgba(244,126,1,0.5)'
          }}>Fabric Hurricane Screen</h1>
          <h2 className="px-10 text-2xl text-white bg-slate-900 p-5 font-bold">Perfect for homes and commercial properties.</h2>
        </div>
        <div className="w-full flex flex-col items-start">
          <h1 className="px-10 text-6xl text-slate-900 font-bold p-5 w-full text-center" style={{
            textShadow: '4px 4px 4px rgba(244,126,1,0.5)'
          }}>Our Work</h1>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
