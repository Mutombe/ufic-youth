import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Clock, MapPin, Users, Heart, 
  ArrowRight, Filter, Star, Download, Share2,
  CheckCircle, Bell, ExternalLink
} from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '../LunguageContext';
import { MdStarPurple500 } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { CgSandClock } from "react-icons/cg";
import { TiHeartOutline } from "react-icons/ti";
const Events = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const categories = [
    { id: 'all', name: 'All Events', icon: '🎯' },
    { id: 'worship', name: 'Worship', icon: '🎵' },
    { id: 'conference', name: 'Conferences', icon: '🎤' },
    { id: 'youth', name: 'Youth Events', icon: '🌟' },
    { id: 'outreach', name: 'Outreach', icon: '❤️' },
    { id: 'training', name: 'Training', icon: '📚' },
  ];

  const events = [
    {
      id: 1,
      title: 'International Youth Conference 2024',
      category: 'conference',
      date: '2024-12-15',
      time: '09:00 AM',
      endTime: '06:00 PM',
      location: 'UFIC Main Auditorium',
      address: 'Harare, Zimbabwe',
      description: 'A transformative gathering of young believers from across nations. Experience powerful worship, prophetic teaching, and life-changing encounters with God.',
      speaker: 'Emmanuel Makandiwa',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      attendees: 2500,
      status: 'featured',
      spots: 500,
      price: 'Free',
    },
    {
      id: 2,
      title: 'Worship Night: Heaven Touching Earth',
      category: 'worship',
      date: '2024-12-08',
      time: '07:00 PM',
      endTime: '10:00 PM',
      location: 'UFIC Worship Center',
      address: 'Harare, Zimbabwe',
      description: 'An evening of uninterrupted worship and prayer. Join us as we create an atmosphere where heaven meets earth.',
      speaker: 'UFIC Worship Team',
      image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800',
      attendees: 800,
      status: 'upcoming',
      spots: 200,
      price: 'Free',
    },
    {
      id: 3,
      title: 'Leadership Development Workshop',
      category: 'training',
      date: '2024-12-20',
      time: '02:00 PM',
      endTime: '05:00 PM',
      location: 'UFIC Conference Room',
      address: 'Harare, Zimbabwe',
      description: 'Equipping the next generation of Kingdom leaders. Learn practical skills in ministry leadership, team building, and spiritual growth.',
      speaker: 'Pastor John Mukwevho',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800',
      attendees: 150,
      status: 'upcoming',
      spots: 50,
      price: 'Free',
    },
    {
      id: 4,
      title: 'Community Outreach: Feeding Program',
      category: 'outreach',
      date: '2024-12-10',
      time: '10:00 AM',
      endTime: '02:00 PM',
      location: 'Mbare Community Center',
      address: 'Mbare, Harare',
      description: 'Join us as we serve our community with love. We\'ll be providing meals and sharing the Gospel with those in need.',
      speaker: 'UFIC Outreach Team',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800',
      attendees: 300,
      status: 'upcoming',
      spots: 100,
      price: 'Free',
    },
    {
      id: 5,
      title: 'Youth Encounter: Breakthrough Weekend',
      category: 'youth',
      date: '2024-12-27',
      time: '06:00 PM',
      endTime: '09:00 PM',
      location: 'UFIC Youth Center',
      address: 'Harare, Zimbabwe',
      description: 'A powerful weekend experience designed for young people seeking breakthrough in every area of life. Dynamic worship, prophetic ministry, and life applications.',
      speaker: 'Apostle Tyson Elijah',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800',
      attendees: 600,
      status: 'upcoming',
      spots: 150,
      price: '$10',
    },
    {
      id: 6,
      title: 'New Year\'s Eve Celebration Service',
      category: 'worship',
      date: '2024-12-31',
      time: '09:00 PM',
      endTime: '01:00 AM',
      location: 'UFIC Main Auditorium',
      address: 'Harare, Zimbabwe',
      description: 'Cross over into the new year with praise, worship, and powerful declarations. A night of thanksgiving and prophetic declarations for 2025.',
      speaker: 'Emmanuel Makandiwa',
      image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800',
      attendees: 3000,
      status: 'featured',
      spots: 1000,
      price: 'Free',
    },
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(e => e.category === selectedCategory);

  const featuredEvents = events.filter(e => e.status === 'featured');

  const handleRSVP = (event) => {
    toast.success(`You've successfully RSVP'd for ${event.title}!`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric',
      year: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop"
            alt="Events"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/90 via-purple-900/85 to-blue-900/90" />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="inline-block mb-6"
            >
              <IoCalendarOutline className="w-20 h-20 text-amber-400" />
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6">
              Upcoming
              <span className="block text-amber-400 mt-2">Gatherings</span>
            </h1>

            <p className="text-purple-200 text-xl sm:text-2xl mb-8 max-w-2xl mx-auto font-light">
              Join us for powerful gatherings that will transform your life
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500/20 rounded-full border border-amber-400/30"
            >
              <MdStarPurple500 className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-medium">{events.length} Gatherings This Month</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Events Carousel */}
      {featuredEvents.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-purple-950/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                Featured <span className="text-amber-400">Events</span>
              </h2>
              <p className="text-purple-300 text-lg">Don't miss these special gatherings</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/50 to-purple-950/50 backdrop-blur-xl border-2 border-amber-400/30 shadow-2xl shadow-amber-500/20">
                    {/* Badge */}
                    <div className="absolute top-4 right-4 z-10 px-4 py-2 bg-amber-500 rounded-full flex items-center gap-2">
                      <MdStarPurple500 className="w-4 h-4 text-purple-950" />
                      <span className="text-purple-950 text-sm font-bold uppercase">Featured</span>
                    </div>

                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/50 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-white text-2xl font-black mb-4 group-hover:text-amber-400 transition-colors">
                        {event.title}
                      </h3>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-purple-300">
                          <IoCalendarOutline className="w-5 h-5 text-amber-400" />
                          <span className="font-medium">{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-3 text-purple-300">
                          <CgSandClock className="w-5 h-5 text-amber-400" />
                          <span>{event.time} - {event.endTime}</span>
                        </div>
                        <div className="flex items-center gap-3 text-purple-300">
                          <MapPin className="w-5 h-5 text-amber-400" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-3 text-purple-300">
                          <LiaPeopleCarrySolid className="w-5 h-5 text-amber-400" />
                          <span>{event.attendees} Expected Attendees</span>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRSVP(event);
                        }}
                        className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-purple-950 font-bold rounded-xl shadow-xl hover:shadow-amber-500/50 transition-all flex items-center justify-center gap-2"
                      >
                        <CheckCircle className="w-5 h-5" />
                        RSVP Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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

      {/* Events Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/50 to-purple-950/50 backdrop-blur-xl border border-purple-700/30 shadow-2xl">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-purple-950/90 backdrop-blur-sm rounded-full">
                    <span className="text-amber-400 text-xs font-bold uppercase">
                      {categories.find(c => c.id === event.category)?.icon} {categories.find(c => c.id === event.category)?.name}
                    </span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-amber-500 rounded-full">
                    <span className="text-purple-950 text-xs font-bold">{event.price}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-3 group-hover:text-amber-400 transition-colors line-clamp-2">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-purple-300 text-sm">
                      <IoCalendarOutline className="w-4 h-4 text-amber-400" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-300 text-sm">
                      <CgSandClock className="w-4 h-4 text-amber-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-300 text-sm">
                      <MapPin className="w-4 h-4 text-amber-400" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-purple-700/30">
                    <div className="flex items-center gap-2 text-purple-300 text-sm">
                      <LiaPeopleCarrySolid className="w-4 h-4" />
                      <span>{event.attendees}</span>
                    </div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-amber-400 text-sm font-bold flex items-center gap-1"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/90 backdrop-blur-xl overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-gradient-to-br from-purple-900 to-purple-950 rounded-3xl shadow-2xl overflow-hidden border border-purple-700/30 my-8"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950 to-transparent" />
                
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-purple-950/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-purple-900 transition-all"
                >
                  ×
                </button>
              </div>

              {/* Content */}
              <div className="p-8 sm:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-2 bg-amber-500 rounded-full text-purple-950 text-sm font-bold uppercase">
                    {categories.find(c => c.id === selectedEvent.category)?.icon} {categories.find(c => c.id === selectedEvent.category)?.name}
                  </span>
                  <span className="px-4 py-2 bg-purple-800/50 rounded-full text-amber-400 text-sm font-bold">
                    {selectedEvent.price}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                  {selectedEvent.title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-purple-800/30 rounded-xl">
                    <IoCalendarOutline className="w-6 h-6 text-amber-400" />
                    <div>
                      <div className="text-purple-300 text-xs">Date</div>
                      <div className="text-white font-bold">{formatDate(selectedEvent.date)}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-purple-800/30 rounded-xl">
                    <CgSandClock className="w-6 h-6 text-amber-400" />
                    <div>
                      <div className="text-purple-300 text-xs">Time</div>
                      <div className="text-white font-bold">{selectedEvent.time} - {selectedEvent.endTime}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-purple-800/30 rounded-xl sm:col-span-2">
                    <MapPin className="w-6 h-6 text-amber-400" />
                    <div>
                      <div className="text-purple-300 text-xs">Location</div>
                      <div className="text-white font-bold">{selectedEvent.location}</div>
                      <div className="text-purple-400 text-sm">{selectedEvent.address}</div>
                    </div>
                  </div>
                </div>

                <p className="text-purple-200 text-lg leading-relaxed mb-6">
                  {selectedEvent.description}
                </p>

                <div className="flex items-center gap-4 mb-8 p-4 bg-purple-800/30 rounded-xl">
                  <div className="flex-1">
                    <div className="text-purple-300 text-sm mb-1">Speaker</div>
                    <div className="text-white font-bold text-lg">{selectedEvent.speaker}</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-purple-300 text-sm mb-1">Expected</div>
                    <div className="text-white font-bold text-lg">{selectedEvent.attendees} People</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-purple-300 text-sm mb-1">Spots Left</div>
                    <div className="text-amber-400 font-bold text-lg">{selectedEvent.spots}</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleRSVP(selectedEvent)}
                    className="flex-1 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-purple-950 font-black text-lg rounded-xl shadow-xl hover:shadow-amber-500/50 transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-6 h-6" />
                    RSVP Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-4 bg-purple-800/50 backdrop-blur-xl border-2 border-amber-400/30 text-amber-400 font-bold rounded-xl hover:bg-purple-700/50 transition-all flex items-center justify-center gap-2"
                  >
                    <Share2 className="w-5 h-5" />
                    Share
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-4 bg-purple-800/50 backdrop-blur-xl border-2 border-amber-400/30 text-amber-400 font-bold rounded-xl hover:bg-purple-700/50 transition-all flex items-center justify-center gap-2"
                  >
                    <Bell className="w-5 h-5" />
                    Remind Me
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <IoCalendarOutline className="w-20 h-20 text-purple-950 mx-auto mb-6" />
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-purple-950 mb-6">
              Don't Miss Out
            </h2>

            <p className="text-purple-950/80 text-xl mb-12 max-w-2xl mx-auto">
              Subscribe to our events calendar and never miss a life-changing gathering
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-purple-950 text-amber-400 font-black text-lg rounded-full shadow-2xl hover:shadow-purple-950/80 transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <Download className="w-6 h-6" />
              Download Calendar
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;