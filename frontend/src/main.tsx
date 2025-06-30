import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Performance monitoring
if (process.env.NODE_ENV === 'development') {
  // Log performance metrics in development
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'navigation') {
        const navEntry = entry as PerformanceNavigationTiming;
        console.log('🚀 Page Load Performance:', {
          'DOM Content Loaded': navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
          'Load Complete': navEntry.loadEventEnd - navEntry.loadEventStart,
          'First Paint': navEntry.responseStart - navEntry.requestStart,
        });
      }
    }
  });
  
  observer.observe({ entryTypes: ['navigation'] });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
