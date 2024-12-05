import Category from "../../components/category/Category"
import HeroSection from "../../components/heroSection/HeroSection"
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard"
import Layouts from "../../components/layouts/Layouts"
import Testimonial from "../../components/testimonial/Testimonial"
import Track from "../../components/track/Track"

const Home = () => {
  return (
    <Layouts>
        <HeroSection />
        <Category />
        <HomePageProductCard />
        <Track />
        <Testimonial />
    </Layouts>
  )
}

export default Home