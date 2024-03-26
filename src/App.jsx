import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import components 
import Navbar from './components/navbar/Navbar';
import Footer from "./components/footer/Footer";

// import pages 
 const HomePage = lazy(() => import("./pages/HomePage"));
 const AboutPage = lazy(() => import("./pages/AboutPage"));
 const ServicePage = lazy(() => import("./pages/ServicesPage"));
 const TeamPage = lazy(() => import("./pages/TeamPage"));
 const PlanPage = lazy(() => import("./pages/PlanPage"));
 const ContactUsPage = lazy(() => import("./pages/ContactUsPage"));
 const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Navbar />

          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route  path='/about-us' element={<AboutPage />} />
              <Route  path='/services' element={<ServicePage />} />
              <Route  path='/team' element={<TeamPage />} />
              <Route  path='/plans' element={<PlanPage />} />
              <Route  path='/contact-us' element={<ContactUsPage />} />
              <Route  path='*' element={<ErrorPage />} />
            </Routes>
          </Suspense>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
