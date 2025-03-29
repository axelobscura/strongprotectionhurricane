import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Menu from "../components/menu";
import Footer from "../components/footer";

export default function AboutUs() {
  return (
    <div className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="w-full">
        <Menu />
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
              <p className="text-custom-orange font-bold text-4xl pb-3">This is an innovative product combining the strength and flexibility of the strap and bucklesystem.</p>
              <p className="pr-52 text-justify">Strong Protection Hurricane is a company founded in 2003 to meet the Baja California markets need for reliable and safe hurricane installation and protection.<br/><br/>Over the years, the field of hurricane protection has evolved, which is why we now offer a variety of options and improved solutions for your home.<br/><br/>Our products are backed by the building codes and licenses of the State of Florida.</p>
              <ul className="list-disc pl-5 pt-5">
                <li>Our design offers precise translucency, allowing you to see outside.</li>
                <li>We provide a flap option that stays securely in place.</li>
                <li>Our locking mechanism ensures 99% security.</li>
                <li>Compliant with the Budding Code of Florida.</li>
                <li>HWHZ is apparent.</li>
                <li>Somph is easy to store.</li>
                <li>Category 5 winds over 150hph.</li>
              </ul>
            </div>
            <div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}