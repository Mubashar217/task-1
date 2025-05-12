import Aboutcomp from "../(components)/aboutcomp/Aboutcomp";
import Aboutcomp2 from "../(components)/aboutcomp2/Aboutcomp2";
import Footer from "../(components)/footer/Footer";
import Navbar from "../(components)/navbar/Navbar";

export default function About() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Navbar />
     <Aboutcomp/>
     <Aboutcomp2/>

      <Footer />
    </div>
  );
}
