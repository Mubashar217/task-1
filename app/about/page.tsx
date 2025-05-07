import Footer from "../(components)/footer/Footer";
import Navbar from "../(components)/navbar/Navbar";

export default function About() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Navbar />
      <h1 className="text-4xl font-bold text-center py-20">About page</h1>
      <div className=" top-[1639px] left-[1870px] w-[519px] h-[259.5px] border-[4px] border-dotted border-black rounded-t-full rotate-[-90deg] overflow-hidden"></div>

      <Footer />
    </div>
  );
}
