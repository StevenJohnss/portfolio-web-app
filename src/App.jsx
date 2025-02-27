import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Payment,
  PaymentSuccess,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ top: "100px", textAlign: "center" }}
      />
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Hero />
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
                {/* <Feedbacks /> */}
                <div className="relative z-0">
                  <Contact />
                  <StarsCanvas />
                </div>
              </>
            }
          />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
