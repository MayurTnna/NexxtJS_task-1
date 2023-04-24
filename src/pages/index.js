import ChooseOption from "@/components/ChooseOption";
import Destination from "@/components/Destination";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";
import Review from "@/components/Review";


const index = () => {
  return (
    <>
      <Header />
      <ChooseOption/>
      <Destination/>
      <Review/>
      <NewsLetter/>
    </>
  );
};

export default index;
