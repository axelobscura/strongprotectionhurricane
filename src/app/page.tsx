import Image from "next/image";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Link from "next/link";
import ContactForm from "./components/contactForm";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="w-full">
        <Menu />
        <div className="w-full bg-[url('/uno.jpg')] min-h-screen bg-cover bg-center flex flex-col items-start justify-center">
          <h1 className="px-10 text-8xl text-white font-bold" style={{
            textShadow: '4px 4px 4px rgba(244,126,1,0.5)'
          }}>Fabric Hurricane Screen</h1>
          <h2 className="px-10 text-2xl text-custom-orange bg-slate-900 p-5 font-bold ml-10">Perfect for homes and commercial properties.</h2>
          <Link href="/contact" className="px-10 text-2xl text-white bg-slate-900 hover:bg-slate-600 p-5 font-bold m-5 ml-32 rounded-2xl">Free en Home evaluation</Link>
        </div>
        <div className="w-full flex flex-col items-start">
          <h1 className="px-10 text-6xl text-slate-900 font-bold p-5 w-full text-center" style={{
            textShadow: '4px 4px 4px rgba(244,126,1,0.5)'
          }}>Our Work</h1>
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr_1fr] items-center justify-items-center w-full py-10">
            <div>
            <Image
              src="/f5.jpg"
              width={500}
              height={200}
              alt="Logo"
              className="transition-transform transform hover:scale-140 duration-300 ease-in-out"
            />
            </div>
            <div>
              <p className="text-orange-700 text-center font-bold text-4xl py-3 w-full">This is an innovative product combining the strength and flexibility of the strap and buckle system.</p>
            </div>
            <div>
            <Image
              src="/f4.jpg"
              width={500}
              height={200}
              alt="Logo"
              className="transition-transform transform hover:scale-140 duration-300 ease-in-out"
            />
            </div>
          </div>
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr_1fr] items-center justify-items-center w-full py-0 sm:py-10">
            <div>
            <Image
              src="/f3.jpg"
              width={500}
              height={200}
              alt="Logo"
              className="transition-transform transform hover:scale-140 duration-300 ease-in-out"
            />
            </div>
            <div>
            <Image
              src="/f2.jpg"
              width={500}
              height={200}
              alt="Logo"
              className="transition-transform transform hover:scale-140 duration-300 ease-in-out"
            />
            </div>
            <div>
            <Image
              src="/f1.jpg"
              width={500}
              height={200}
              alt="Logo"
              className="transition-transform transform hover:scale-140 duration-300 ease-in-out"
            />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center bg-slate-900 min-h-screen">
          <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] items-center justify-items-center w-full py-10 gap-10">
            <div>
              <Image
                src="/f6.jpg"
                width={700}
                height={200}
                alt="Logo"
              />
            </div>
            <div>
              <p className="text-white text-4xl p-5">The strap and buckle is quick to install and easy to deplay This system incorporates a flexible attachment design to fasten the hurricane screen to the structure.<br/><br/>Our screen provides “FULL ENVELOPE“ protection of your home deplecting hurricane forewinds and preventing pressurization of home.</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-start">
          <h1 className="px-10 text-6xl text-slate-900 font-bold p-5 w-full text-center" style={{
            textShadow: '4px 4px 4px rgba(244,126,1,0.5)'
          }}>Features</h1>
            <div className="grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] items-stretch justify-start w-full p-10 gap-3">
            <div className="bg-gray-100 flex items-center rounded-4xl relative">   
              <p className="text-gray-700 text-left font-bold text-2xl p-1 pl-30">
                <Image
                  src="/Features6.svg"
                  width={100}
                  height={100}
                  alt="Logo"
                  className="absolute top-0 left-0 z-20"
                />
                Our hurricane screen reduces hurricane and wind velocity up to 95%.
              </p>
            </div>
            <div className="bg-gray-100 flex items-center rounded-4xl relative">   
              <p className="text-gray-700 text-left font-bold text-2xl p-1 pl-30">
                <Image
                  src="/Features3.svg"
                  width={100}
                  height={100}
                  alt="Logo"
                  className="absolute top-0 left-0 z-20"
                />
                Florida building code approved (FL-1129)
              </p>
            </div>
            <div className="bg-gray-100 flex items-center rounded-4xl relative"> 
              <p className="text-gray-700 text-left font-bold text-2xl p-1 pl-10 pr-30">
                <Image
                  src="/Features1.svg"
                  width={100}
                  height={100}
                  alt="Logo"
                  className="absolute top-0 right-0 z-20"
                />
                Straps can be securely tightened for increase tautness
              </p>
            </div>
            <div className="bg-gray-100 flex items-center rounded-4xl relative"> 
              <p className="text-gray-700 text-left font-bold text-2xl p-5">
                <Image
                  src="/Features4.svg"
                  width={100}
                  height={100}
                  alt="Logo"
                  className="absolute top-0 right-0 z-20"
                />
                Miami Dade (Noa 140207-0)
              </p>
            </div>
            <div className="bg-gray-100 flex items-center rounded-4xl relative">   
              <p className="text-gray-700 text-left font-bold text-2xl p-1 pl-30 pr-0">
                <Image
                  src="/Features2.svg"
                  width={100}
                  height={100}
                  alt="Logo"
                  className="absolute top-0 left-0 z-20"
                />
                Filters in light the Room, enabling you to see out
              </p>
            </div>
            <div className="bg-gray-100 flex items-center rounded-4xl relative"> 
              <p className="text-gray-700 text-left font-bold text-2xl p-1 pr-30 pl-10">
                <Image
                  src="/Features5.svg"
                  width={100}
                  height={100}
                  alt="Logo"
                  className="absolute top-0 right-0 z-20"
                />
                Available in multiple colors, to blend your home’s exterior
              </p>
            </div>
            </div>
        </div>
        <div className="w-full bg-[url('/contacto.jpg')] min-h-screen bg-cover bg-center grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] justify-center items-center">
          <div>
            <h2 className="px-10 text-2xl text-white bg-slate-900 p-5 font-bold">Protect your home before the next storm.</h2>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}