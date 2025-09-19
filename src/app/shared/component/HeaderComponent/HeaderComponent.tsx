"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { supabase } from '@/app/api/connection/supabasseConnection';


function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  
  // Fetch user session on component mount
  useEffect(() => {
    const getUserSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user || null);
      } catch (error) {
        console.error('Error fetching user session:', error);
      } finally {
        setLoading(false);
      }
    };

    getUserSession();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const isActive = (path) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  // Get user's first name or display email
  const getUserDisplayName = () => {
    if (!user) return '';
    
    // Try to get the full name from user_metadata
    const fullName = user.user_metadata?.full_name;
    if (fullName) {
      // Return first name only
      return fullName.split(' ')[0];
    }
    
    // Fallback to email username (before @)
    return user.email?.split('@')[0] || 'User';
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-800">Coach<span className="text-orange-500">Pro</span></h1>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-4 space-x-reverse">
          <Link 
            href="/" 
            className={`px-3 py-2 rounded-md transition-colors ${isActive('/') ? 'text-blue-800 font-bold bg-blue-50' : 'text-gray-700 hover:text-blue-800'}`}
          >
            الرئيسية
          </Link>
          <Link 
            href="/AboutCoach" 
            className={`px-3 py-2 rounded-md transition-colors ${isActive('/AboutCoach') ? 'text-blue-800 font-bold bg-blue-50' : 'text-gray-700 hover:text-blue-800'}`}
          >
            عن المدرب
          </Link>
          <Link 
            href="/Programs" 
            className={`px-3 py-2 rounded-md transition-colors ${isActive('/Programs') ? 'text-blue-800 font-bold bg-blue-50' : 'text-gray-700 hover:text-blue-800'}`}
          >
            البرامج
          </Link>
          <Link 
            href="/Store" 
            className={`px-3 py-2 rounded-md transition-colors ${isActive('/Store') ? 'text-blue-800 font-bold bg-blue-50' : 'text-gray-700 hover:text-blue-800'}`}
          >
            المتجر
          </Link>
          <Link 
            href="/Nutrition" 
            className={`px-3 py-2 rounded-md transition-colors ${isActive('/Nutrition') ? 'text-blue-800 font-bold bg-blue-50' : 'text-gray-700 hover:text-blue-800'}`}
          >
            التغذية
          </Link>
        </nav>
        
        {/* User auth section */}
        <div className="hidden md:flex items-center space-x-4 space-x-reverse">
          {loading ? (
            <div className="px-4 py-2 rounded-lg bg-gray-200 animate-pulse">
              <div className="h-4 w-20 bg-gray-300 rounded"></div>
            </div>
          ) : user ? (
            <div className="flex items-center space-x-3 space-x-reverse">
              <Link 
                href="/Profile" 
                className="px-3 py-2 text-blue-800 hover:text-blue-600 font-medium transition-colors"
              >
                مرحباً، {getUserDisplayName()}
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                تسجيل الخروج
              </button>
            </div>
          ) : (
            <Link 
              href="/Login" 
              className={`px-4 py-2 rounded-lg transition-colors ${isActive('/Login') ? 'bg-blue-900 text-white' : 'bg-blue-800 text-white hover:bg-blue-700'}`}
            >
              تسجيل الدخول
            </Link> 
          )}
        </div>
      </div>
      
      {/* Mobile menu (appears when button is clicked) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2 border-t">
          <div className="flex flex-col space-y-3">
            <Link 
              href="/" 
              className={`px-3 py-2 rounded-md transition-colors ${isActive('/') ? 'text-blue-800 font-bold bg-blue-50' : 'text-gray-700 hover:text-blue-800'}`}
            >
              الرئيسية
            </Link>
            <Link 
              href="/AboutCoach" 
              className={`px-3 py-2 rounded-md transition-colors ${isActive('/AboutCoach') ? 'text-blue-800 font-bold bg-blue-50' : 'text-gray-700 hover:text-blue-800'}`}
            >
              عن المدرب
            </Link>
            <Link 
              href="/Programs" 
              className={`px-3 py-2 rounded-md transition-colors ${isActive('/Programs') ? 'text-blue-800 font-bold bg-blue-50' : 'text-gray-700 hover:text-blue-800'}`}
            >
              البرامج
            </Link>
            <Link 
              href="/Store" 
              className={`px-3 py-2 rounded-md transition-colors ${isActive('/Store') ? 'text-blue-800 font-bold bg-blue-50' : 'text-gray-700 hover:text-blue-800'}`}
            >
              المتجر
            </Link>
            <Link 
              href="/Nutrition" 
              className={`px-3 py-2 rounded-md transition-colors ${isActive('/Nutrition') ? 'text-blue-800 font-bold bg-blue-50' : 'text-gray-700 hover:text-blue-800'}`}
            >
              التغذية
            </Link>
            
            {/* Mobile auth section */}
            {loading ? (
              <div className="px-4 py-2 rounded-lg bg-gray-200 animate-pulse text-center">
                <div className="h-4 w-full bg-gray-300 rounded"></div>
              </div>
            ) : user ? (
              <>
                <Link 
                  href="/Profile" 
                  className="px-3 py-2 text-blue-800 font-medium text-center"
                >
                  مرحباً، {getUserDisplayName()}
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-center"
                >
                  تسجيل الخروج
                </button>
              </>
            ) : (
              <Link 
                href="/Login" 
                className={`px-4 py-2 rounded-lg text-center transition-colors ${isActive('/Login') ? 'bg-blue-900 text-white' : 'bg-blue-800 text-white hover:bg-blue-700'}`}
              >
                تسجيل الدخول
              </Link> 
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default HeaderComponent;