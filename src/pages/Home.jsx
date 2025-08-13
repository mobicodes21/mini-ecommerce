import AdvantagesSection from '../components/AdvantagesSection';
import CategoriesSwiper from "../components/CategoriesSwiper"
import FullWidthSwiper from '../components/FullWidthSwiper';
import NewsLetter from "../components/NewsLetter"
import PopularProducts from '../components/PopularProducts';
import SpecialOffers from '../components/SpecialOffers';

{/* Home Page - Main landing page of store including:
-FullWidthSwiper: First slider of Home Page
-CategoriesSwiper: Second slider for categories
-PopularProducts: Section for popular products
-SpecialOffers: Slider for products with offer
-AdvantagesSection: Section for showing the advantages of the online-shop
-NewsLetter: Email subscription for  */}
export default function Home() {
  return (
    <>
      <FullWidthSwiper/>
          <CategoriesSwiper/>
          <PopularProducts/>
          <SpecialOffers/>
      <AdvantagesSection/>
            <NewsLetter/>
    </>
  )
}
