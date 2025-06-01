import HeaderSwiper from "@/components/HeaderSwiper";
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import Staffs from "@/components/Staffs";
import AboutUs from "@/components/AboutUs";
import BookAnAppointment from "@/components/BookAnAppointment";
import WhyChooseUs from "@/components/WhyChooseUs";
import Blog from "@/components/Blog";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white">
      <Navbar />

      <HeaderSwiper />

      <OurServices />

      <BookAnAppointment />

      <ContactUs />

      <Staffs />

      <AboutUs />

      <WhyChooseUs />

      <Gallery />

      <Blog />

      <Footer />

      <WhatsappButton />
    </div>
  );
}
