import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    home: 'Home',
    sow: 'Sow',
    connect: 'Connect',
    watch: 'Watch',
    awaken: 'Awaken',
    stories: 'Stories',
    events: 'Gatherings',
    gallery: 'Memories',
    
    // Home Page
    vision: 'Building a God society of all people of all Nations',
    tagline: 'A God Nation',
    joinUs: 'Join Our Movement',
    watchLive: 'Watch Live',
    latestMessage: 'Latest Message',
    upcomingEvents: 'Upcoming Events',
    getInvolved: 'Get Involved',
    
    // Sow Page
    sowTitle: 'Sow Into The Kingdom',
    sowDescription: 'Your generosity transforms lives and builds the Kingdom',
    oneTimeSow: 'One-Time Sowing',
    monthlySow: 'Monthly Partnership',
    
    // Connect Page
    connectTitle: 'Connect With Us',
    connectDescription: 'Join our community of believers',
    prayerRequest: 'Prayer Request',
    lifeGroups: 'Life Groups',
    
    // Watch Page
    watchTitle: 'Watch Services',
    watchDescription: 'Experience powerful messages',
    
    // Awaken Page
    awakenTitle: 'A Life of Prayer',
    awakenDescription: 'Join us every morning',
    morningDevotions: 'Morning Devotions',
    
    // Stories Page
    storiesTitle: 'Testimonies',
    storiesDescription: 'Lives transformed by grace',
    
    // Common
    learnMore: 'Learn More',
    submit: 'Submit',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    contact: 'Contact',
  },
  nd: {
    // Navigation
    home: 'Ekhaya',
    sow: 'Hlanyela',
    connect: 'Xhumana',
    watch: 'Buka',
    awaken: 'Vuka',
    stories: 'Izindaba',
    events: 'Imihlangano',
    gallery: 'Izikhumbuzo',
    
    // Home Page
    vision: 'Sakha isizwe sikaNkulunkulu sabantu bonke bezizwe zonke',
    tagline: 'Isizwe SikaNkulunkulu',
    joinUs: 'Joyina Uhambo Lwethu',
    watchLive: 'Buka Ngezikhathi',
    latestMessage: 'Umyalezo Wakamuva',
    upcomingEvents: 'Imicimbi Ezayo',
    getInvolved: 'Zibandakanye',
    
    // Sow Page
    sowTitle: 'Hlanyela Embusweni',
    sowDescription: 'Ukuphana kwakho kuguqula impilo yakhe umbuso',
    oneTimeSow: 'Ukuhlanyela Kanye',
    monthlySow: 'Ubambiswano Lwenyanga',
    
    // Connect Page
    connectTitle: 'Xhumana Lathi',
    connectDescription: 'Joyina umphakathi wethu wabakholwayo',
    prayerRequest: 'Isicelo Somthandazo',
    lifeGroups: 'Amaqembu Empilo',
    
    // Watch Page
    watchTitle: 'Buka Inkonzo',
    watchDescription: 'Zwa imilayezo elamandla',
    
    // Awaken Page
    awakenTitle: 'Impilo Yomthandazo',
    awakenDescription: 'Sihlangane ekuseni konke',
    morningDevotions: 'Ukuzinikela Kwasekuseni',
    
    // Stories Page
    storiesTitle: 'Ubufakazi',
    storiesDescription: 'Impilo eguqulwe ngumusa',
    
    // Common
    learnMore: 'Funda Okunengi',
    submit: 'Thumela',
    email: 'I-imeyili',
    phone: 'Ucingo',
    message: 'Umlayezo',
    contact: 'Xhumana',
  },
  fr: {
    // Navigation
    home: 'Accueil',
    sow: 'Semer',
    connect: 'Connecter',
    watch: 'Regarder',
    awaken: 'Réveiller',
    stories: 'Histoires',
    events: 'Rassemblements',
    gallery: 'Souvenirs',
    
    // Home Page
    vision: 'Construire une société de Dieu de tous les peuples de toutes les nations',
    tagline: 'Une Nation de Dieu',
    joinUs: 'Rejoignez Notre Mouvement',
    watchLive: 'Regarder en Direct',
    latestMessage: 'Dernier Message',
    upcomingEvents: 'Événements à Venir',
    getInvolved: "S'impliquer",
    
    // Sow Page
    sowTitle: 'Semer Dans Le Royaume',
    sowDescription: 'Votre générosité transforme des vies et construit le Royaume',
    oneTimeSow: 'Don Unique',
    monthlySow: 'Partenariat Mensuel',
    
    // Connect Page
    connectTitle: 'Connectez-vous Avec Nous',
    connectDescription: 'Rejoignez notre communauté de croyants',
    prayerRequest: 'Demande de Prière',
    lifeGroups: 'Groupes de Vie',
    
    // Watch Page
    watchTitle: 'Regarder les Services',
    watchDescription: 'Découvrez des messages puissants',
    
    // Awaken Page
    awakenTitle: 'Une Vie de Prière',
    awakenDescription: 'Rejoignez-nous chaque matin',
    morningDevotions: 'Dévotions Matinales',
    
    // Stories Page
    storiesTitle: 'Témoignages',
    storiesDescription: 'Des vies transformées par la grâce',
    
    // Common
    learnMore: 'En Savoir Plus',
    submit: 'Soumettre',
    email: 'Email',
    phone: 'Téléphone',
    message: 'Message',
    contact: 'Contact',
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    return translations[language][key] || key;
  };

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};