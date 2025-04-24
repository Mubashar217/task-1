import Image from "next/image";
import Navbar from "./(components)/navbar/Navbar";
import Header from "./(components)/header/Header";
import Footer from "./(components)/footer/Footer";
// import Button from "./(components)/button/Button";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Header/>
   <Footer/>
   {/* <Button/> */}
   </>
  );
}
