// import Sample from "components/Sample";
import "assets/css/App.css";
import Header from "Layouts/UI/Header";
import Footer from "Layouts/UI/Footer";
import HeaderBanner from "Layouts/UI/HeaderBanner";
import Aboutus from "Layouts/UI/Aboutus";
import Service from "Layouts/UI/Service";
import Experience from "Layouts/UI/Experience";
import EducationSkills from "Layouts/UI/EducationSkills";
import MyPortfolio from "Layouts/UI/MyPortfolio";
import CustomerReview from "Layouts/UI/CustomerReview";
import RecentArtical from "Layouts/UI/RecentArtical";

const HomePage = () => {
  
  return (
    <h1>
      <div className="App">
        <Header />
        <HeaderBanner/>
        <Aboutus/>
        <main className="">
       
          {/* <Sample></Sample> */}
         
          <Service/>
          <Experience/>
          <EducationSkills/>
          <MyPortfolio/>
          <CustomerReview/>
          <RecentArtical/>
        </main>
        <Footer></Footer>
      </div>
    </h1>
  );
};

export default HomePage;
