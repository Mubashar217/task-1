import Cardmart from "../(components)/cardmart/Cardmart";
import Collec1 from "../(components)/collec1/Collec1";
import Footer from "../(components)/footer/Footer";
import Navbar from "../(components)/navbar/Navbar";

export default function Collection() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Navbar />
      <Collec1/>
      <Cardmart />
      <Footer />
    </div>
  );
}
