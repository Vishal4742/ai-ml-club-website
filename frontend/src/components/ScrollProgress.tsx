import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScroll(progress);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      right: '20px',
      width: '4px',
      height: '100px',
      zIndex: 9999,
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '2px',
      transform: 'translateY(-50%)',
    }}>
      <div
        style={{
          width: '100%',
          height: `${scroll}%`,
          background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
          transition: 'height 0.2s cubic-bezier(.4,1.3,.6,1)',
          borderRadius: '2px',
        }}
      />
    </div>
  );
};

export default ScrollProgress; 