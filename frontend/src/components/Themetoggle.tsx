// src/components/ThemeToggle.tsx
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi'; // ใช้ไอคอนจาก react-icons

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // เพื่อหลีกเลี่ยงข้อผิดพลาดในการเรนเดอร์แบบ hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors duration-300"
    >
      {theme === 'light' ? <HiMoon size={24} /> : <HiSun size={24} />}
    </button>
  );
};

export default ThemeToggle;
