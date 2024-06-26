<<<<<<< HEAD
import  { lazy, useContext, useState } from "react";
=======
import { lazy } from "react";
>>>>>>> upstream/main
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Casestudies from "./pages/Casestudies";
import Process from "./pages/Process";
<<<<<<< HEAD
import TahirNavBar from "./Components/NavBar/TahirNavBar";
import MenuButton from "./Components/NavBar/MenuButton/MenuButton";
import { Btncontext } from "./Components/Contexts/MenuButton";
// import ParticlesBackground from "./Components/Particles/ParticlesBackground";
// import Testing from "./pages/Testing";
// to use the lazy loading and code spliting we need 
// to wrap the main file for example in this app i wrap the app.js 
// becase in this component i use lazy loading
// ================================================
// lazy loading and spling component through lazy 
// =================================================
const AboutUs=lazy(()=>{return import("./pages/AboutUs")})
const ContactUs=lazy(()=>{return import("./pages/ContactUs")})
const Blog=lazy(()=>{return import("./pages/Blog")})
const BlogDetail=lazy(()=>{return import("./Components/BlogDetail/BlogDetail")})
const CaseStudyDetail=lazy(()=>{return import("./Components/CaseStudyDetailPage/CaseStudyDetail")})
// ================================================
// lazy loading and spling component through lazy 
// =================================================

const App = () => {
  return (
    

=======
import LoginForm from "./Dashboard/components/LoginForm";

// to use the lazy loading and code spliting we need
// to wrap the main file for example in this app i wrap the app.js
// becase in this component i use lazy loading
// ================================================
// lazy loading and spling component through lazy
// =================================================
const AboutUs = lazy(() => {
  return import("./pages/AboutUs");
});
const ContactUs = lazy(() => {
  return import("./pages/ContactUs");
});
const Blog = lazy(() => {
  return import("./pages/Blog");
});
const BlogDetail = lazy(() => {
  return import("./Components/BlogDetail/BlogDetail");
});
const CaseStudyDetail = lazy(() => {
  return import("./Components/CaseStudyDetailPage/CaseStudyDetail");
});
const DashboardSidebar = lazy(() => {
  return import("./Dashboard/DashboardNavBar");
});
const DashBlog = lazy(() => {
  return import("./Dashboard/components/DashBlog");
});
const DashContact = lazy(() => {
  return import("./Dashboard/components/DashContact");
});
const Dashhome = lazy(() => {
  return import("./Dashboard/components/Dashhome");
});
const DashCaseStudy = lazy(() => {
  return import("./Dashboard/components/DashCaseStudy");
});
// ================================================
// lazy loading and spling component through lazy
// =================================================
const App = () => {
  return (
    <div>
>>>>>>> upstream/main
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutComponent />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/casestudies" element={<Casestudies />} />
<<<<<<< HEAD
            <Route path="/casestudies/:id/:catagory" element={<CaseStudyDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route  path="blog/:postId" element={<BlogDetail />} />
=======
            <Route
              path="/casestudies/:id/:catagory"
              element={<CaseStudyDetail />}
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="blog/:postId" element={<BlogDetail />} />
>>>>>>> upstream/main
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/process" element={<Process />} />
          </Route>
<<<<<<< HEAD
        </Routes>
      </BrowserRouter>


  );
};

const LayoutComponent = () => {
  const[menuToggle ,setMenuToggle]=useState(true)

  return (
    <Btncontext.Provider value={{menuToggle, setMenuToggle}}>

    <div>
      {/* lg:hidden block */}
      <div className="hidden "> <NavBar /></div>
      {/* {clasName=''} */}


      {/* <ParticlesBackground/>   */}
      {/* <Testing/> */}
      {/* lg:block hidden*/}
      <div className=""> <TahirNavBar value={menuToggle}/></div>

             {/* lg:block hidden*/}
      <div className=""><MenuButton/></div> 
      <Outlet />
      <Footer />
      
    </div>
    </Btncontext.Provider>

  );
};

export default App;
=======

          <Route path="/login" element={<LoginForm />} />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="/dashboard/contact" element={<DashContact />} />
            <Route path="/dashboard/blog" element={<DashBlog />} />
            <Route path="/dashboard/home" element={<Dashhome />} />
            <Route path="/dashboard/casestudies" element={<DashCaseStudy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
const DashboardLayout = () => {
  return (
    <div>
      <DashboardSidebar />
      <Outlet />
    </div>
  );
};
const LayoutComponent = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
>>>>>>> upstream/main
