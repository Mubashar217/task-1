import Image from "next/image";
import Navbar from "./(components)/navbar/Navbar";
import Header from "./(components)/header/Header";
import Footer from "./(components)/footer/Footer";
import Card2 from "./(components)/card2/Card2";
// import Button from "./(components)/button/Button";

export default function Home() {
  return (
   <><div className="max-w-[1920px] mx-auto">

   <Navbar/>
   <Header/>
   <Card2/>
   <Footer/>
   {/* <Button/> */}
   </div>
   </>
  );
}
