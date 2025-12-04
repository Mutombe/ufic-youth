import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Play,
  ArrowRight,
  Calendar,
  Users,
  Heart,
  Sparkles,
  ChevronRight,
  Book,
  Globe2,
} from "lucide-react";
import { GiTakeMyMoney } from "react-icons/gi";
import { useLanguage } from "../LunguageContext";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { TiHeartOutline } from "react-icons/ti";
import { IoCalendarOutline } from "react-icons/io5";

// Scrolling Column Component
const ScrollingColumn = ({ images, direction, delay = 0 }) => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate images for seamless infinite loop
  const duplicatedImages = [...images, ...images];

  return (
    <div
      className="relative overflow-hidden h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        animate={{
          y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: delay,
        }}
        style={{
          willChange: "transform",
        }}
        className={`flex flex-col gap-4 ${isPaused ? "pause-animation" : ""}`}
      >
        {duplicatedImages.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-80 rounded-xl overflow-hidden flex-shrink-0"
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 to-transparent" />
          </div>
        ))}
      </motion.div>

      <style jsx>{`
        .pause-animation {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
};

const Home = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();

  // Hero background images for scrolling columns
  const column1Images = [
    "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1494790778202-cad84cf45f1d?w=400&h=600&fit=crop",
  ];

  const column2Images = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=400&h=600&fit=crop",
  ];

  const column3Images = [
    "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=600&fit=crop",
  ];

  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Latest news data
  const newsItems = [
    {
      title: "Over 2000 Men Give Their Lives To Christ",
      excerpt: "A historic altar call at the Men's Conference",
      likes: 227,
      image:
        "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=600",
    },
    {
      title: "The Transformative Power of Mentorship",
      excerpt: "Lessons from Emmanuel Makandiwa's Sunday Service",
      likes: 108,
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600",
    },
    {
      title: "Overcoming Barrenness Through Faith",
      excerpt: "Priscillah Amanda Chirenda's Journey",
      likes: 94,
      image:
        "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=600",
    },
  ];

  const programs = [
    {
      day: "Monday-Saturday",
      time: "05:00-06:00",
      name: "A Life of Prayer",
      color: "from-purple-600 to-purple-800",
      image:
        "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&h=300&fit=crop",
    },
    {
      day: "Tuesday",
      time: "9PM",
      name: "Branch Stewardship",
      color: "from-blue-600 to-blue-800",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
    },
    {
      day: "Wednesday",
      time: "7PM",
      name: "Youth Online Prayers",
      color: "from-pink-600 to-pink-800",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop",
    },
    {
      day: "Thursday",
      time: "6PM",
      name: "Midweek Service",
      color: "from-amber-600 to-amber-800",
      image:
        "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=400&h=300&fit=crop",
    },
    {
      day: "Saturday",
      time: "9AM",
      name: "Leadership Prayer",
      color: "from-purple-600 to-purple-800",
      image: "/34.jpg",
    },
    {
      day: "Sunday",
      time: "9AM",
      name: "Sunday Service",
      color: "from-blue-600 to-cyan-600",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section with Infinite Scrolling Columns */}
      <motion.section
        style={{ opacity: heroOpacity }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Infinite Scrolling Background Columns */}
        <div className="absolute inset-0 flex gap-4 px-2">
          {/* Column 1 - Scrolling UP */}
          <div className="flex-1 h-full">
            <ScrollingColumn images={column1Images} direction="up" delay={0} />
          </div>

          {/* Column 2 - Scrolling DOWN */}
          <div className="flex-1 h-full hidden sm:block">
            <ScrollingColumn
              images={column2Images}
              direction="down"
              delay={0}
            />
          </div>

          {/* Column 3 - Scrolling UP */}
          <div className="flex-1 h-full hidden lg:block">
            <ScrollingColumn images={column3Images} direction="up" delay={0} />
          </div>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/95 via-purple-950/85 to-purple-950/95" />

        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#fbbf24 1px, transparent 1px), linear-gradient(90deg, #fbbf24 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <motion.span
              className="inline-block text-amber-400 text-sm font-bold tracking-[0.3em] uppercase mb-4"
              animate={{
                textShadow: [
                  "0 0 10px rgba(251,191,36,0.5)",
                  "0 0 20px rgba(251,191,36,0.8)",
                  "0 0 10px rgba(251,191,36,0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              UFIC Youth
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-none"
          >
            <span className="block text-white mb-2">Building A</span>
            <span className="block bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              God Nation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-purple-200 text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light"
          >
            {t("vision")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/connect">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-purple-950 font-bold rounded-full shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/80 transition-all duration-300 flex items-center gap-2 group"
              >
                {t("joinUs")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link to="/watch">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-purple-800/50 backdrop-blur-xl border-2 border-amber-400/30 text-amber-400 font-bold rounded-full hover:bg-purple-700/50 hover:border-amber-400/60 transition-all duration-300 flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                {t("watchLive")}
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-amber-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Horizontal Flowing Events Strip */}
      <section className="relative bg-gradient-to-r from-purple-950 via-amber-900 to-purple-950 py-8 overflow-hidden border-y border-amber-400/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #fbbf24 0, #fbbf24 1px, transparent 0, transparent 50%)`,
              backgroundSize: "10px 10px",
            }}
          />
        </div>

        <div className="relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <motion.div
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <IoCalendarOutline className="w-6 h-6 text-amber-400" />
              </motion.div>
              <div>
                <h3 className="text-white font-black text-xl sm:text-2xl">
                  Upcoming <span className="text-amber-400">Gatherings</span>
                </h3>
                <p className="text-purple-300 text-xs sm:text-sm">
                  Don't miss these powerful events
                </p>
              </div>
            </div>
            <Link to="/events">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-purple-950 font-bold rounded-full text-xs sm:text-sm shadow-xl hover:shadow-amber-500/50 transition-all flex items-center gap-2"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Flowing Events Container */}
          <div className="relative">
            <motion.div
              animate={{
                x: [0, -2000],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-4 will-change-transform"
            >
              {/* Duplicate events array for seamless loop */}
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-4">
                  {/* Event Cards */}
                  {[
                    {
                      title: "Youth Conference 2025",
                      date: "Dec 15, 2025",
                      category: "Conference",
                      image:
                        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
                      color: "from-purple-600 to-purple-800",
                    },
                    {
                      title: "Worship Night",
                      date: "Dec 08, 2025",
                      category: "Worship",
                      image:
                        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=300&fit=crop",
                      color: "from-blue-600 to-blue-800",
                    },
                    {
                      title: "Leadership Workshop",
                      date: "Dec 20, 2025",
                      category: "Training",
                      image:
                        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop",
                      color: "from-amber-600 to-amber-800",
                    },
                    {
                      title: "Community Outreach",
                      date: "Dec 10, 2025",
                      category: "Outreach",
                      image:
                        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
                      color: "from-pink-600 to-pink-800",
                    },
                    {
                      title: "New Year Service",
                      date: "Dec 31, 2025",
                      category: "Special",
                      image:
                        "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=400&h=300&fit=crop",
                      color: "from-green-600 to-green-800",
                    },
                  ].map((event, index) => (
                    <Link to="/events" key={index}>
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          y: -8,
                          boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)",
                        }}
                        className="relative w-72 h-40 rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0 border border-amber-400/30 shadow-2xl"
                      >
                        {/* Background Image */}
                        <img
                          src={event.image}
                          alt={event.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Gradient Overlay */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-80 group-hover:opacity-90 transition-opacity`}
                        />

                        {/* Content */}
                        <div className="absolute inset-0 p-4 flex flex-col justify-between">
                          {/* Category Badge */}
                          <div className="flex items-center justify-between">
                            <span className="px-3 py-1 bg-amber-500 rounded-full text-purple-950 text-xs font-bold uppercase">
                              {event.category}
                            </span>
                            <motion.div
                              whileHover={{ rotate: 45 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ArrowRight className="w-5 h-5 text-amber-400" />
                            </motion.div>
                          </div>

                          {/* Event Info */}
                          <div>
                            <h4 className="text-white font-black text-lg mb-1 line-clamp-1">
                              {event.title}
                            </h4>
                            <div className="flex items-center gap-2 text-amber-300">
                              <IoCalendarOutline className="w-4 h-4" />
                              <span className="text-sm font-medium">
                                {event.date}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Hover Shine Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </motion.div>
                    </Link>
                  ))}
                </div>
              ))}
            </motion.div>

            {/* Gradient Fades on Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-purple-950 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-purple-950 to-transparent pointer-events-none z-10" />
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 text-center"
          >
            <Link to="/events">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-800/50 backdrop-blur-xl border-2 border-amber-400/30 text-amber-400 font-bold rounded-full hover:bg-purple-700/50 hover:border-amber-400/60 transition-all text-sm"
              >
                <Sparkles className="w-4 h-4" />
                Explore All Gatherings
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Section - Programs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Weekly <span className="text-amber-400">Programs</span>
            </motion.h2>
            <motion.p
              className="text-purple-300 text-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Join us throughout the week
            </motion.p>
          </div>

          {/* Bento Grid with Custom Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
            {programs.map((program, index) => {
              // Custom spanning logic for bento layout
              let spanClass = "";
              if (index === 0) {
                // Row 1: Two boxes side by side (mobile: full width, desktop: 1 col each)
                spanClass = "lg:col-span-1";
              } else if (index === 1) {
                spanClass = "sm:col-span-2 lg:col-span-2";
              } else if (index === 2) {
                // Row 2: Larger box (mobile: full width, desktop: 2 cols)
                spanClass = "sm:col-span-2 lg:col-span-2";
              } else if (index === 3) {
                // Row 2: Smaller box (mobile: full width, desktop: 1 col)
                spanClass = "sm:col-span-2 lg:col-span-1";
              } else if (index === 4 || index === 5) {
                // Row 3 & 4: Full width boxes
                spanClass = "sm:col-span-2 lg:col-span-3";
              }

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className={`relative overflow-hidden rounded-3xl shadow-2xl group cursor-pointer ${spanClass} min-h-[200px]`}
                >
                  {/* Background Image - LEFT SIDE */}
                  <div className="absolute inset-0">
                    <motion.img
                      src={program.image}
                      alt={program.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>

                  {/* Smooth Gradient Fade from LEFT to RIGHT - Solid Color */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to right, 
                        ${
                          program.color.includes("purple-600") &&
                          program.color.includes("purple-800")
                            ? "rgba(107, 33, 168, 0.5) 0%, rgba(107, 33, 168, 0.6) 25%, rgba(107, 33, 168, 0.8) 45%, rgb(107, 33, 168) 65%, rgb(88, 28, 135) 100%"
                            : program.color.includes("blue-600") &&
                              program.color.includes("blue-800")
                            ? "rgba(29, 78, 216, 0.5) 0%, rgba(29, 78, 216, 0.6) 25%, rgba(29, 78, 216, 0.8) 45%, rgb(29, 78, 216) 65%, rgb(30, 64, 175) 100%"
                            : program.color.includes("blue-600") &&
                              program.color.includes("cyan-600")
                            ? "rgba(29, 78, 216, 0.5) 0%, rgba(29, 78, 216, 0.6) 25%, rgba(29, 78, 216, 0.8) 45%, rgb(29, 78, 216) 65%, rgb(8, 145, 178) 100%"
                            : program.color.includes("pink-600") &&
                              program.color.includes("pink-800")
                            ? "rgba(219, 39, 119, 0.5) 0%, rgba(219, 39, 119, 0.6) 25%, rgba(219, 39, 119, 0.8) 45%, rgb(219, 39, 119) 65%, rgb(157, 23, 77) 100%"
                            : program.color.includes("amber-600") &&
                              program.color.includes("amber-800")
                            ? "rgba(217, 119, 6, 0.5) 0%, rgba(217, 119, 6, 0.6) 25%, rgba(217, 119, 6, 0.8) 45%, rgb(217, 119, 6) 65%, rgb(146, 64, 14) 100%"
                            : "rgba(107, 33, 168, 0.5) 0%, rgba(107, 33, 168, 0.6) 25%, rgba(107, 33, 168, 0.8) 45%, rgb(107, 33, 168) 65%, rgb(88, 28, 135) 100%"
                        }
                      )`,
                    }}
                  />

                  {/* Content - RIGHT SIDE */}
                  <div className="absolute inset-0 flex items-center justify-end pr-16 pl-4">
                    <div className="text-right">
                      <div className="text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
                        {program.day}
                      </div>
                      <div className="text-white text-4xl sm:text-5xl md:text-6xl font-black mb-2">
                        {program.time}
                      </div>
                      <div className="text-white text-base sm:text-lg font-medium">
                        {program.name}
                      </div>
                    </div>
                  </div>

                  {/* Vertical Time Label on RIGHT EDGE */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <div
                      className="text-amber-300 font-bold text-xs tracking-widest"
                      style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                      }}
                    >
                      {program.time}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

                  {/* Decorative Corner Element - Bottom Right */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-amber-400/20 rounded-lg rotate-12 group-hover:rotate-45 transition-transform duration-300" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Latest News - Static Grid with Full Image Background */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950 to-purple-900" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
              Latest <span className="text-amber-400">News</span>
            </h2>
            <p className="text-purple-300 text-lg">
              Stay updated with our community
            </p>
          </motion.div>

          {/* Static Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                }}
                className="relative h-96 rounded-3xl overflow-hidden group cursor-pointer shadow-2xl"
              >
                {/* Full Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/95 via-purple-950/60 to-purple-950/20" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Top Section - Badge */}
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-amber-500/90 backdrop-blur-sm rounded-full text-purple-950 text-xs font-bold uppercase">
                      Latest
                    </span>
                    <div className="flex items-center gap-2 px-3 py-1 bg-purple-950/80 backdrop-blur-sm rounded-full">
                      <Heart className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-400 text-sm font-bold">{item.likes}</span>
                    </div>
                  </div>
                  
                  {/* Bottom Section - Content */}
                  <div>
                    <h3 className="text-white font-black text-xl sm:text-2xl mb-3 leading-tight line-clamp-2 group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-purple-200 text-sm mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>
                    
                    {/* Read More Button */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full text-amber-400 text-sm font-bold group-hover:bg-amber-500/30 transition-all"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>

                {/* Hover Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kinetic Typography Section - Call to Action */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700">
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
              backgroundImage: `radial-gradient(circle, purple 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {["Join", "The", "Movement"].map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="inline-block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-purple-950 mr-4 sm:mr-6"
                style={{
                  textShadow: "4px 4px 0px rgba(139, 92, 246, 0.3)",
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-purple-950 text-xl sm:text-2xl font-bold mt-8 mb-12"
          >
            Experience God's transformative power in your life
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/connect">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-purple-950 text-amber-400 font-black text-lg rounded-full shadow-2xl hover:shadow-purple-950/80 transition-all duration-300 flex items-center gap-3 group"
              >
                <LiaPeopleCarrySolid className="w-6 h-6" />
                Connect With Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link to="/sow">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/20 backdrop-blur-xl border-2 border-purple-950/30 text-purple-950 font-black text-lg rounded-full hover:bg-white/30 transition-all duration-300 flex items-center gap-3"
              >
                <GiTakeMyMoney className="w-6 h-6" />
                Sow A Seed
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
