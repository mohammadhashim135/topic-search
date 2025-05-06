'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-semibold">Topic Search Browser</div>

        <div className="hidden md:flex space-x-6 text-sm">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-gray-700 text-sm px-4 pb-3 space-y-2">
          <Link href="/" className="block hover:text-gray-300">Home</Link>
          <Link href="/about" className="block hover:text-gray-300">About</Link>
          <Link href="/contact" className="block hover:text-gray-300">Contact</Link>
        </div>
      )}
    </nav>
  );
}
