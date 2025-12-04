import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Clock, Eye, Calendar, Filter } from "lucide-react";
import { useLanguage } from "../LunguageContext";

const Watch = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Services" },
    { id: "sunday", name: "Sunday Service" },
    { id: "ministry", name: "Personal Ministry" },
    { id: "special", name: "Special Events" },
  ];

  const videos = [
    {
      title: "International Sunday Service with Emmanuel Makandiwa",
      date: "11/08/24",
      duration: "1:56:16",
      views: "15.2K",
      thumbnail:
        "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600",
      category: "sunday",
    },
    {
      title: "Your Personal Ministry 5 | Submission",
      date: "04/08/24",
      duration: "2:46:53",
      views: "12.8K",
      thumbnail:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
      category: "ministry",
    },
    {
      title: "Your Personal Ministry 4 | Your Personal Constitution",
      date: "21/07/24",
      duration: "3:25:47",
      views: "10.5K",
      thumbnail:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600",
      category: "ministry",
    },
    {
      title: "The Strange Glory of God",
      date: "09/06/24",
      duration: "1:33:32",
      views: "18.3K",
      thumbnail:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
      category: "special",
    },
    {
      title: "Talitha Cumi",
      date: "02/06/24",
      duration: "1:47:54",
      views: "14.1K",
      thumbnail:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600",
      category: "special",
    },
    {
      title: "Your Personal Ministry 3 | Q&A",
      date: "14/07/24",
      duration: "3:09:37",
      views: "9.2K",
      thumbnail:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
      category: "ministry",
    },
  ];

  const filteredVideos =
    selectedCategory === "all"
      ? videos
      : videos.filter((v) => v.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1920&h=1080&fit=crop"
            alt="Worship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/90 via-blue-900/85 to-purple-900/90" />

        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mb-6 shadow-2xl shadow-amber-500/50"
            >
              <Play className="w-12 h-12 text-purple-950" />
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6">
              Watch
              <span className="block text-amber-400 mt-2">Services</span>
            </h1>

            <p className="text-purple-200 text-xl sm:text-2xl mb-8 max-w-2xl mx-auto font-light">
              Experience powerful messages and life-changing sermons
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-purple-300">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filter:</span>
          </div>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-purple-950 shadow-xl shadow-amber-500/50"
                  : "bg-purple-800/50 text-purple-200 hover:bg-purple-800/70 border border-purple-700/30"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/50 to-purple-950/50 backdrop-blur-xl border border-purple-700/30 shadow-2xl">
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/50 to-transparent" />

                  {/* Play Button Overlay */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center shadow-2xl">
                      <Play className="w-8 h-8 text-purple-950 ml-1" />
                    </div>
                  </motion.div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 bg-purple-950/90 backdrop-blur-sm rounded-lg flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span className="text-white text-xs font-bold">
                      {video.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-3 group-hover:text-amber-400 transition-colors line-clamp-2">
                    {video.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-purple-300">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{video.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{video.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Live Stream CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-600 via-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(251, 191, 36, 0.7)",
                  "0 0 0 20px rgba(251, 191, 36, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center justify-center w-20 h-20 bg-purple-950 rounded-full mb-6"
            >
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-black text-purple-950 mb-4">
              Join Us Live Every Sunday
            </h2>
            <p className="text-purple-950/80 text-xl mb-8">
              Experience the service in real-time at 9:00 AM
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-purple-950 text-amber-400 font-black text-lg rounded-full shadow-2xl hover:shadow-purple-950/80 transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <Play className="w-6 h-6" />
              Watch Live Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Watch;
