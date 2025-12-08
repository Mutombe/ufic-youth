import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Image as ImageIcon, X, ZoomIn, Download, 
  Heart, Share2, Calendar, MapPin, Filter,
  ChevronLeft, ChevronRight, Music, Mic, Star,
  Users, Camera, Award, TrendingUp, Sparkles
} from 'lucide-react';
import { useLanguage } from '../LunguageContext';
import { RiGalleryView2 } from "react-icons/ri";
import { TiHeartOutline } from "react-icons/ti";
import LazyImage from '../utils/imageLoader.jsx';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'All Memories', icon: Camera },
    { id: 'worship', name: 'Worship', icon: Music },
    { id: 'conferences', name: 'Conferences', icon: Mic },
    { id: 'youth', name: 'Youth Events', icon: Star },
    { id: 'outreach', name: 'Outreach', icon: Heart },
    { id: 'fellowship', name: 'Fellowship', icon: Users },
  ];

  const gallery = [
    {
      id: 1,
      title: 'International Youth Conference 2024',
      category: 'conferences',
      date: '2024-11-15',
      location: 'UFIC Main Auditorium',
      image: '/1.jpg',
      likes: 234,
      description: 'Powerful moments from our annual youth conference',
      theme: 'from-blue-600/80 via-blue-500/70 to-cyan-600/80',
    },
    {
      id: 2,
      title: 'Worship Night Glory',
      category: 'worship',
      date: '2024-11-08',
      location: 'UFIC Worship Center',
      image: '/2.jpg',
      likes: 189,
      description: 'Heaven touching earth through worship',
      theme: 'from-purple-600/80 via-pink-500/70 to-purple-700/80',
    },
    {
      id: 3,
      title: 'Community Outreach',
      category: 'outreach',
      date: '2024-10-25',
      location: 'Mbare Community',
      image: '/3.jpg',
      likes: 156,
      description: 'Serving our community with love',
      theme: 'from-rose-600/80 via-red-500/70 to-rose-700/80',
    },
    {
      id: 4,
      title: 'Youth Fellowship Night',
      category: 'fellowship',
      date: '2024-11-20',
      location: 'UFIC Youth Center',
      image: '/4.jpg',
      likes: 198,
      description: 'Building lasting friendships in Christ',
      theme: 'from-teal-600/80 via-emerald-500/70 to-teal-700/80',
    },
    {
      id: 5,
      title: 'Praise and Worship Session',
      category: 'worship',
      date: '2024-11-01',
      location: 'UFIC Main Church',
      image: '/5.jpg',
      likes: 267,
      description: 'Lifting high the name of Jesus',
      theme: 'from-indigo-600/80 via-violet-500/70 to-indigo-700/80',
    },
    {
      id: 6,
      title: 'Youth Encounter Weekend',
      category: 'youth',
      date: '2024-10-18',
      location: 'UFIC Retreat Center',
      image: '/6.jpg',
      likes: 223,
      description: 'Life-changing encounters with God',
      theme: 'from-orange-600/80 via-amber-500/70 to-orange-700/80',
    },
    {
      id: 7,
      title: 'Leadership Conference',
      category: 'conferences',
      date: '2024-10-10',
      location: 'UFIC Conference Hall',
      image: '/7.avif',
      likes: 145,
      description: 'Equipping the next generation',
      theme: 'from-sky-600/80 via-blue-500/70 to-sky-700/80',
    },
    {
      id: 8,
      title: 'Street Evangelism',
      category: 'outreach',
      date: '2024-09-28',
      location: 'Harare CBD',
      image: '/8.avif',
      likes: 178,
      description: 'Taking the Gospel to the streets',
      theme: 'from-fuchsia-600/80 via-pink-500/70 to-fuchsia-700/80',
    },
    {
      id: 9,
      title: 'Worship Team Rehearsal',
      category: 'worship',
      date: '2024-11-22',
      location: 'UFIC Worship Center',
      image: '/9.avif',
      likes: 156,
      description: 'Preparing for excellence in worship',
      theme: 'from-green-600/80 via-lime-500/70 to-green-700/80',
    },
    {
      id: 10,
      title: 'Youth Prayer Mountain',
      category: 'youth',
      date: '2024-10-05',
      location: 'UFIC Prayer Mountain',
      image: '/10.jpg',
      likes: 289,
      description: 'Seeking God together',
      theme: 'from-red-600/80 via-orange-500/70 to-red-700/80',
    },
    {
      id: 11,
      title: 'Family Fun Day',
      category: 'fellowship',
      date: '2024-09-15',
      location: 'UFIC Grounds',
      image: '/11.jpg',
      likes: 234,
      description: 'Fellowship and fun for all ages',
      theme: 'from-cyan-600/80 via-teal-500/70 to-cyan-700/80',
    },
    {
      id: 12,
      title: 'Thanksgiving Service',
      category: 'worship',
      date: '2024-11-24',
      location: 'UFIC Main Auditorium',
      image: '/12.jpg',
      likes: 312,
      description: 'Grateful hearts giving thanks',
      theme: 'from-amber-600/80 via-yellow-500/70 to-amber-700/80',
    },
  ];

  const filteredGallery = selectedCategory === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === selectedCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredGallery.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredGallery[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredGallery.length) % filteredGallery.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredGallery[prevIndex]);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden -mt-20">
        {/* Background Image */}
        <div className="absolute inset-0 -top-20">
          <LazyImage src="/23.png" alt="Gallery" className="w-full h-full object-cover" />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/90 via-pink-900/85 to-purple-900/90" />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <RiGalleryView2 className="w-20 h-20 text-amber-400" />
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6">
              Our
              <span className="block text-amber-400 mt-2">Memories</span>
            </h1>

            <p className="text-purple-200 text-xl sm:text-2xl mb-8 max-w-2xl mx-auto font-light">
              Capturing moments of faith, fellowship, and transformation
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500/20 backdrop-blur-md rounded-full border border-pink-400/30"
            >
              <Heart className="w-5 h-5 text-pink-400" />
              <span className="text-pink-400 font-medium">{gallery.length} Beautiful Memories</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-purple-300">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filter:</span>
          </div>
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-purple-950 shadow-xl shadow-amber-500/50'
                    : 'bg-purple-800/30 backdrop-blur-md text-purple-200 hover:bg-purple-800/50 border border-purple-700/30'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {category.name}
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredGallery.map((item, index) => {
            const CategoryIcon = categories.find(c => c.id === item.category)?.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => openLightbox(item, index)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  {/* Full Background Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-cover"
                    />
                    
                    {/* Colored Gradient Overlay - Always Visible */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.theme} backdrop-blur-[2px]`} />
                    
                    {/* Glassmorphic Content Container */}
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      {/* Category Badge - Top */}
                      <div className="absolute top-4 left-4">
                        <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg">
                          <div className="flex items-center gap-2">
                            {CategoryIcon && <CategoryIcon className="w-4 h-4 text-white" />}
                            <span className="text-white text-xs font-bold uppercase tracking-wide">
                              {categories.find(c => c.id === item.category)?.name}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Zoom Icon - Appears on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-2xl"
                        >
                          <ZoomIn className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>

                      {/* Content - Bottom with Glassmorphism */}
                      <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20 shadow-2xl">
                        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-white transition-colors drop-shadow-lg">
                          {item.title}
                        </h3>
                        <p className="text-white/90 text-sm mb-3 drop-shadow-md">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-1.5 text-white/90">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{formatDate(item.date)}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-white/90">
                            <Heart className="w-4 h-4 fill-white/50" />
                            <span className="font-medium">{item.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Action Buttons */}
            <div className="absolute bottom-4 right-4 z-10 flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <Download className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <Share2 className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-pink-400 hover:bg-white/20 transition-all"
              >
                <Heart className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full"
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              />

              {/* Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent rounded-b-2xl">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  {selectedImage.description}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(selectedImage.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedImage.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-pink-400">
                    <Heart className="w-4 h-4" />
                    <span>{selectedImage.likes} Likes</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-4 left-4 z-10 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-white text-sm font-medium">
                {currentIndex + 1} / {filteredGallery.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Stats Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/80 via-purple-900/60 to-purple-950/80" />

        {/* Animated Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-16 h-16 text-amber-400" />
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Our Impact in
              <span className="text-amber-400"> Numbers</span>
            </h2>
            <p className="text-purple-300 text-lg max-w-2xl mx-auto">
              Every photo tells a story of faith, hope, and transformation
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                number: '1000+', 
                label: 'Photos Captured', 
                icon: Camera,
                color: 'from-blue-500 to-cyan-500',
                bgColor: 'from-blue-500/10 to-cyan-500/10'
              },
              { 
                number: '50+', 
                label: 'Events Documented', 
                icon: Calendar,
                color: 'from-purple-500 to-pink-500',
                bgColor: 'from-purple-500/10 to-pink-500/10'
              },
              { 
                number: '5000+', 
                label: 'Lives Touched', 
                icon: Heart,
                color: 'from-rose-500 to-red-500',
                bgColor: 'from-rose-500/10 to-red-500/10'
              },
              { 
                number: '10+', 
                label: 'Years of Memories', 
                icon: Award,
                color: 'from-amber-500 to-orange-500',
                bgColor: 'from-amber-500/10 to-orange-500/10'
              },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative group"
                >
                  {/* Card */}
                  <div className="relative h-full p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Content */}
                    <div className="relative z-10 text-center">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className={`inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br ${stat.color} rounded-2xl shadow-lg`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Number */}
                      <motion.div
                        initial={{ scale: 1 }}
                        whileInView={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.5 }}
                        className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}
                      >
                        {stat.number}
                      </motion.div>

                      {/* Label */}
                      <div className="text-purple-300 font-semibold text-lg">
                        {stat.label}
                      </div>

                      {/* Trend Indicator */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center gap-1 mt-3 text-emerald-400 text-sm"
                      >
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-medium">Growing</span>
                      </motion.div>
                    </div>

                    {/* Decorative Corner Elements */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-10 rounded-bl-full`} />
                    <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${stat.color} opacity-10 rounded-tr-full`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 border-2 border-purple-950" />
                ))}
              </div>
              <span className="text-purple-300 font-medium">
                Join thousands capturing faith moments
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle, purple 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ImageIcon className="w-20 h-20 text-purple-950 mx-auto mb-6" />
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-purple-950 mb-6">
              Be Part of Our Story
            </h2>

            <p className="text-purple-950/80 text-xl mb-12 max-w-2xl mx-auto">
              Join us at our next event and create lasting memories together
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-purple-950 text-amber-400 font-black text-lg rounded-full shadow-2xl hover:shadow-purple-950/80 transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <Calendar className="w-6 h-6" />
              View Upcoming Events
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;