'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HomeIcon, CalendarIcon, TagIcon } from 'lucide-react';

const notifications = [{
  id: 1,
  icon: <HomeIcon className="h-4 w-4" />,
  title: 'Model home open in Oakridge Heights',
  description: 'This weekend • 10am-5pm daily'
}, {
  id: 2,
  icon: <CalendarIcon className="h-4 w-4" />,
  title: 'New home release this week in Patterson Ranch',
  description: 'Starting from $750,000 • 3-5 bedrooms'
}, {
  id: 3,
  icon: <TagIcon className="h-4 w-4" />,
  title: 'New Sales event this week for Metro West community',
  description: 'Special financing available • Limited time'
}];

export const NotificationCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % notifications.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const activeNotification = notifications[activeIndex];
  
  return (
    <div className="absolute left-0 bottom-8 z-10 pointer-events-none px-4 md:px-8 lg:px-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNotification.id}
          className="max-w-xs bg-white rounded-lg shadow-lg border border-gray-100 p-3 flex items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
        >
          <div className="flex-shrink-0 p-2 mr-3 rounded-full bg-red-100" style={{ color: '#ff6e6e' }}>
            {activeNotification.icon}
          </div>
          <div className="space-y-1">
            <h4 className="font-medium font-opensauce text-sm text-vulcan">{activeNotification.title}</h4>
            <p className="text-xs text-bright-gray">{activeNotification.description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}