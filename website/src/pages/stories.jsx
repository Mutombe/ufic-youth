import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '../LunguageContext';
import { MdStarPurple500 } from "react-icons/md";
import { TiHeartOutline } from "react-icons/ti";
const Stories = () => {
  const { t } = useLanguage();
  const [selectedStory, setSelectedStory] = useState(null);

  const testimonies = [
    {
      id: 1,
      name: 'Priscillah Amanda Chirenda',
      title: 'Overcoming Barrenness Through Faith',
      excerpt: 'After years of waiting, God blessed us with the miracle we had been praying for...',
      story: 'After years of struggling with barrenness, my husband and I had almost lost hope. Through the teachings at UFIC Youth and the prayers of the community, we held onto faith. Today, we are blessed with two beautiful children. God is faithful!',
      image: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?w=600',
      category: 'Healing',
      likes: 234,
    },
    {
      id: 2,
      name: 'Tendai M.',
      title: 'From Addiction to Freedom',
      excerpt: 'The power of God broke every chain that held me captive...',
      story: 'I was bound by addiction for over 10 years. The youth ministry reached out to me when I was at my lowest. Through consistent prayer, mentorship, and God\'s transforming power, I am now completely free and serving in ministry.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
      category: 'Deliverance',
      likes: 189,
    },
    {
      id: 3,
      name: 'Rutendo K.',
      title: 'Finding Purpose in Youth Ministry',
      excerpt: 'I discovered my calling and purpose through this community...',
      story: 'As a young person, I felt lost and without direction. UFIC Youth helped me discover my spiritual gifts and calling. Now I lead a life group and mentor other young people finding their way.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600',
      category: 'Purpose',
      likes: 156,
    },
    {
      id: 4,
      name: 'Blessing N.',
      title: 'Financial Breakthrough',
      excerpt: 'God opened doors I never thought possible...',
      story: 'Unemployment had me feeling hopeless. After joining the morning devotions and faithfully sowing into the Kingdom, God opened incredible doors. I now run my own successful business and employ others.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600',
      category: 'Breakthrough',
      likes: 267,
    },
    {
      id: 5,
      name: 'Takudzwa P.',
      title: 'Saved from Depression',
      excerpt: 'Light broke through my darkest moments...',
      story: 'I battled severe depression and contemplated ending it all. The youth community showed me unconditional love and support. Through prayer and fellowship, God restored my joy and gave me a reason to live.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600',
      category: 'Healing',
      likes: 198,
    },
    {
      id: 6,
      name: 'Chipo S.',
      title: 'Academic Excellence',
      excerpt: 'God gave me wisdom beyond my years...',
      story: 'Struggling academically and facing failure, I joined the prayer groups. God gave me supernatural wisdom and understanding. I graduated with honors and now mentor students.',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600',
      category: 'Breakthrough',
      likes: 145,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1920&h=1080&fit=crop"
            alt="Testimonies"
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
              <MdStarPurple500 className="w-20 h-20 text-amber-400" />
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6">
              Lives
              <span className="block text-amber-400 mt-2">Transformed</span>
            </h1>

            <p className="text-purple-200 text-xl sm:text-2xl mb-8 max-w-2xl mx-auto font-light">
              Real stories of God's transformative power in our community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonies.map((testimony, index) => (
            <motion.div
              key={testimony.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedStory(testimony)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/50 to-purple-950/50 backdrop-blur-xl border border-purple-700/30 shadow-2xl">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={testimony.image}
                    alt={testimony.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/50 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-4 py-2 bg-amber-500 rounded-full">
                    <span className="text-purple-950 text-xs font-bold uppercase tracking-wider">
                      {testimony.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors">
                    {testimony.title}
                  </h3>
                  <p className="text-purple-300 text-sm mb-4 line-clamp-2">
                    {testimony.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                        <span className="text-purple-950 font-bold text-sm">
                          {testimony.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">
                          {testimony.name}
                        </div>
                        <div className="flex items-center gap-1 text-pink-400 text-xs">
                          <TiHeartOutline className="w-3 h-3" />
                          <span>{testimony.likes}</span>
                        </div>
                      </div>
                    </div>
                    
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-amber-400"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStory(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-gradient-to-br from-purple-900 to-purple-950 rounded-3xl shadow-2xl overflow-hidden border border-purple-700/30"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-purple-800/50 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-purple-700/50 transition-all"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Image */}
              <div className="relative h-64 sm:h-96 overflow-hidden">
                <img
                  src={selectedStory.image}
                  alt={selectedStory.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 sm:p-12">
                <div className="inline-block px-4 py-2 bg-amber-500 rounded-full mb-4">
                  <span className="text-purple-950 text-xs font-bold uppercase tracking-wider">
                    {selectedStory.category}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                  {selectedStory.title}
                </h2>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-purple-950 font-bold text-xl">
                      {selectedStory.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-white text-lg font-bold">
                      {selectedStory.name}
                    </div>
                    <div className="flex items-center gap-2 text-pink-400">
                      <TiHeartOutline className="w-4 h-4" />
                      <span className="text-sm font-medium">{selectedStory.likes} people inspired</span>
                    </div>
                  </div>
                </div>

                <p className="text-purple-200 text-lg leading-relaxed mb-8">
                  {selectedStory.story}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedStory(null)}
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-purple-950 font-bold rounded-full shadow-xl hover:shadow-amber-500/50 transition-all"
                >
                  Close Story
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Share Your Story CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-amber-600 via-amber-500 to-amber-600">
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
            <TiHeartOutline className="w-20 h-20 text-purple-950 mx-auto mb-6" />
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-purple-950 mb-6">
              Have A Testimony?
            </h2>

            <p className="text-purple-950/80 text-xl mb-12 max-w-2xl mx-auto">
              Share how God has transformed your life and inspire others in their faith journey
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-purple-950 text-amber-400 font-black text-lg rounded-full shadow-2xl hover:shadow-purple-950/80 transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <MdStarPurple500 className="w-6 h-6" />
              Share Your Story
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Stories;