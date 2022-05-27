import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import { dark } from "./styles/Themes";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import Home from "./sections/Home";

import "locomotive-scroll/dist/locomotive-scroll.css";
import { AnimatePresence } from "framer-motion";
import About from "./sections/AboutUs";
import Shop from "./sections/Shop";
import ScrollTriggerProxy from "./components/ScrollTrigerProxy";
import Banner from "./sections/Banner";
import NewArrivals from "./sections/NewArrivals";
import Footer from "./sections/Footer";
import Loader from "./components/Loader";

function App() {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <div>
      <GlobalStyles />

      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            smartphone: { smooth: true },
            tablet: { smooth: true },
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <AnimatePresence>{!loaded && <Loader />}</AnimatePresence>
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home />
              <About />
              <Shop />
              <Banner />
              <NewArrivals />
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
