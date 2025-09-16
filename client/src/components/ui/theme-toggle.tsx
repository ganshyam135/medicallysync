import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-6 h-6">
        {/* Sun Icon */}
        <Sun 
          className={`absolute inset-0 w-6 h-6 text-gold transition-all duration-500 ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-90 scale-75'
          }`}
        />
        
        {/* Moon Icon */}
        <Moon 
          className={`absolute inset-0 w-6 h-6 text-slate-300 transition-all duration-500 ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-75'
          }`}
        />
      </div>
      
      {/* Animated background glow */}
      <div 
        className={`absolute inset-0 rounded-full transition-all duration-300 ${
          theme === 'light' 
            ? 'bg-gradient-to-br from-yellow-400/20 to-orange-400/20 group-hover:from-yellow-400/30 group-hover:to-orange-400/30' 
            : 'bg-gradient-to-br from-blue-400/20 to-purple-400/20 group-hover:from-blue-400/30 group-hover:to-purple-400/30'
        }`}
      />
    </button>
  );
}