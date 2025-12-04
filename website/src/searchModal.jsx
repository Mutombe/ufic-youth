import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, FileText, Calendar, Heart, Sparkles, Book, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef(null);

  // Color palette from UFIC Youth
  const colors = {
    purple950: '#581c87',
    purple900: '#6b21a8',
    purple800: '#7e22ce',
    purple700: '#7c3aed',
    amber400: '#fbbf24',
    amber500: '#f59e0b',
    amber600: '#d97706',
  };

  // Searchable content for UFIC Youth
  const searchableContent = [
    {
      title: 'Home',
      path: '/',
      description: 'UFIC Youth - Building A God Nation',
      keywords: ['home', 'main', 'landing', 'start', 'ufic', 'youth'],
      category: 'Page'
    },
    {
      title: 'Sow',
      path: '/sow',
      description: 'Sow a seed and partner with our mission',
      keywords: ['sow', 'give', 'donate', 'offering', 'seed', 'tithe', 'contribution'],
      category: 'Page'
    },
    {
      title: 'Connect',
      path: '/connect',
      description: 'Connect with UFIC Youth community',
      keywords: ['connect', 'join', 'community', 'membership', 'fellowship'],
      category: 'Page'
    },
    {
      title: 'Watch',
      path: '/watch',
      description: 'Watch live services and sermons',
      keywords: ['watch', 'live', 'stream', 'service', 'sermon', 'video'],
      category: 'Page'
    },
    {
      title: 'Awaken',
      path: '/awaken',
      description: 'Experience spiritual awakening',
      keywords: ['awaken', 'spiritual', 'revival', 'transformation', 'encounter'],
      category: 'Page'
    },
    {
      title: 'Gallery',
      path: '/gallery',
      description: 'View our photo gallery and memories',
      keywords: ['gallery', 'photos', 'images', 'pictures', 'memories'],
      category: 'Page'
    },
    {
      title: 'Events',
      path: '/events',
      description: 'Upcoming events and gatherings',
      keywords: ['events', 'gatherings', 'conferences', 'meetings', 'programs'],
      category: 'Page'
    },
    {
      title: 'Stories',
      path: '/stories',
      description: 'Testimonies and life-changing stories',
      keywords: ['stories', 'testimonies', 'testimonials', 'miracles', 'transformation'],
      category: 'Page'
    },
    // Weekly Programs
    {
      title: 'A Life of Prayer',
      path: '/',
      description: 'Monday-Saturday, 5:00-6:00 AM - Start your day with prayer',
      keywords: ['prayer', 'morning', 'devotion', 'intercession', 'daily'],
      category: 'Program'
    },
    {
      title: 'Branch Stewardship',
      path: '/',
      description: 'Tuesday, 9:00 PM - Leadership and stewardship training',
      keywords: ['stewardship', 'tuesday', 'leadership', 'management'],
      category: 'Program'
    },
    {
      title: 'Youth Online Prayers',
      path: '/',
      description: 'Wednesday, 7:00 PM - Join youth in online prayer',
      keywords: ['youth', 'online', 'prayer', 'wednesday', 'virtual'],
      category: 'Program'
    },
    {
      title: 'Midweek Service',
      path: '/',
      description: 'Thursday, 6:00 PM - Midweek worship and teaching',
      keywords: ['midweek', 'thursday', 'service', 'worship', 'teaching'],
      category: 'Program'
    },
    {
      title: 'Leadership Prayer',
      path: '/',
      description: 'Saturday, 9:00 AM - Prayer for leaders',
      keywords: ['leadership', 'saturday', 'prayer', 'leaders', 'intercession'],
      category: 'Program'
    },
    {
      title: 'Sunday Service',
      path: '/',
      description: 'Sunday, 9:00 AM - Main worship service',
      keywords: ['sunday', 'service', 'worship', 'main', 'church'],
      category: 'Program'
    },
    // Events
    {
      title: 'Youth Conference 2025',
      path: '/events',
      description: 'December 15, 2025 - Powerful youth gathering',
      keywords: ['conference', 'youth', 'december', 'gathering', '2025'],
      category: 'Event'
    },
    {
      title: 'Worship Night',
      path: '/events',
      description: 'December 8, 2025 - Night of worship and praise',
      keywords: ['worship', 'night', 'praise', 'december'],
      category: 'Event'
    },
    {
      title: 'Leadership Workshop',
      path: '/events',
      description: 'December 20, 2025 - Leadership training',
      keywords: ['leadership', 'workshop', 'training', 'december'],
      category: 'Event'
    },
    {
      title: 'Community Outreach',
      path: '/events',
      description: 'December 10, 2025 - Reach the community',
      keywords: ['outreach', 'community', 'evangelism', 'mission'],
      category: 'Event'
    },
    {
      title: 'New Year Service',
      path: '/events',
      description: 'December 31, 2025 - Special New Year celebration',
      keywords: ['new year', 'celebration', 'special', 'december'],
      category: 'Event'
    }
  ];

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      const query = searchQuery.toLowerCase();
      const results = searchableContent.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(query);
        const descriptionMatch = item.description.toLowerCase().includes(query);
        const keywordsMatch = item.keywords.some(keyword => 
          keyword.toLowerCase().includes(query)
        );
        return titleMatch || descriptionMatch || keywordsMatch;
      });
      setSearchResults(results);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleClose = () => {
    setSearchQuery('');
    setSearchResults([]);
    onClose();
  };

  const handleResultClick = () => {
    handleClose();
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Program':
        return <Calendar className="w-4 h-4" />;
      case 'Event':
        return <Sparkles className="w-4 h-4" />;
      case 'Story':
        return <Heart className="w-4 h-4" />;
      case 'Resource':
        return <Book className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Program':
        return 'bg-purple-100 text-purple-700 group-hover:bg-purple-200';
      case 'Event':
        return 'bg-amber-100 text-amber-700 group-hover:bg-amber-200';
      case 'Story':
        return 'bg-pink-100 text-pink-700 group-hover:bg-pink-200';
      case 'Resource':
        return 'bg-blue-100 text-blue-700 group-hover:bg-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 group-hover:bg-gray-200';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-32 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
          >
            <div 
              className="rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
              style={{ 
                background: 'rgba(88, 28, 135, 0.95)',
                border: `2px solid ${colors.amber400}` 
              }}
            >
              {/* Search Input */}
              <div 
                className="flex items-center gap-3 p-4 border-b-2"
                style={{
                  background: `linear-gradient(to right, ${colors.purple900}80, ${colors.amber600}20)`,
                  borderColor: colors.amber400 + '30',
                }}
              >
                <Sparkles className="w-5 h-5 flex-shrink-0" style={{ color: colors.amber400 }} />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search pages, programs, or events..."
                  className="flex-1 outline-none text-white placeholder-purple-300 text-lg bg-transparent niveau-font"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-1 hover:bg-purple-800 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-purple-300" />
                  </button>
                )}
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-purple-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" style={{ color: colors.amber400 }} />
                </button>
              </div>

              {/* Search Results */}
              <div className="max-h-[60vh] overflow-y-auto" style={{ background: colors.purple950 }}>
                {searchQuery.trim() === '' ? (
                  <div className="p-8 text-center">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{
                        background: `linear-gradient(135deg, ${colors.purple800}40, ${colors.amber400}40)`,
                      }}
                    >
                      <Sparkles className="w-8 h-8" style={{ color: colors.amber400 }} />
                    </div>
                    <p className="text-white font-semibold mb-2 niveau-font">
                      Start searching...
                    </p>
                    <p className="text-purple-300 text-sm niveau-font">
                      Try "worship", "prayer", "events", or "youth"
                    </p>
                  </div>
                ) : isSearching ? (
                  <div className="p-8 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      {[0, 0.2, 0.4].map((delay, index) => (
                        <motion.div
                          key={index}
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1.3, 0.8],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: delay,
                            ease: "easeInOut",
                          }}
                          className="w-2 h-2 rounded-full"
                          style={{
                            background: `linear-gradient(to right, ${colors.purple700}, ${colors.amber400})`,
                          }}
                        />
                      ))}
                    </div>
                    <p className="text-purple-300 text-sm mt-3 niveau-font">Searching...</p>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="py-2">
                    {searchResults.map((result, index) => (
                      <Link
                        key={index}
                        to={result.path}
                        onClick={handleResultClick}
                        className="flex items-center gap-4 p-4 transition-colors duration-200 group border-b border-purple-800 last:border-0"
                        style={{
                          background: colors.purple950,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `linear-gradient(to right, ${colors.purple900}, ${colors.purple800})`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = colors.purple950;
                        }}
                      >
                        <div className={`p-2.5 rounded-lg transition-colors ${getCategoryColor(result.category)}`}>
                          {getCategoryIcon(result.category)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 
                              className="text-sm font-bold truncate niveau-font"
                              style={{ color: colors.amber400 }}
                            >
                              {result.title}
                            </h3>
                            <span 
                              className="px-2 py-0.5 text-xs font-semibold rounded-full flex-shrink-0 niveau-font"
                              style={{
                                background: colors.amber400 + '20',
                                color: colors.amber400,
                              }}
                            >
                              {result.category}
                            </span>
                          </div>
                          <p className="text-xs text-purple-300 line-clamp-1 niveau-font">
                            {result.description}
                          </p>
                        </div>
                        <ArrowRight 
                          className="w-4 h-4 flex-shrink-0 transition-colors text-purple-400" 
                          style={{
                            color: 'rgba(251, 191, 36, 0.6)',
                          }}
                        />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"
                      style={{ background: colors.purple900 }}
                    >
                      <Search className="w-8 h-8 text-purple-400" />
                    </div>
                    <p className="text-white font-semibold mb-1 niveau-font">No results found</p>
                    <p className="text-purple-300 text-sm niveau-font">
                      Try searching with different keywords
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              {searchQuery.trim() === '' && (
                <div 
                  className="border-t-2 px-4 py-3"
                  style={{
                    borderColor: colors.amber400 + '30',
                    background: `linear-gradient(to right, ${colors.purple900}60, ${colors.amber600}10)`,
                  }}
                >
                  <div className="flex items-center justify-between text-xs text-purple-300 niveau-font">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <kbd 
                          className="px-2 py-1 rounded text-xs font-semibold"
                          style={{
                            background: colors.purple800,
                            border: `2px solid ${colors.amber400}`,
                            color: colors.amber400,
                          }}
                        >
                          ↵
                        </kbd>
                        to select
                      </span>
                      <span className="flex items-center gap-1">
                        <kbd 
                          className="px-2 py-1 rounded text-xs font-semibold"
                          style={{
                            background: colors.purple800,
                            border: `2px solid ${colors.amber400}`,
                            color: colors.amber400,
                          }}
                        >
                          ESC
                        </kbd>
                        to close
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;