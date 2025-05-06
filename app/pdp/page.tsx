import Aftereffect from "../(components)/aftereffect/Aftereffect";
import Cardmart from "../(components)/cardmart/Cardmart";
import Footer from "../(components)/footer/Footer";
import Navbar from "../(components)/navbar/Navbar";
import Pdpmain from "../(components)/pdpmain/Pdpmain";

export default function Pdp() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Navbar />
      <Pdpmain />
      <Aftereffect />
      <Cardmart />
      <Footer />
    </div>
  );
}
;