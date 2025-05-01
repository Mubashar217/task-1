import Footer from "../(components)/footer/Footer";
import Navbar from "../(components)/navbar/Navbar";

export default function Collection() {
    return (
      <div className="max-w-[1920px] mx-auto">
        <Navbar/>
        <h1 className="text-4xl font-bold text-center py-20">Collection</h1>
        <Footer/>
      </div>
    );
  }
  