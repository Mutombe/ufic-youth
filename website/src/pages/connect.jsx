import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Mail, Phone, MessageSquare, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '../LunguageContext';
import { CgCommunity } from "react-icons/cg";
import { TiLocation } from "react-icons/ti";
import { IoPhonePortrait } from "react-icons/io5";
import { HiPaperAirplane } from "react-icons/hi";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";


const Connect = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'general',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    toast.success('Thank you! We\'ll be in touch soon.');
    setFormData({ name: '', email: '', phone: '', message: '', interest: 'general' });
  };

  const interests = [
    { id: 'general', name: 'General Inquiry', icon: '💬' },
    { id: 'prayer', name: 'Prayer Request', icon: '🙏' },
    { id: 'life-groups', name: 'Join Life Groups', icon: '👥' },
    { id: 'volunteer', name: 'Volunteer', icon: '✋' },
    { id: 'youth', name: 'Youth Ministry', icon: '🌟' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden -mt-20">
        {/* Background Image */}
        <div className="absolute inset-0 -top-20">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&h=1080&fit=crop"
            alt="Community"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/90 via-purple-900/85 to-blue-900/90" />
        
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"
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
              <CgCommunity className="w-20 h-20 text-amber-400" />
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6">
              Connect With
              <span className="block text-amber-400 mt-2">Our Community</span>
            </h1>

            <p className="text-purple-200 text-xl sm:text-2xl mb-8 max-w-2xl mx-auto font-light">
              Join a family of believers passionate about building God's Kingdom
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-900/50 to-purple-950/50 backdrop-blur-2xl rounded-3xl border border-purple-700/30 shadow-2xl p-8"
          >
            <h2 className="text-3xl font-black text-white mb-6">Get In Touch</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-purple-300 text-sm font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-purple-800/50 border border-purple-700/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-purple-300 text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-purple-800/50 border border-purple-700/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-purple-300 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-purple-800/50 border border-purple-700/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                  placeholder="+263..."
                />
              </div>

              <div>
                <label className="block text-purple-300 text-sm font-medium mb-2">
                  I'm Interested In
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-3 bg-purple-800/50 border border-purple-700/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                >
                  {interests.map((interest) => (
                    <option key={interest.id} value={interest.id}>
                      {interest.icon} {interest.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-purple-300 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="5"
                  className="w-full px-4 py-3 bg-purple-800/50 border border-purple-700/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-purple-950 font-bold text-lg rounded-xl shadow-xl shadow-amber-500/50 hover:shadow-amber-500/80 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 shadow-2xl">
              <HiPaperAirplane className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-blue-100">info@ufiministries.org</p>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 shadow-2xl">
              <IoPhonePortrait className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-purple-100">+263 867 755 5777</p>
            </div>

            <div className="bg-gradient-to-br from-amber-600 to-amber-800 rounded-3xl p-8 shadow-2xl">
              <TiLocation className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-amber-100">
                United Family International Church
                <br />Harare, Zimbabwe
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-600 to-pink-800 rounded-3xl p-8 shadow-2xl">
              <BiSolidMessageRoundedDetail className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">WhatsApp Groups</h3>
              <p className="text-pink-100">
                Join our Prayer Life Groups
                <br />Available in English, Ndebele & French
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Life Groups Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-purple-950/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Join A <span className="text-amber-400">Life Group</span>
            </h2>
            <p className="text-purple-300 text-xl">
              Connect with believers in your area
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                time: 'Monday-Saturday',
                name: 'Morning Devotions',
                description: '05:00 - 06:00 AM',
                color: 'from-blue-600 to-blue-800',
              },
              {
                time: 'Wednesday',
                name: 'Youth Online Prayers',
                description: '7:00 PM',
                color: 'from-purple-600 to-purple-800',
              },
              {
                time: 'Sunday',
                name: 'Sunday Service',
                description: '9:00 AM',
                color: 'from-amber-600 to-amber-800',
              },
            ].map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className={`relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br ${group.color} shadow-2xl`}
              >
                <div className="text-white text-sm font-bold uppercase tracking-wider mb-2">
                  {group.time}
                </div>
                <h3 className="text-white text-2xl font-black mb-3">
                  {group.name}
                </h3>
                <p className="text-white/80 text-lg">
                  {group.description}
                </p>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connect;