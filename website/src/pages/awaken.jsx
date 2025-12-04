import React from "react";
import { motion } from "framer-motion";
import { Sunrise, Clock, Book, Users, Globe, Calendar } from "lucide-react";
import { useLanguage } from "../LunguageContext";
import { GiPrayer } from "react-icons/gi";
import { TbPray } from "react-icons/tb";
import { GiSandal } from "react-icons/gi";
import { GiClockwork } from "react-icons/gi";
import { GiAlarmClock } from "react-icons/gi";
import { CgSandClock } from "react-icons/cg";
import { GiWorld } from "react-icons/gi";
import { PiPersonSimpleThrowBold } from "react-icons/pi";
import { WiSunrise } from "react-icons/wi";
import { WiDayLightWind } from "react-icons/wi";


const Awaken = () => {
  const { t } = useLanguage();

  const devotionFeatures = [
    {
      icon: GiClockwork,
      title: "Daily Consistency",
      description:
        "Join us every morning at 5:00 AM for an hour of prayer and devotion",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: GiSandal,
      title: "Scripture Focus",
      description: "Deep dive into God's Word with guided study and reflection",
      color: "from-purple-600 to-purple-800",
    },
    {
      icon: TbPray,
      title: "Community Prayer",
      description: "Unite with believers worldwide in powerful intercession",
      color: "from-pink-600 to-pink-800",
    },
    {
      icon: GiWorld,
      title: "WhatsApp Groups",
      description: "Connect through prayer groups in English, Ndebele & French",
      color: "from-amber-600 to-amber-800",
    },
  ];

  const schedule = [
    { day: "Monday", focus: "Personal Transformation", verse: "Romans 12:2" },
    { day: "Tuesday", focus: "Kingdom Purpose", verse: "Matthew 6:33" },
    { day: "Wednesday", focus: "Spiritual Warfare", verse: "Ephesians 6:12" },
    { day: "Thursday", focus: "Divine Guidance", verse: "Proverbs 3:5-6" },
    { day: "Friday", focus: "Faith Building", verse: "Hebrews 11:1" },
    { day: "Saturday", focus: "Thanksgiving & Praise", verse: "Psalm 100" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1920&h=1080&fit=crop"
            alt="Prayer"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/90 via-indigo-900/85 to-purple-900/90" />
        
        {/* Animated Background */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <GiPrayer className="w-20 h-20 text-amber-400" />
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6">
              A Life of
              <span className="block text-amber-400 mt-2">Prayer</span>
            </h1>

            <p className="text-purple-200 text-xl sm:text-2xl mb-8 max-w-2xl mx-auto font-light">
              Start each day in God's presence through morning devotions
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-4 bg-amber-500/20 rounded-2xl border border-amber-400/30"
            >
              <CgSandClock className="w-8 h-8 text-amber-400" />
              <div className="text-center sm:text-left">
                <div className="text-amber-400 font-black text-2xl">05:00 - 06:00 AM</div>
                <div className="text-purple-200 text-sm">Monday - Saturday</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Why Join <span className="text-amber-400">Morning Devotions</span>
          </h2>
          <p className="text-purple-300 text-xl">
            Transform your mornings, transform your life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {devotionFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br ${feature.color} shadow-2xl group`}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-16 h-16 text-white mb-4" />
              </motion.div>
              <h3 className="text-white text-2xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {feature.description}
              </p>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-purple-950/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Weekly <span className="text-amber-400">Focus</span>
            </h2>
            <p className="text-purple-300 text-xl">
              Each day brings a unique theme for spiritual growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schedule.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/50 to-purple-950/50 backdrop-blur-xl border border-purple-700/30 p-6 shadow-xl group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-amber-400 font-black text-lg">
                    {day.day}
                  </div>
                  <Calendar className="w-5 h-5 text-purple-400" />
                </div>

                <h3 className="text-white text-xl font-bold mb-2">
                  {day.focus}
                </h3>

                <div className="flex items-center gap-2 text-purple-300 text-sm">
                  <Book className="w-4 h-4" />
                  <span>{day.verse}</span>
                </div>

                <motion.div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-600 via-amber-500 to-amber-600 p-12 shadow-2xl"
        >
          <div className="absolute top-10 right-10 text-purple-950/10 text-9xl font-black">
            "
          </div>

          <div className="relative z-10">
            <p className="text-purple-950 text-lg sm:text-xl font-bold mb-8 leading-relaxed">
              <small>
                "The morning devotions have completely transformed my spiritual
                life. Starting my day in God's presence gives me strength,
                clarity, and purpose for everything I do."
              </small>
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-purple-950 rounded-full flex items-center justify-center">
                <PiPersonSimpleThrowBold className="w-8 h-8 text-amber-400" />
              </div>
              <div>
                <div className="text-purple-950 font-black text-lg">
                  UFIC Youth Member
                </div>
                <div className="text-purple-950/70 text-sm">
                  Daily Participant
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 to-indigo-950" />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <WiDayLightWind className="w-20 h-20 text-amber-400 mx-auto mb-6" />

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              Ready to Start Your Day Right?
            </h2>

            <p className="text-purple-200 text-xl mb-12 max-w-2xl mx-auto">
              Join thousands of believers worldwide in morning prayer and
              devotion
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-purple-950 font-black text-lg rounded-full shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/80 transition-all duration-300 flex items-center gap-3 mx-auto group"
            >
              <GiPrayer className="w-6 h-6" />
              Join WhatsApp Prayer Group
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Awaken;
