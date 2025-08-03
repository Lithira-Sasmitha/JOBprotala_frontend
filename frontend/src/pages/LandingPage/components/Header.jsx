import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const isAuthenticated = true;
  const user = { fullName: 'Alex', role: 'employer' };
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <Briefcase className="text-indigo-600 w-6 h-6" />
            <span className="text-xl font-bold text-gray-800">JobPortal</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <button onClick={() => navigate('/find-jobs')} className="hover:text-indigo-600">
              Find Jobs
            </button>
            <button
              onClick={() =>
                navigate(isAuthenticated && user?.role === 'employer' ? '/employer-dashboard' : '/login')
              }
              className="hover:text-indigo-600"
            >
              For Employers
            </button>
          </nav>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-gray-600">Welcome, {user?.fullName}</span>
                <a
                  href={user?.role === 'employer' ? '/employer-dashboard' : '/find-jobs'}
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                >
                  Dashboard
                </a>
              </>
            ) : (
              <>
                <a href="/login" className="text-gray-700 hover:text-indigo-600">
                  Login
                </a>
                <a
                  href="/signup"
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                >
                  Sign Up
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
