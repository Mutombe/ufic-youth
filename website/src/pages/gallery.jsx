import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Image as ImageIcon, X, ZoomIn, Download, 
  Heart, Share2, Calendar, MapPin, Filter,
  ChevronLeft, ChevronRight, Maximize2
} from 'lucide-react';
import { useLanguage } from '../LunguageContext';
import { RiGalleryView2 } from "react-icons/ri";
import { TiHeartOutline } from "react-icons/ti";

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    { id: 'all', name: 'All Memories', icon: '📸' },
    { id: 'worship', name: 'Worship', icon: '🎵' },
    { id: 'conferences', name: 'Conferences', icon: '🎤' },
    { id: 'youth', name: 'Youth Events', icon: '🌟' },
    { id: 'outreach', name: 'Outreach', icon: '❤️' },
    { id: 'fellowship', name: 'Fellowship', icon: '🤝' },
  ];

  const gallery = [
    {
      id: 1,
      title: 'International Youth Conference 2024',
      category: 'conferences',
      date: '2024-11-15',
      location: 'UFIC Main Auditorium',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      likes: 234,
      description: 'Powerful moments from our annual youth conference',
    },
    {
      id: 2,
      title: 'Worship Night Glory',
      category: 'worship',
      date: '2024-11-08',
      location: 'UFIC Worship Center',
      image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800',
      likes: 189,
      description: 'Heaven touching earth through worship',
    },
    {
      id: 3,
      title: 'Community Outreach',
      category: 'outreach',
      date: '2024-10-25',
      location: 'Mbare Community',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800',
      likes: 156,
      description: 'Serving our community with love',
    },
    {
      id: 4,
      title: 'Youth Fellowship Night',
      category: 'fellowship',
      date: '2024-11-20',
      location: 'UFIC Youth Center',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800',
      likes: 198,
      description: 'Building lasting friendships in Christ',
    },
    {
      id: 5,
      title: 'Praise and Worship Session',
      category: 'worship',
      date: '2024-11-01',
      location: 'UFIC Main Church',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800',
      likes: 267,
      description: 'Lifting high the name of Jesus',
    },
    {
      id: 6,
      title: 'Youth Encounter Weekend',
      category: 'youth',
      date: '2024-10-18',
      location: 'UFIC Retreat Center',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800',
      likes: 223,
      description: 'Life-changing encounters with God',
    },
    {
      id: 7,
      title: 'Leadership Conference',
      category: 'conferences',
      date: '2024-10-10',
      location: 'UFIC Conference Hall',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800',
      likes: 145,
      description: 'Equipping the next generation',
    },
    {
      id: 8,
      title: 'Street Evangelism',
      category: 'outreach',
      date: '2024-09-28',
      location: 'Harare CBD',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      likes: 178,
      description: 'Taking the Gospel to the streets',
    },
    {
      id: 9,
      title: 'Worship Team Rehearsal',
      category: 'worship',
      date: '2024-11-22',
      location: 'UFIC Worship Center',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
      likes: 156,
      description: 'Preparing for excellence in worship',
    },
    {
      id: 10,
      title: 'Youth Prayer Mountain',
      category: 'youth',
      date: '2024-10-05',
      location: 'UFIC Prayer Mountain',
      image: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?w=800',
      likes: 289,
      description: 'Seeking God together',
    },
    {
      id: 11,
      title: 'Family Fun Day',
      category: 'fellowship',
      date: '2024-09-15',
      location: 'UFIC Grounds',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800',
      likes: 234,
      description: 'Fellowship and fun for all ages',
    },
    {
      id: 12,
      title: 'Thanksgiving Service',
      category: 'worship',
      date: '2024-11-24',
      location: 'UFIC Main Auditorium',
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8a592?w=800',
      likes: 312,
      description: 'Grateful hearts giving thanks',
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
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&h=1080&fit=crop"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500/20 rounded-full border border-pink-400/30"
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
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-purple-950 shadow-xl shadow-amber-500/50'
                  : 'bg-purple-800/50 text-purple-200 hover:bg-purple-800/70 border border-purple-700/30'
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredGallery.map((item, index) => (
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
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/50 to-purple-950/50 backdrop-blur-xl border border-purple-700/30 shadow-2xl">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center"
                    >
                      <ZoomIn className="w-8 h-8 text-purple-950" />
                    </motion.div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-purple-950/90 backdrop-blur-sm rounded-full">
                    <span className="text-amber-400 text-xs font-bold uppercase">
                      {categories.find(c => c.id === item.category)?.icon} {categories.find(c => c.id === item.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-purple-300 text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-purple-400">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(item.date)}</span>
                    </div>
                    <div className="flex items-center gap-1 text-pink-400">
                      <TiHeartOutline className="w-3 h-3" />
                      <span>{item.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
                <TiHeartOutline className="w-5 h-5" />
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
                    <TiHeartOutline className="w-4 h-4" />
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

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-purple-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '1000+', label: 'Photos Captured', icon: '📸' },
              { number: '50+', label: 'Events Documented', icon: '🎉' },
              { number: '5000+', label: 'Lives Touched', icon: '❤️' },
              { number: '10+', label: 'Years of Memories', icon: '⭐' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-purple-900/50 to-purple-950/50 backdrop-blur-xl rounded-2xl border border-purple-700/30"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-black text-amber-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-purple-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
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