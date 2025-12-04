import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Search } from "lucide-react";
import { useLanguage } from "../LunguageContext";
import { CgMenuGridO } from "react-icons/cg";
import { GiWireframeGlobe } from "react-icons/gi";
import { FaGlobeAfrica } from "react-icons/fa";
import { FcLink } from "react-icons/fc";
import SearchModal from './../searchModal';



const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { language, changeLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { path: "/", label: t("home") },
    { path: "/sow", label: t("sow") },
    { path: "/connect", label: t("connect") },
    { path: "/watch", label: t("watch") },
    { path: "/awaken", label: t("awaken") },
    { path: "/gallery", label: t("gallery") },
    { path: "/events", label: t("events") },
    { path: "/stories", label: t("stories") },
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "nd", name: "Ndebele" },
    { code: "fr", name: "Français" },
  ];

  return (
    <>
      {/* Search Modal */}
      <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-purple-950/80 backdrop-blur-xl shadow-2xl shadow-purple-900/50"
            : "bg-gradient-to-b from-purple-950/90 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group relative z-50">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-40 h-13 flex items-center justify-center"
              >
                <img
                  src="/logo2.png"
                  alt="UFIC Youth Logo"
                  className="w-40 h-13 object-contain"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <Link key={link.path} to={link.path}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                      location.pathname === link.path
                        ? "text-amber-400"
                        : "text-purple-200 hover:text-amber-300"
                    }`}
                  >
                    <span className="relative z-10 font-medium tracking-wide">
                      {link.label}
                    </span>
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-purple-500/20 rounded-lg"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-amber-400/0 group-hover:bg-amber-400/10 rounded-lg transition-all duration-300" />
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Search, Language Selector & Mobile Menu */}
            <div className="flex items-center space-x-4 relative z-50">
              {/* Desktop Search Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSearch(true)}
                className="hidden lg:flex items-center space-x-2 px-3 py-2 hover:border-amber-400/50 transition-all duration-300 rounded-lg hover:bg-purple-900/50"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-amber-400" />
              </motion.button>

              {/* Language Selector */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="flex items-center space-x-2 px-3 py-2 hover:border-amber-400/50 transition-all duration-300"
                >
                  <GiWireframeGlobe className="w-4 h-4 text-amber-400" />
                  <span className="text-purple-200 text-sm font-medium uppercase">
                    {language}
                  </span>
                </motion.button>

                <AnimatePresence>
                  {showLangMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-40 rounded-lg shadow-2xl overflow-hidden bg-purple-900/95 backdrop-blur-xl"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            changeLanguage(lang.code);
                            setShowLangMenu(false);
                          }}
                          className={`w-full px-4 py-3 text-left transition-all duration-300 ${
                            language === lang.code
                              ? " text-amber-400"
                              : "text-purple-200 hover:bg-purple-800/50"
                          }`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Search & Menu Toggle */}
              <div className="lg:hidden flex items-center space-x-2">
                {/* Mobile Search Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSearch(true)}
                  className="p-2 hover:border-amber-400/50 transition-all duration-300 rounded-lg hover:bg-purple-900/50"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5 text-amber-400" />
                </motion.button>

                {/* Mobile Menu Toggle */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 hover:border-amber-400/50 transition-all duration-300"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6 text-amber-400" />
                  ) : (
                    <CgMenuGridO className="w-6 h-6 text-amber-400" />
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Background with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950"
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="w-full h-full"
                  style={{
                    backgroundImage: `radial-gradient(circle, #fbbf24 1px, transparent 1px)`,
                    backgroundSize: "50px 50px",
                  }}
                />
              </div>
            </motion.div>

            {/* Menu Content */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative h-full flex flex-col items-center justify-center px-6"
            >
              {/* Navigation Links */}
              <div className="w-full max-w-md space-y-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className={`relative px-6 py-4 rounded-2xl text-xl font-medium transition-all duration-300 overflow-hidden group flex items-center justify-between ${
                        location.pathname === link.path
                          ? "text-amber-400"
                          : "text-purple-200"
                      }`}
                    >
                      {/* Background effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Active indicator */}
                      {location.pathname === link.path && (
                        <motion.div
                          layoutId="activeMobileTab"
                          className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-purple-500/20 rounded-2xl"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                      
                      <span className="relative z-10">{link.label}</span>
                      
                      {/* Arrow Icon */}
                      <motion.span
                        className="relative z-10 text-2xl"
                        animate={{ x: location.pathname === link.path ? [0, 5, 0] : 0 }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: location.pathname === link.path ? Infinity : 0,
                          ease: "easeInOut" 
                        }}
                      >
                        <FcLink />
                      </motion.span>
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* Language Selector in Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.2 }}
                className="mt-12 flex items-center justify-center gap-4"
              >
                {languages.map((lang) => (
                  <motion.button
                    key={lang.code}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      language === lang.code
                        ? "bg-gradient-to-r from-amber-500 to-amber-600 text-purple-950 shadow-lg shadow-amber-500/50"
                        : "bg-purple-800/50 text-purple-200 hover:bg-purple-800/70"
                    }`}
                  >
                    {lang.code.toUpperCase()}
                  </motion.button>
                ))}
              </motion.div>

              {/* Decorative logo at bottom */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;