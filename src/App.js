import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import ContactPage from "./Pages/ContactPage/Contact";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Pages/SharedComponents/Footer/Footer";
import MobileAndDesktop from "./Pages/SharedComponents/Header/MobileAndDesktop";
import WhatWeDoPage from "./Pages/WhatWeDoPage/WhatWeDoPage";
import WhoWeArePage from "./Pages/WhoWeArePage/WhoWeArePage";
import WhyUsPage from "./Pages/WhyUsPage/WhyUsPage";
import Preloader from "./Preloader/Preloader";
function App() {

  const [preloader, setPreloader] = useState(false);
  
    useEffect(() => {
        setPreloader(true);
        setTimeout(() => {
            setPreloader(false);
        }, 1000);
    }, []);
  
  return (
        <div>
          {
              preloader ?
                  <Preloader loading={ preloader }></Preloader>
              :
              <>
                  <BrowserRouter>
                    <MobileAndDesktop/>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/whoWeAre" element={<WhoWeArePage />} />
                      <Route path="/whatWeDo" element={<WhatWeDoPage />} />
                      <Route path="/WhyUs" element={<WhyUsPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                    <Footer></Footer>
                </BrowserRouter>
              </>
          }
    </div>
  );
}

export default App;
