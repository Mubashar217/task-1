import Aftereffect from "../(components)/aftereffect/Aftereffect";
import Cardmart from "../(components)/cardmart/Cardmart";
import Footer from "../(components)/footer/Footer";
import Navbar from "../(components)/navbar/Navbar";
import Pdp2 from "../(components)/pdp2/Pdp2";
import Pdp3 from "../(components)/pdp3/Pdp3";
import Pdpmain from "../(components)/pdpmain/Pdpmain";

export default function Pdp() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Navbar />
      <Pdpmain />
      <Pdp2 />
      <Aftereffect />
      <Pdp3 />
      <Cardmart />
      <Footer />
    </div>
  );
}
