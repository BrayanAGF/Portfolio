import { useEffect, useState } from 'react';

export const useTheme = () => {

    const [theme, setTheme] = useState(() => {
        // Detectar tema desde localStorage o consulta de medios
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    });

    // Cambiar el tema dinámicamente
    useEffect(() => {
        const root = document.documentElement;

        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
          setTheme(mediaQuery.matches ? 'dark' : 'light');
        };
      
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
      }, []);

    return { theme, setTheme };
};
