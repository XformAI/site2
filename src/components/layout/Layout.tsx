
import Navbar from './Navbar';
import Footer from './Footer';
import ThemeToggle from '../ThemeToggle';
import { ThemeProvider } from '../../contexts/ThemeContext';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen transition-colors duration-300 dark:bg-gray-900">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
