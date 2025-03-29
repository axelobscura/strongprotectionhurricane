import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 m-10 rounded-4xl p-5 py-30">
            <h3 className="text-4xl uppercase p-5 font-extrabold mb-5">Contact</h3>
            <form className="flex flex-col items-center justify-center w-full">
                <input type="text" placeholder="Name" className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-full max-w-md" />
                <input type="email" placeholder="Email" className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-full max-w-md" />
                <textarea placeholder="Message" className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-full max-w-md h-32"></textarea>
                <button type="submit" className="bg-custom-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300">Send</button>
            </form>
            <div className="flex flex-col items-center justify-center mt-10">
                <p className="flex justify-center items-center mb-3 text-gray-900"><FaMapMarkerAlt color="#ff0000" size={25} className="mr-2" /> San José Del Cabo B.C.S</p>
                <p className="flex justify-center items-center text-gray-900"><FaWhatsapp color="#09a32a" size={25} className="mr-2" />+52 1 62 4122 7600</p>
            </div>
        </div>
    );
};