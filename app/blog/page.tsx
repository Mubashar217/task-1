import Footer from "../(components)/footer/Footer";
import Navbar from "../(components)/navbar/Navbar";

export default function Blog() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Navbar />
      <h1 className="text-4xl font-bold text-center py-20">Blog Page</h1>
      <Footer />
    </div>
  );
}
