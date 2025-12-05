import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Zap, Gift, CreditCard, Building, Smartphone } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '../LunguageContext';
import { GiGiftOfKnowledge } from "react-icons/gi";
import { BsBank } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import { GiSmartphone } from "react-icons/gi";
import { TiHeartOutline } from "react-icons/ti";

const Sow = () => {
  const { t } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState('once');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const suggestedAmounts = [10, 25, 50, 100, 250, 500];

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: CiCreditCard1 },
    { id: 'bank', name: 'Bank Transfer', icon: BsBank },
    { id: 'mobile', name: 'Mobile Money', icon: GiSmartphone },
  ];

  const handleSow = () => {
    const amount = selectedAmount || customAmount;
    if (!amount || amount <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }
    toast.success(`Thank you for your ${frequency === 'once' ? 'one-time' : 'monthly'} seed of $${amount}!`);
  };

  return (
    <div className="min-h-screen pt-20">
{/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden -mt-20">
        {/* Background Image - extends behind nav */}
        <div className="absolute inset-0 -top-20">
          <img
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&h=1080&fit=crop"
            alt="Giving"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Light Gradient Overlay - just for readability */}
        <div className="absolute inset-0 -top-32 bg-gradient-to-br from-purple-950/90 via-purple-900/85 to-amber-900/90" />
        
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 0, 180],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="inline-block mb-6"
            >
              <GiGiftOfKnowledge className="w-16 h-16 text-amber-400" />
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6">
              Sow Into The
              <span className="block text-amber-400 mt-2">Kingdom</span>
            </h1>

            <p className="text-purple-200 text-xl sm:text-2xl mb-8 max-w-2xl mx-auto font-light">
              Your generosity transforms lives and builds the Kingdom of God on earth
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500/20 rounded-full border border-amber-400/30"
            >
              <Heart className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-medium">Give cheerfully, give generously</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Giving Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-900/50 to-purple-950/50 backdrop-blur-2xl rounded-3xl border border-purple-700/30 shadow-2xl overflow-hidden"
        >
          {/* Frequency Toggle */}
          <div className="p-8 border-b border-purple-700/30">
            <div className="flex items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFrequency('once')}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  frequency === 'once'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-purple-950 shadow-xl shadow-amber-500/50'
                    : 'bg-purple-800/50 text-purple-300 hover:bg-purple-800/70'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Gift className="w-5 h-5" />
                  One-Time Seed
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFrequency('monthly')}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                  frequency === 'monthly'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-purple-950 shadow-xl shadow-amber-500/50'
                    : 'bg-purple-800/50 text-purple-300 hover:bg-purple-800/70'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Monthly Partnership
                </div>
              </motion.button>
            </div>
          </div>

          {/* Amount Selection */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Select Amount
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {suggestedAmounts.map((amount, index) => (
                <motion.button
                  key={amount}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount('');
                  }}
                  className={`p-6 rounded-2xl font-bold text-2xl transition-all duration-300 ${
                    selectedAmount === amount
                      ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-purple-950 shadow-xl shadow-amber-500/50'
                      : 'bg-purple-800/50 text-purple-200 hover:bg-purple-800/70 border border-purple-700/30'
                  }`}
                >
                  ${amount}
                </motion.button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-8">
              <label className="block text-purple-300 text-sm font-medium mb-2">
                Or Enter Custom Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-400 text-2xl font-bold">
                  $
                </span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  placeholder="0.00"
                  className="w-full pl-12 pr-4 py-4 bg-purple-800/50 border border-purple-700/30 rounded-2xl text-white text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Payment Method</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {paymentMethods.map((method) => (
                  <motion.button
                    key={method.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`p-4 rounded-2xl transition-all duration-300 ${
                      paymentMethod === method.id
                        ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-purple-950 shadow-xl shadow-amber-500/30'
                        : 'bg-purple-800/50 text-purple-200 hover:bg-purple-800/70 border border-purple-700/30'
                    }`}
                  >
                    <method.icon className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">{method.name}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSow}
              className="w-full py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-purple-950 font-black text-xl rounded-2xl shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/80 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <TiHeartOutline className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Sow ${selectedAmount || customAmount || '0'}
              {frequency === 'monthly' && '/month'}
              <GiGiftOfKnowledge className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Your Impact
          </h2>
          <p className="text-purple-300 text-xl">
            See how your giving transforms lives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '🏗️',
              title: 'Building Projects',
              description: 'Support construction of churches and community centers',
              color: 'from-blue-600 to-blue-800',
            },
            {
              icon: '📖',
              title: 'Youth Programs',
              description: 'Empower the next generation with spiritual education',
              color: 'from-purple-600 to-purple-800',
            },
            {
              icon: '🌍',
              title: 'Global Missions',
              description: 'Reach nations with the gospel message',
              color: 'from-amber-600 to-amber-800',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br ${item.color} shadow-2xl`}
            >
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-6xl mb-4"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-white text-2xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-purple-100 text-sm">
                {item.description}
              </p>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sow;