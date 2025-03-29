import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Menu() {
    return (
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
                    <Link href={"/"} className="text-gray-900 hover:text-custom-orange uppercase font-bold text-sm sm:text-2xl hover:text-2xl">Home</Link>
                </li>
                <li className="mr-5">
                    <Link href={"/about-us"} className="text-gray-900 hover:text-custom-orange uppercase font-bold text-sm sm:text-2xl hover:text-2xl">About Us</Link>
                </li>
                <li>
                    <Link href={"/contact"} className="text-gray-900 hover:text-custom-orange uppercase font-bold text-sm sm:text-2xl hover:text-2xl">Contact</Link>
                </li>
            </ul>
          </div>
          <Link href="https://wa.me/5216241220302" target="_blank" className="flex items-center justify-center">
            <FaWhatsapp color="#09a32a" size={75} className="mr-2 fixed right-0 top-0/12 bg-white rounded-2xl p-2" />
          </Link>
        </div>
    );
};