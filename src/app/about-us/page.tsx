import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="w-full">
        <div className="flex flex-row items-center justify-between p-3 bg-white">
          <Image
          src="/logo.png"
          width={200}
          height={200}
          alt="Logo"
          />
          <div>
            <ul className="flex">
                <li className="mr-5">
                    <Link href={"/"} className="text-gray-900 hover:text-orange-700 uppercase font-bold text-2xl">Home</Link>
                </li>
                <li className="mr-5">
                    <Link href={"/about-us"} className="text-gray-900 hover:text-orange-700 uppercase font-bold text-2xl">About Us</Link>
                </li>
                <li>
                    <Link href={"/contact"} className="text-gray-900 hover:text-orange-700 uppercase font-bold text-2xl">Contact</Link>
                </li>
            </ul>
          </div>
          <FaWhatsapp color="#09a32a" size={75} className="mr-2" />
        </div>
        <div className="w-full flex flex-col items-start">
          <h1 className="px-10 text-6xl text-slate-900 font-bold p-5 w-full text-center" style={{
            textShadow: '4px 4px 4px rgba(244,126,1,0.5)'
          }}>About Us Strong Protection Hurricane</h1>
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_2fr] items-center justify-items-center w-full py-10">
            <div>
            <Image
              src="/f5.jpg"
              width={500}
              height={200}
              alt="Logo"
            />
            </div>
            <div className="px-5">
              <p className="text-orange-700 font-bold text-4xl pb-3">This is an innovative product combining the strength and flexibility of the strap and bucklesystem.</p>
              <p>Strong Protection Hurricane is a company founded in 2003 to meet the Baja California market's need for reliable and safe hurricane installation and protection.<br/>Over the years, the field of hurricane protection has evolved, which is why we now offer a variety of options and improved solutions for your home.<br/>Our products are backed by the building codes and licenses of the State of Florida.</p>
            </div>
            <div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[url('/contacto.jpg')] min-h-screen bg-cover bg-center flex flex-col items-start justify-center">
          <h2 className="px-10 text-2xl text-white bg-slate-900 p-5 font-bold">Protect your home before the next storm.</h2>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center w-full bg-gray-200 ">
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr_1fr] items-center justify-items-center w-full p-10 gap-3 font-bold">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/logo.png"
                width={200}
                height={200}
                alt="Logo"
              />
              <p className="mt-3">The best decision for your assets!</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="flex justify-center items-center mb-3 text-gray-900"><FaMapMarkerAlt color="#ff0000" size={25} className="mr-2" /> San José Del Cabo B.C.S</p>
              <p className="flex justify-center items-center text-gray-900"><FaWhatsapp color="#09a32a" size={25} className="mr-2" />+52 1 62 4122 7600</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-gray-900">hola@strongprotectionhurricane.com</p>
            </div>
          </div>
      </footer>
    </div>
  );
}