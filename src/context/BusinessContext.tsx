import React, { createContext, useContext, useState, useEffect } from 'react';
import { BusinessConfig, ServiceItem, AccentColor } from '../types';
import { initialBusinessConfig, defaultServices } from '../data/defaultConfig';

interface ThemeClasses {
  bgPrimary: string;
  bgHover: string;
  textPrimary: string;
  borderPrimary: string;
  ringPrimary: string;
  gradientBadge: string;
  accentHex: string;
}

export const themeMap: Record<AccentColor, ThemeClasses> = {
  orange: {
    bgPrimary: 'bg-orange-600',
    bgHover: 'hover:bg-orange-500',
    textPrimary: 'text-orange-500',
    borderPrimary: 'border-orange-500',
    ringPrimary: 'ring-orange-500',
    gradientBadge: 'from-orange-600 to-amber-500',
    accentHex: '#ea580c'
  },
  red: {
    bgPrimary: 'bg-red-600',
    bgHover: 'hover:bg-red-500',
    textPrimary: 'text-red-500',
    borderPrimary: 'border-red-500',
    ringPrimary: 'ring-red-500',
    gradientBadge: 'from-red-600 to-rose-500',
    accentHex: '#dc2626'
  },
  blue: {
    bgPrimary: 'bg-sky-600',
    bgHover: 'hover:bg-sky-500',
    textPrimary: 'text-sky-400',
    borderPrimary: 'border-sky-500',
    ringPrimary: 'ring-sky-500',
    gradientBadge: 'from-sky-600 to-cyan-500',
    accentHex: '#0284c7'
  },
  emerald: {
    bgPrimary: 'bg-emerald-600',
    bgHover: 'hover:bg-emerald-500',
    textPrimary: 'text-emerald-400',
    borderPrimary: 'border-emerald-500',
    ringPrimary: 'ring-emerald-500',
    gradientBadge: 'from-emerald-600 to-teal-500',
    accentHex: '#059669'
  },
  amber: {
    bgPrimary: 'bg-amber-600',
    bgHover: 'hover:bg-amber-500',
    textPrimary: 'text-amber-400',
    borderPrimary: 'border-amber-500',
    ringPrimary: 'ring-amber-500',
    gradientBadge: 'from-amber-600 to-yellow-500',
    accentHex: '#d97706'
  }
};

interface BusinessContextType {
  config: BusinessConfig;
  updateConfig: (newConfig: Partial<BusinessConfig>) => void;
  resetConfig: () => void;
  theme: ThemeClasses;
  services: ServiceItem[];
  updateServicePrice: (id: string, newPrice: number | 'POA') => void;
  
  // Modals
  isBookingOpen: boolean;
  selectedServiceForBooking: ServiceItem | null;
  openBookingModal: (service?: ServiceItem | string) => void;
  closeBookingModal: () => void;
  
  isDetailModalOpen: boolean;
  selectedServiceForDetail: ServiceItem | null;
  openDetailModal: (service: ServiceItem) => void;
  closeDetailModal: () => void;

  isCustomizerOpen: boolean;
  toggleCustomizer: () => void;
  setIsCustomizerOpen: (open: boolean) => void;
}

const BusinessContext = createContext<BusinessContextType | undefined>(undefined);

export const BusinessProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<BusinessConfig>(() => {
    const saved = localStorage.getItem('apex_detailing_template_config');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved config', e);
      }
    }
    return initialBusinessConfig;
  });

  const [services, setServices] = useState<ServiceItem[]>(() => {
    const saved = localStorage.getItem('apex_detailing_template_services');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved services', e);
      }
    }
    return defaultServices;
  });

  // Modal states
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<ServiceItem | null>(null);

  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState<ServiceItem | null>(null);

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('apex_detailing_template_config', JSON.stringify(config));
  }, [config]);

  useEffect(() => {
    localStorage.setItem('apex_detailing_template_services', JSON.stringify(services));
  }, [services]);

  const updateConfig = (newFields: Partial<BusinessConfig>) => {
    setConfig(prev => ({ ...prev, ...newFields }));
  };

  const resetConfig = () => {
    setConfig(initialBusinessConfig);
    setServices(defaultServices);
    localStorage.removeItem('apex_detailing_template_config');
    localStorage.removeItem('apex_detailing_template_services');
  };

  const updateServicePrice = (id: string, newPrice: number | 'POA') => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, price: newPrice } : s));
  };

  const openBookingModal = (service?: ServiceItem | string) => {
    if (typeof service === 'string') {
      const found = services.find(s => 
        s.id.toLowerCase() === service.toLowerCase() || 
        s.title.toLowerCase().includes(service.toLowerCase()) || 
        service.toLowerCase().includes(s.title.toLowerCase())
      );
      if (found) {
        setSelectedServiceForBooking(found);
      } else {
        setSelectedServiceForBooking({
          id: service.toLowerCase().replace(/\s+/g, '-'),
          category: 'valeting',
          title: service,
          price: 'POA',
          duration: 'Custom Duration',
          image: services[0]?.image || '',
          shortDesc: `Custom estimate for ${service}`,
          bulletPoints: [],
          fullProcess: [],
          recommendedFor: 'Custom vehicle appraisal'
        });
      }
    } else {
      setSelectedServiceForBooking(service || null);
    }
    setIsBookingOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingOpen(false);
    setSelectedServiceForBooking(null);
  };

  const openDetailModal = (service: ServiceItem) => {
    setSelectedServiceForDetail(service);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedServiceForDetail(null);
  };

  const toggleCustomizer = () => {
    setIsCustomizerOpen(prev => !prev);
  };

  const theme = themeMap[config.accentColor] || themeMap.orange;

  return (
    <BusinessContext.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
        theme,
        services,
        updateServicePrice,
        isBookingOpen,
        selectedServiceForBooking,
        openBookingModal,
        closeBookingModal,
        isDetailModalOpen,
        selectedServiceForDetail,
        openDetailModal,
        closeDetailModal,
        isCustomizerOpen,
        toggleCustomizer,
        setIsCustomizerOpen
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusiness = () => {
  const context = useContext(BusinessContext);
  if (!context) {
    throw new Error('useBusiness must be used within a BusinessProvider');
  }
  return context;
};
