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
      top: 0,
      left: 0,
      width: '100vw',
      height: '4px',
      zIndex: 9999,
      background: 'transparent',
    }}>
      <div
        style={{
          width: `${scroll}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
          transition: 'width 0.2s cubic-bezier(.4,1.3,.6,1)',
          borderRadius: '2px',
        }}
      />
    </div>
  );
};

export default ScrollProgress; 