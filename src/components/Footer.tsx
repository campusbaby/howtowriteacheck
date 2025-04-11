'use client';

import Link from 'next/link';
import { useLanguage } from '@/app/context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} {language === 'en' ? 'Check Writing Guide' : '支票填写指南'}. 
              {language === 'en' ? 'All rights reserved.' : '保留所有权利。'}
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex justify-center md:justify-end space-x-6">
            <Link 
              href="/disclaimer" 
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              {language === 'en' ? 'Disclaimer' : '免责声明'}
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              {language === 'en' ? 'Terms' : '术语'}
            </Link>
            <Link 
              href="/simulator" 
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              {language === 'en' ? 'Simulator' : '模拟器'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 