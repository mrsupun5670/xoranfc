import { useEffect } from 'react';

export function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement('div');
    const cursorDot = document.createElement('div');
    
    cursor.className = 'custom-cursor';
    cursorDot.className = 'custom-cursor-dot';
    
    // Ensure high z-index and no pointer events inline as backup
    cursor.style.zIndex = '9999';
    cursorDot.style.zIndex = '10000';
    cursor.style.pointerEvents = 'none';
    cursorDot.style.pointerEvents = 'none';

    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
      document.body.removeChild(cursorDot);
    };
  }, []);

  return null;
}
