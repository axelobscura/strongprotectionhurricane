import Menu from "../components/menu";
import Footer from "../components/footer";
import ContactForm from "../components/contactForm";

export default function Contact() {
  return (
    <div className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="w-full">
        <Menu />
        <div className="w-full bg-[url('/contacto.jpg')] min-h-screen bg-cover bg-center grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] justify-center items-center">
          <div>
            <h2 className="px-10 text-2xl text-white bg-slate-900 p-5 font-bold">
              Protect your home before the next storm.
            </h2>
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
