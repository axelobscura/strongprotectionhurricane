import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Menu from "../components/menu";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <div className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="w-full">
        <Menu />
        <div className="w-full flex flex-col items-start">
          <h1 className="px-10 text-6xl text-slate-900 font-bold p-5 w-full text-center" style={{
            textShadow: '4px 4px 4px rgba(244,126,1,0.5)'
          }}>Contact</h1>
        </div>

        <div className="w-full bg-[url('/contacto.jpg')] min-h-screen bg-cover bg-center flex flex-col items-start justify-center">
          <h2 className="px-10 text-2xl text-white bg-slate-900 p-5 font-bold">Protect your home before the next storm.</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}