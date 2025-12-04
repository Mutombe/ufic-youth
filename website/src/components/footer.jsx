import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Heart,
  ArrowUp,
  ExternalLink,
} from "lucide-react";
import { TiLocation } from "react-icons/ti";
import { IoPhonePortrait } from "react-icons/io5";
import { HiPaperAirplane } from "react-icons/hi";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";

import { toast } from "sonner";
import { useLanguage } from "../LunguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    toast.success("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Sermons", path: "/watch" },
    { name: "Testimonies", path: "/stories" },
    { name: "Contact", path: "/connect" },
  ];

  const ministries = [
    { name: "Youth Ministry", path: "/" },
    { name: "Children Ministry", path: "/" },
    { name: "Worship Team", path: "/" },
    { name: "Prayer Ministry", path: "/awaken" },
    { name: "Outreach", path: "/" },
  ];

  const resources = [
    { name: "Watch Live", path: "/watch" },
    { name: "Give Online", path: "/sow" },
    { name: "Prayer Request", path: "/connect" },
    { name: "Life Groups", path: "/connect" },
    { name: "Devotionals", path: "/awaken" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/ufiministries",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/ufiministries",
      color: "hover:text-pink-500",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/ufiministries",
      color: "hover:text-red-500",
    },
    {
      name: "Twitter",
      icon: FaXTwitter,
      url: "https://twitter.com/ufiministries",
      color: "hover:text-sky-500",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-purple-950 to-purple-900 border-t border-purple-800/50 overflow-hidden">
      {/* Background Image with Blend */}
      <div className="absolute inset-0">
        <img
          src="/9.avif"
          alt=""
          className="w-full h-full object-cover opacity-50 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/90 via-purple-900/80 to-purple-900/90"></div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #fbbf24 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <Link
                  to="/"
                  className="inline-flex items-center space-x-3 mb-6 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="w-14 h-14 flex items-center justify-center"
                  >
                    <img
                      src="/logo.png"
                      alt="UFIC Youth Logo"
                      className="w-8 h-10 object-contain"
                    />
                  </motion.div>
                  <div>
                    <div className="text-amber-400 font-bold text-xl tracking-wide">
                      UFIC YOUTH
                    </div>
                    <div className="text-purple-300 text-xs tracking-widest">
                      A God Nation
                    </div>
                  </div>
                </Link>

                <p className="text-purple-300 text-sm leading-relaxed mb-6">
                  Building a God society of all people, of all nations. Join us
                  in transforming lives through faith, fellowship, and purpose.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 bg-purple-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-purple-300 ${social.color} transition-all duration-300 border border-purple-700/30 hover:border-amber-400/50`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                Quick Links
                <div className="h-px flex-1 bg-gradient-to-r from-amber-400 to-transparent"></div>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-purple-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group text-sm"
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="inline-block"
                      >
                        →
                      </motion.span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Ministries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                Ministries
                <div className="h-px flex-1 bg-gradient-to-r from-amber-400 to-transparent"></div>
              </h3>
              <ul className="space-y-3">
                {ministries.map((ministry, index) => (
                  <li key={index}>
                    <Link
                      to={ministry.path}
                      className="text-purple-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group text-sm"
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="inline-block"
                      >
                        →
                      </motion.span>
                      {ministry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                Resources
                <div className="h-px flex-1 bg-gradient-to-r from-amber-400 to-transparent"></div>
              </h3>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <Link
                      to={resource.path}
                      className="text-purple-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group text-sm"
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="inline-block"
                      >
                        →
                      </motion.span>
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 pt-12 border-t border-purple-800/50"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-white font-bold text-2xl mb-2">
                  Stay <span className="text-amber-400">Connected</span>
                </h3>
                <p className="text-purple-300 text-sm">
                  Get updates on events, sermons, and ministry news delivered to
                  your inbox
                </p>
              </div>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 bg-purple-800/50 backdrop-blur-sm border border-purple-700/30 rounded-xl text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-purple-950 font-bold rounded-xl shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span className="hidden sm:inline">Subscribe</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 pt-12 border-t border-purple-800/50"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Email */}
              <motion.a
                href="mailto:info@ufiministries.org"
                whileHover={{ y: -5 }}
                className="flex items-center gap-4 p-4 bg-purple-800/30 backdrop-blur-sm rounded-xl border border-purple-700/30 hover:border-amber-400/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiPaperAirplane className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-purple-300 text-xs uppercase tracking-wider mb-1">
                    Email
                  </div>
                  <div className="text-white font-medium group-hover:text-amber-400 transition-colors">
                    info@ufiministries.org
                  </div>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+2638677555777"
                whileHover={{ y: -5 }}
                className="flex items-center gap-4 p-4 bg-purple-800/30 backdrop-blur-sm rounded-xl border border-purple-700/30 hover:border-amber-400/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <IoPhonePortrait className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-purple-300 text-xs uppercase tracking-wider mb-1">
                    Phone
                  </div>
                  <div className="text-white font-medium group-hover:text-amber-400 transition-colors">
                    +263 867 755 5777
                  </div>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                whileHover={{ y: -5 }}
                className="flex items-center gap-4 p-4 bg-purple-800/30 backdrop-blur-sm rounded-xl border border-purple-700/30 hover:border-amber-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TiLocation className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-purple-300 text-xs uppercase tracking-wider mb-1">
                    Location
                  </div>
                  <div className="text-white font-medium">Harare, Zimbabwe</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-purple-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-purple-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} UFIC Youth. All rights reserved. Made
              with{" "}
              <Heart className="inline-block w-4 h-4 text-amber-400 fill-amber-400" />{" "}
              for the Kingdom
            </div>
            <div className="flex items-center gap-6">
              <a
                href="/privacy"
                className="text-purple-400 hover:text-amber-400 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-purple-400 hover:text-amber-400 text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="https://www.ufiministries.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-amber-400 text-sm transition-colors flex items-center gap-1"
              >
                Main Site
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full shadow-2xl shadow-amber-500/50 flex items-center justify-center text-purple-950 z-50 hover:shadow-amber-500/80 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;