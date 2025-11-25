import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/gallery', label: 'Галерея', icon: 'Images' },
    { path: '/about', label: 'О нас', icon: 'Info' },
    { path: '/process', label: 'Процесс', icon: 'Workflow' },
    { path: '/contact', label: 'Контакты', icon: 'Mail' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-card/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl transform group-hover:rotate-12 transition-transform">
              🎨
            </div>
            <span className="text-2xl font-bold hidden md:block">Искусство на холсте</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary font-semibold' : 'text-muted-foreground'
                }`}
              >
                <Icon name={link.icon as any} size={18} />
                {link.label}
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-colors ${
                  location.pathname === link.path ? 'bg-primary/10 text-primary font-semibold' : 'hover:bg-muted'
                }`}
              >
                <Icon name={link.icon as any} size={20} />
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
