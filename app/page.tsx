import Image from "next/image";
import Navbar from "./(components)/navbar/Navbar";
import Header from "./(components)/header/Header";
import Footer from "./(components)/footer/Footer";
import Card2 from "./(components)/card2/Card2";
import Cardmart from "./(components)/cardmart/Cardmart";
import Card4 from "./(components)/card4/Card4";
import Girlcard from "./(components)/girlcard/Girlcard";
import Card5 from "./(components)/card5/Card5";

// import Button from "./(components)/button/Button";

export default function Home() {
  return (
    <>
      <div className="max-w-[1920px] mx-auto">
        <Navbar />
        <Header />
        <Card2 />
        <Cardmart />
        <Card4 />
        <Girlcard />
        <Card5 />
        <Footer />
        {/* <Button/> */}
      </div>
    </>
  );
}
