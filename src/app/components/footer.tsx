import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
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
    );
};