import ChooseOption from "@/components/ChooseOption";
import Destination from "@/components/Destination";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";
// import NewsLetter from "@/components/NewsLetter";
import Review from "@/components/Review";


const index = () => {
  return (
    <>
      <Header />
      <ChooseOption/>
      <Destination/>
      <Review/>
      <NewsLetter/>
      <Footer/>
    </>
  );
};

export default index;
