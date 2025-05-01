// import Image from "next/image";
import Service from "./Service/page";
import ChooseOur from "./ChooseOur/page";
import Introduct from "./Introduct/page";
import Pricing  from "./Pricing/page";
import Header from "./widgets/Header";
import FAQ from "./FAQ/page";
import Contact from "./Contact/page";
import Footer from "./widgets/Footer";

export default function Home() {
  return (
    <div className="font-[Kanit] bg-white text-gray-800 ">
      <Header />
      <Introduct />
      <Service />
      <ChooseOur />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />  
    </div>
  );
}
