'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/(general)/about', label: 'About' },
    { href: '/(general)/counter', label: 'Counter' },
    { href: '/(general)/product', label: 'Products' },
    { href: '/(general)/profile', label: 'Profile' },
  ];

  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={pathname === link.href ? 'underline font-bold' : ''}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
