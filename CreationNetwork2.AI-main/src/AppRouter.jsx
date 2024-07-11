import React, { useContext, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Testimonials from "./Pages/Testimonials";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Pricing from "./Pages/Pricing";
import RoadMaps from "./Pages/Company/RoadMaps";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";
import VoiceOver from "./Pages/VoiceOver";
import DesignStudio from "./Pages/DesignStudio";
import Transcriber from "./Tools/Transcriber/Transcriber";
import Copywriting from "./Tools/CopyWriting/CopyWriting";
import ImageGenerator from "./Tools/ImageGenerator";
import GetCopyWritingState from "./Context/Tools/CopyWriting/GetCopyWritingState";
import { AuthContext } from "./Context/AuthContext";
import PageNotFound from "./Pages/PageNotFound";

const AppRouter = () => {
  const { token } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token && location.pathname.slice(0, 6) === "/tools") {
      navigate("/login");
    }
  }, [token, location.pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/company/roadMap" element={<RoadMaps />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <>
          <Route path="/tools/voice-over" element={<VoiceOver />} />
          <Route path="/tools/design-studio" element={<DesignStudio />} />
          <Route
            path="/tools/transcriber"
            element={
              <GetCopyWritingState>
                <Transcriber />
              </GetCopyWritingState>
            }
          />
          <Route
            path="/tools/copywriting"
            element={
              <GetCopyWritingState>
                <Copywriting />
              </GetCopyWritingState>
            }
          />
          <Route path="/tools/image-generator" element={<ImageGenerator />} />
          <Route path="*" element={<PageNotFound />} />
        </>
      </Routes>
    </>
  );
};

export default AppRouter;
