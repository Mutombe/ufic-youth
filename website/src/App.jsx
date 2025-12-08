import React, { useEffect, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageProvider } from "./LunguageContext";
import { Toaster } from "sonner";
import Home from "./pages/homepage";
import Sow from "./pages/sow";
import Connect from "./pages/connect";
import Watch from "./pages/watch";
import Awaken from "./pages/awaken";
import Stories from "./pages/stories";
import Navigation from "./components/navigation";
import Events from "./pages/events";
import Gallery from "./pages/gallery";
import Footer from "./components/footer";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Loading Component
const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative inline-block"
        >
          {/* Logo Container */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Logo Circle Background */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-2xl"
            />
            
            {/* Logo Letter */}
            <img
              src="/logo4.png"
              alt="Logo"
              className="w-22 h-26"
            />
          </div>

          {/* Glow effect behind logo */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 -z-10 blur-2xl"
          >
            <div className="w-full h-full bg-gradient-to-r from-amber-400 to-amber-600 opacity-50 rounded-full" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col items-center"
        >
          {/* Circular Spinner */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-12 h-12 rounded-full border-4 border-amber-400/20 border-t-amber-400"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};


const PageWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // On initial load, just set loading to false after minimum time
    if (isInitialLoad) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsInitialLoad(false);
      }, 1000);
      return () => clearTimeout(timer);
    }

    // For subsequent navigation, show loading
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location, isInitialLoad]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-amber-900 niveau-font">
          <style jsx>{`
            /* Grift Font Face - Light */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-light.otf") format("opentype"),
                url("./fonts/grift-light.ttf") format("truetype");
              font-weight: 300;
              font-style: normal;
              font-display: swap;
            }

            /* Grift Font Face - Light Italic */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-lightitalic.otf") format("opentype"),
                url("./fonts/grift-lightitalic.ttf") format("truetype");
              font-weight: 300;
              font-style: italic;
              font-display: swap;
            }

            /* Grift Font Face - Regular */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-black.otf") format("opentype"),
                url("./fonts/grift-black.ttf") format("truetype");
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            /* Grift Font Face - Italic */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-italic.otf") format("opentype"),
                url("./fonts/grift-italic.ttf") format("truetype");
              font-weight: 400;
              font-style: italic;
              font-display: swap;
            }

            /* Grift Font Face - Medium */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-medium.otf") format("opentype"),
                url("./fonts/grift-medium.ttf") format("truetype");
              font-weight: 500;
              font-style: normal;
              font-display: swap;
            }

            /* Grift Font Face - Medium Italic */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-mediumitalic.otf") format("opentype"),
                url("./fonts/grift-mediumitalic.ttf") format("truetype");
              font-weight: 500;
              font-style: italic;
              font-display: swap;
            }

            /* Grift Font Face - Bold */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-bold.otf") format("opentype"),
                url("./fonts/grift-bold.ttf") format("truetype");
              font-weight: 700;
              font-style: normal;
              font-display: swap;
            }

            /* Grift Font Face - Bold Italic */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-bolditalic.otf") format("opentype"),
                url("./fonts/grift-bolditalic.ttf") format("truetype");
              font-weight: 700;
              font-style: italic;
              font-display: swap;
            }

            /* Grift Font Face - Extrabold */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-extrabold.otf") format("opentype"),
                url("./fonts/grift-extrabold.ttf") format("truetype");
              font-weight: 800;
              font-style: normal;
              font-display: swap;
            }

            /* Grift Font Face - Extrabold Italic */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-extrabolditalic.otf") format("opentype"),
                url("./fonts/grift-extrabolditalic.ttf") format("truetype");
              font-weight: 800;
              font-style: italic;
              font-display: swap;
            }

            /* Grift Font Face - Extralight */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-extralight.otf") format("opentype"),
                url("./fonts/grift-extralight.ttf") format("truetype");
              font-weight: 200;
              font-style: normal;
              font-display: swap;
            }

            /* Grift Font Face - Extralight Italic */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-extralightitalic.otf") format("opentype"),
                url("./fonts/grift-extralightitalic.ttf") format("truetype");
              font-weight: 200;
              font-style: italic;
              font-display: swap;
            }

            /* Grift Font Face - Black */
            @font-face {
              font-family: "Grift";
              src: url("./fonts/grift-blackitalic.otf") format("opentype"),
                url("./fonts/grift-blackitalic.ttf") format("truetype");
              font-weight: 900;
              font-style: italic;
              font-display: swap;
            }

            /* Niveau Grotesk Font Face - Regular */
            @font-face {
              font-family: "Niveau Grotesk";
              src: url("./niveau/NiveauGroteskRegular.ttf") format("truetype");
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            /* Niveau Grotesk Font Face - Bold */
            @font-face {
              font-family: "Niveau Grotesk";
              src: url("./niveau/Niveau Grotesk Bold.ttf") format("truetype");
              font-weight: 700;
              font-style: normal;
              font-display: swap;
            }

            /* Font utility classes */
            .grift-font {
              font-family: "Grift", "Inter", "Segoe UI", Tahoma, Geneva, Verdana,
                sans-serif;
            }

            .niveau-font {
              font-family: "Niveau Grotesk", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }

            body {
              overflow-x: hidden;
            }

            /* Smooth scrolling */
            html {
              scroll-behavior: smooth;
            }
          `}</style>
          <ScrollToTop />

          <PageWrapper>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sow" element={<Sow />} />
              <Route path="/connect" element={<Connect />} />
              <Route path="/watch" element={<Watch />} />
              <Route path="/awaken" element={<Awaken />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
            <Footer />
          </PageWrapper>

          <Toaster
            position="top-right"
            theme="dark"
            toastOptions={{
              style: {
                background: "#581c87",
                color: "#fbbf24",
                border: "1px solid #fbbf24",
              },
            }}
          />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
