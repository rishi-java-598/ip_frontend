
import Header from "./Header";
import Hero from "./Hero";
import Stats from "./Stats";
import WhyChoose from "./WhyChoose";
import Membership from "./Membership";
import Footer from "./Footer";











export default function Home() {
  return (
    <>
    <div id="inroot">
      <Header />
      <Hero />
      
      {/* <div style={{ width: "90%", height: "80vh", margin: "5vh auto", borderRadius: "50px", backgroundImage: "url(/images/bigimg1.png)", backgroundPosition: "center", backgroundSize: "cover" }}></div> */}
      <Stats />
      <WhyChoose />
      <Membership />
      </div>
      <Footer />
    </>
  );
}
