import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

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
          <FaWhatsapp color="#09a32a" size={75} className="mr-2" />
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
          <div className="grid grid-cols-[1fr_1fr_1fr] items-center justify-items-center w-full py-10">
            <div>
            <Image
              src="/f5.jpg"
              width={500}
              height={200}
              alt="Logo"
            />
            </div>
            <div>
              <p className="text-orange-700 text-center font-bold text-4xl">This is an innovative product combining the strength and flexibility of the strap and bucklesystem.</p>
            </div>
            <div>
            <Image
              src="/f4.jpg"
              width={500}
              height={200}
              alt="Logo"
            />
            </div>
          </div>
          <div className="grid grid-cols-[1fr_1fr_1fr] items-center justify-items-center w-full py-10">
            <div>
            <Image
              src="/f3.jpg"
              width={500}
              height={200}
              alt="Logo"
            />
            </div>
            <div>
            <Image
              src="/f2.jpg"
              width={500}
              height={200}
              alt="Logo"
            />
            </div>
            <div>
            <Image
              src="/f1.jpg"
              width={500}
              height={200}
              alt="Logo"
            />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center bg-slate-900 min-h-screen">
          <div className="grid grid-cols-[1fr_1fr] items-center justify-items-center w-full py-10 gap-10">
            <div>
              <Image
                src="/f6.jpg"
                width={700}
                height={200}
                alt="Logo"
              />
            </div>
            <div>
              <p className="text-white text-4xl">The strap and buckle is quick to install and easy to deplay This system incorporates a flexible attachment design to fasten the hurricane screen to the structure.<br/><br/>Our screen provides “FULL ENVELOPE“ protection of your home deplecting hurricane forewinds and preventing pressurization of home.</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-start">
          <h1 className="px-10 text-6xl text-slate-900 font-bold p-5 w-full text-center" style={{
            textShadow: '4px 4px 4px rgba(244,126,1,0.5)'
          }}>Features</h1>
            <div className="grid grid-cols-[1fr_1fr] items-stretch justify-start w-full p-10 gap-3">
            <div className="bg-gray-100 flex items-center">   
              <p className="text-gray-700 text-left font-bold text-2xl p-5">Our hurricane screen reduces hurricane and wind velocity up to 95%.</p>
            </div>
            <div className="bg-gray-100 flex items-center">   
              <p className="text-gray-700 text-left font-bold text-2xl p-5">Florida building code approved (FL-1129)</p>
            </div>
            <div className="bg-gray-100 flex items-center">   
              <p className="text-gray-700 text-left font-bold text-2xl p-5">Straps can be securely tightened for increase tautness</p>
            </div>
            <div className="bg-gray-100 flex items-center">   
              <p className="text-gray-700 text-left font-bold text-2xl p-5">Miami Dade (Noa 140207-0)</p>
            </div>
            <div className="bg-gray-100 flex items-center">   
              <p className="text-gray-700 text-left font-bold text-2xl p-5">Filters in light the Room, enabling you to see out</p>
            </div>
            <div className="bg-gray-100 flex items-center">   
              <p className="text-gray-700 text-left font-bold text-2xl p-5">Available in multiple colors, to blend your home’s exterior</p>
            </div>
            </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center w-full bg-gray-200">
          <div className="grid grid-cols-[1fr_1fr_1fr] items-center justify-items-center w-full p-10 gap-3 font-bold">
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
              <p className="flex justify-center items-center mb-3"><FaMapMarkerAlt color="#ff0000" size={25} className="mr-2" /> San José Del Cabo B.C.S</p>
              <p className="flex justify-center items-center"><FaWhatsapp color="#09a32a" size={25} className="mr-2" />+52 1 624 122 0302</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p>hola@strongprotectionhurricane.com</p>
            </div>
          </div>
      </footer>
    </div>
  );
}